import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';

const FormField: React.FC<{ id: string, label: string, type?: string, required?: boolean, children: React.ReactNode }> = ({ id, label, required, children }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        {children}
    </div>
);


const Aspirasi: React.FC = () => {
    const [formData, setFormData] = useState({
        nama: '',
        nim: '',
        departemen: '',
        aspirasi: '',
        kontak: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.nama || !formData.nim || !formData.departemen || !formData.aspirasi) {
            alert('Mohon lengkapi semua field yang wajib diisi (bertanda *).');
            return;
        }
        console.log('Aspirasi Terkirim:', formData);
        setIsSubmitted(true);
    };
    
    const resetForm = () => {
        setIsSubmitted(false);
        setFormData({ nama: '', nim: '', departemen: '', aspirasi: '', kontak: '' });
    }

    if (isSubmitted) {
        return (
            <SectionWrapper id="aspirasi" title="Sampaikan Aspirasi Anda" bgClass="bg-white">
                <div className="max-w-2xl mx-auto text-center bg-green-50 border-l-4 border-green-500 p-10 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">Terima Kasih!</h3>
                    <p className="text-slate-700 mb-6">Aspirasi Anda telah berhasil kami terima. Kami akan menindaklanjutinya sesegera mungkin.</p>
                    <button
                        onClick={resetForm}
                        className="bg-brand-blue text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-900 transition-colors duration-300"
                    >
                        Kirim Aspirasi Lain
                    </button>
                </div>
            </SectionWrapper>
        );
    }

    return (
        <SectionWrapper id="aspirasi" title="Sampaikan Aspirasi Anda" bgClass="bg-white">
            <div className="max-w-2xl mx-auto bg-slate-50 p-8 rounded-lg shadow-xl border-t-4 border-brand-gold">
                <p className="text-center text-slate-600 mb-8">Kami mendengar Anda. Sampaikan ide, saran, atau keluhan Anda melalui formulir di bawah ini. Identitas Anda akan kami jaga kerahasiaannya.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <FormField id="nama" label="Nama Lengkap" required>
                        <input type="text" name="nama" id="nama" value={formData.nama} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" required />
                    </FormField>
                    <FormField id="nim" label="NIM (Nomor Induk Mahasiswa)" required>
                        <input type="text" name="nim" id="nim" value={formData.nim} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" required />
                    </FormField>
                    <FormField id="departemen" label="Jurusan / Program Studi" required>
                         <input type="text" name="departemen" id="departemen" value={formData.departemen} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" required />
                    </FormField>
                    <FormField id="aspirasi" label="Isi Aspirasi" required>
                        <textarea name="aspirasi" id="aspirasi" rows={5} value={formData.aspirasi} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" required></textarea>
                    </FormField>
                     <FormField id="kontak" label="Kontak (Email/No. HP - Opsional)">
                        <input type="text" name="kontak" id="kontak" value={formData.kontak} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                    </FormField>
                    <div className="text-right pt-4">
                        <button type="submit" className="w-full sm:w-auto bg-brand-blue text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-blue-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue">
                            Kirim Aspirasi
                        </button>
                    </div>
                </form>
            </div>
        </SectionWrapper>
    );
};

export default Aspirasi;