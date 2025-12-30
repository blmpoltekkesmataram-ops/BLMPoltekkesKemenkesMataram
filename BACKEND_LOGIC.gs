/**
 * BACKEND LOGIC FOR BLM POLTEKKES MATARAM
 * Paste this code into your Google Sheets Script Editor
 */

const SPREADSHEET_ID = 'MASUKKAN_ID_SPREADSHEET_ANDA_DISINI';

function doGet(e) {
  const data = getAllData();
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const requestData = JSON.parse(e.postData.contents);
  const action = requestData.action;
  const payload = requestData.payload;
  
  try {
    let result;
    switch(action) {
      case 'UPDATE_HERO':
        result = updateHero(payload);
        break;
      case 'UPDATE_VISIMISI':
        result = updateVisiMisi(payload);
        break;
      case 'UPDATE_COLLECTION':
        result = updateCollection(payload.sheetName, payload.data);
        break;
      case 'UPDATE_LEADERSHIP':
        result = updateLeadership(payload);
        break;
      case 'UPDATE_LOGOPHILOSOPHY':
        result = updateLogoPhilosophy(payload);
        break;
      default:
        throw new Error('Action not recognized');
    }
    return ContentService.createTextOutput(JSON.stringify({ success: true, result }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// --- Internal Logic Functions ---

function getAllData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Get Hero Data
  const heroSheet = ss.getSheetByName('hero');
  const heroData = { backgroundImage: heroSheet.getRange('A2').getValue() };
  
  // Get Visi Misi
  const vmSheet = ss.getSheetByName('visimisi');
  const visiMisi = {
    visi: vmSheet.getRange('A2').getValue(),
    misi: vmSheet.getRange('B2:B').getValues().flat().filter(String)
  };
  
  // Get Gallery
  const gallerySheet = ss.getSheetByName('gallery');
  const gallery = sheetToObjects(gallerySheet);
  
  // Get News
  const newsSheet = ss.getSheetByName('news');
  const news = sheetToObjects(newsSheet);
  
  // Get Leadership & Philosophy (Stored as JSON in cells for simplicity or separate sheets)
  const configSheet = ss.getSheetByName('config');
  const leadership = JSON.parse(configSheet.getRange('A2').getValue());
  const logoPhilosophy = JSON.parse(configSheet.getRange('B2').getValue());
  
  return { hero: heroData, visiMisi, gallery, news, leadership, logoPhilosophy };
}

function updateHero(payload) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('hero');
  sheet.getRange('A2').setValue(payload.backgroundImage);
  return "Hero Updated";
}

function updateCollection(sheetName, data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  sheet.clearContents();
  
  if (data.length === 0) return "Collection Cleared";
  
  const headers = Object.keys(data[0]);
  sheet.appendRow(headers);
  
  const rows = data.map(obj => headers.map(h => obj[h]));
  sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
  return `Collection ${sheetName} Updated`;
}

// Helper to convert Sheet to JSON
function sheetToObjects(sheet) {
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  return data.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => obj[h] = row[i]);
    return obj;
  });
}
