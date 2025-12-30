
import { PageData, NewsItem, ImageItem, MembersData, VisiMisiData, LogoPhilosophyData } from '../data/initialData';
import { API_URL } from '../config';

async function postData(action: string, payload: any) {
    if (API_URL.includes('YOUR-SUBDOMAIN')) {
        throw new Error("API URL Cloudflare belum dikonfigurasi di src/config.ts");
    }

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ action, payload }),
    });

    const result = await response.json();
    if (!response.ok || !result.success) {
        throw new Error(result.error || 'Gagal memperbarui data di Cloudflare.');
    }
    return result;
}

export const api = {
    async getData(): Promise<PageData> {
        if (API_URL.includes('YOUR-SUBDOMAIN')) {
            throw new Error("API URL Cloudflare belum dikonfigurasi di src/config.ts");
        }
        
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Gagal mengambil data dari Cloudflare Worker.");
        }
        return response.json();
    },
    
    async updateHeroBackground(base64: string): Promise<any> {
        return postData('UPDATE_HERO', { backgroundImage: base64 });
    },

    async updateVisiMisi(data: VisiMisiData): Promise<any> {
        return postData('UPDATE_VISIMISI', data);
    },

    async updateGallery(data: ImageItem[]): Promise<any> {
        return postData('UPDATE_COLLECTION', { sheetName: 'gallery', data });
    },

    async updateNews(data: NewsItem[]): Promise<any> {
        return postData('UPDATE_COLLECTION', { sheetName: 'news', data });
    },
    
    async updateLeadership(data: MembersData): Promise<any> {
        return postData('UPDATE_LEADERSHIP', data);
    },

    async updateLogoPhilosophy(data: LogoPhilosophyData): Promise<any> {
        return postData('UPDATE_LOGOPHILOSOPHY', data);
    }
};
