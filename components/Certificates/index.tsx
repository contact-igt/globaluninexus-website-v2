'use client';

import React from 'react';
import {
    FileBadge, Receipt, Landmark, Leaf, ClipboardList, Globe,
    Wind, Droplets, Award, MapPin, Sprout, ShieldCheck,
} from 'lucide-react';

const REGISTRATIONS = [
    { title: 'Import Export Code (IEC)', description: 'Issued by the Directorate General of Foreign Trade.', icon: <FileBadge className="w-7 h-7" /> },
    { title: 'GST Registration', description: 'Tax compliance for domestic and export trade.', icon: <Receipt className="w-7 h-7" /> },
    { title: 'APEDA Registration', description: 'Agricultural & Processed Food Products Export Development Authority.', icon: <Landmark className="w-7 h-7" /> },
    { title: 'Spice Board of India', description: 'Registration and compliance for Indian spice exports.', icon: <Leaf className="w-7 h-7" /> },
    { title: 'FSSAI Compliance', description: 'For food-related products.', icon: <ClipboardList className="w-7 h-7" /> },
    { title: 'Import-Country Requirements', description: 'Other certifications as required by importing countries.', icon: <Globe className="w-7 h-7" /> },
];

const DOCUMENTATION = [
    { title: 'Phytosanitary Certificate', description: 'Confirms shipments are free from pests and meet import-country plant health standards.', icon: <Sprout className="w-7 h-7" /> },
    { title: 'Fumigation Certificate', description: 'Certifies consignments are fumigated and pest-free for safe international handling.', icon: <Wind className="w-7 h-7" /> },
    { title: 'Moisture & Cleanliness Certificate', description: 'Confirms products meet required moisture and cleanliness parameters for export.', icon: <Droplets className="w-7 h-7" /> },
    { title: 'Quality Grading Certificate', description: 'Issued following strict grading processes for consistent product standards.', icon: <Award className="w-7 h-7" /> },
    { title: 'Country of Origin Certificate', description: 'Officially verifies where a product was grown, produced or processed.', icon: <MapPin className="w-7 h-7" /> },
    { title: 'Global GAP-Related Documentation', description: 'Aligned with international farm-level good agricultural practice standards.', icon: <ShieldCheck className="w-7 h-7" /> },
];

const IDENTIFIERS = [
    { label: 'Import Export Code (IEC)', value: 'AADCU9786H' },
    { label: 'GSTIN', value: '33AADCU9786H1ZT' },
    { label: 'Spice Board Code', value: 'CRES/SBCB/27775/2025-2026' },
    { label: 'FSSAI License', value: '12426999000151' },
];

const REG_LOGOS = [
    { src: '/assets/reg-logo-fssai.png', alt: 'FSSAI' },
    { src: '/assets/reg-logo-spices-board.png', alt: 'Spices Board India' },
    { src: '/assets/reg-logo-apeda.png', alt: 'APEDA' },
    { src: '/assets/reg-logo-fieo.png', alt: 'Federation of Indian Export Organisations' },
];

const Certificates: React.FC = () => {
    return (
        <section id="compliance" className="py-20 md:py-28 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <h2 className="text-[#8a6f3f] font-bold tracking-wider uppercase text-sm mb-3">Registrations &amp; Compliance</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#132644] mb-6 font-serif">
                        Prepared for responsible global trade
                    </h3>
                    <p className="text-slate-600 text-lg">
                        UniNexus Traders Private Limited operates in accordance with the regulatory framework governing exports from India.
                    </p>
                </div>

                {/* Verified identifiers */}
                <div className="mb-16 bg-[#132644] rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {IDENTIFIERS.map((id) => (
                        <div key={id.label}>
                            <div className="text-[#C2A470] text-[11px] font-bold uppercase tracking-widest mb-1.5">{id.label}</div>
                            <div className="text-white font-bold text-sm md:text-base tracking-tight break-all">{id.value}</div>
                        </div>
                    ))}
                </div>

                {/* Company-level registrations */}
                <div className="mb-16">
                    <h4 className="text-lg font-bold text-[#132644] mb-2 font-serif">Registration Categories</h4>
                    <p className="text-slate-500 text-sm mb-6 max-w-2xl">Company-level registrations maintained by UniNexus Traders Private Limited.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {REGISTRATIONS.map((cert) => (
                            <div key={cert.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
                                <div className="w-14 h-14 rounded-full bg-[#132644]/5 flex items-center justify-center text-[#132644] mb-4 group-hover:bg-[#132644] group-hover:text-[#C2A470] transition-colors duration-300">
                                    {cert.icon}
                                </div>
                                <h5 className="text-lg font-bold text-[#132644] mb-2">{cert.title}</h5>
                                <p className="text-slate-600 text-sm leading-relaxed">{cert.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Shipment-level documentation */}
                <div className="mb-16">
                    <h4 className="text-lg font-bold text-[#132644] mb-2 font-serif">Quality &amp; Export Documentation</h4>
                    <p className="text-slate-500 text-sm mb-6 max-w-2xl">Shipment and product-specific documentation, prepared as required for each export consignment.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {DOCUMENTATION.map((cert) => (
                            <div key={cert.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
                                <div className="w-14 h-14 rounded-full bg-[#132644]/5 flex items-center justify-center text-[#132644] mb-4 group-hover:bg-[#132644] group-hover:text-[#C2A470] transition-colors duration-300">
                                    {cert.icon}
                                </div>
                                <h5 className="text-lg font-bold text-[#132644] mb-2">{cert.title}</h5>
                                <p className="text-slate-600 text-sm leading-relaxed">{cert.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Regulatory affiliation logos */}
                <div className="pt-12 border-t border-slate-200">
                    <p className="text-center text-[11px] text-slate-400 font-semibold tracking-widest uppercase mb-8">Registered &amp; Recognised With</p>
                    <div className="flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-14 gap-y-6 mb-14">
                        {REG_LOGOS.map((logo) => (
                            <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-8 sm:h-9 w-auto object-contain" />
                        ))}
                    </div>

                    {/* Company letterhead block */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 max-w-3xl mx-auto text-center">
                        <h4 className="text-xl font-bold text-[#132644] font-serif mb-1">UniNexus Traders Private Limited</h4>
                        <p className="text-slate-500 text-sm mb-5">No. 101, NMK Street, Aynavaram, Chennai – 600023, Tamil Nadu, India</p>
                        <p className="text-sm text-slate-600">
                            <span className="font-semibold text-[#132644]">Directors:</span> Karthikeyan S, Praveen Kumar B, Reeta Ramanthan, Alakku Singaram
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
