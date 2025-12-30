
/**
 * CLOUDFLARE WORKER BACKEND - BLM POLTEKKES MATARAM
 * Binding Name: BLM_STORE (KV Namespace)
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Handle CORS Preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    try {
      // 1. GET DATA
      if (request.method === "GET") {
        let data = await env.BLM_STORE.get("website_data");
        
        // Jika data kosong di KV, kita kembalikan error yang meminta inisialisasi
        // Di Frontend, kita bisa menangani ini atau mem-paste data default ke KV via Dashboard
        if (!data) {
          return new Response(JSON.stringify({ 
            error: "Database belum diinisialisasi. Silakan login ke Admin dan simpan salah satu perubahan atau isi manual via Cloudflare Dashboard." 
          }), { status: 404, headers });
        }
        
        return new Response(data, { headers });
      }

      // 2. POST (UPDATE) DATA
      if (request.method === "POST") {
        const body = await request.json();
        const { action, payload } = body;
        
        let stored = await env.BLM_STORE.get("website_data");
        let currentData = stored ? JSON.parse(stored) : {};

        switch (action) {
          case 'UPDATE_HERO':
            currentData.hero = payload;
            break;
          case 'UPDATE_VISIMISI':
            currentData.visiMisi = payload;
            break;
          case 'UPDATE_COLLECTION':
            currentData[payload.sheetName] = payload.data;
            break;
          case 'UPDATE_LEADERSHIP':
            currentData.leadership = payload;
            break;
          case 'UPDATE_LOGOPHILOSOPHY':
            currentData.logoPhilosophy = payload;
            break;
          case 'INIT_DATA': // Fitur rahasia untuk reset/init
            currentData = payload;
            break;
          default:
            return new Response(JSON.stringify({ success: false, error: "Action tidak dikenali" }), { status: 400, headers });
        }

        await env.BLM_STORE.put("website_data", JSON.stringify(currentData));
        return new Response(JSON.stringify({ success: true }), { headers });
      }

      return new Response("Not Found", { status: 404 });
    } catch (err) {
      return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers });
    }
  },
};
