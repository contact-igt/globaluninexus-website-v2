'use client';

import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
    scrollToSection: (id: string) => void;
    handleExploreProducts: () => void;
}

const QUICK_LINKS = [
    { label: 'About Us', id: 'about-us' },
    { label: 'Process', id: 'process' },
    { label: 'Compliance & Quality', id: 'compliance' },
    { label: 'Contact', id: 'contact' },
];

const PRODUCT_LINKS = ['Red Chillies', 'Turmeric', 'Cardamom', 'Black Pepper', 'Rice Varieties', 'Cashews & Almonds'];

const Footer: React.FC<FooterProps> = ({ scrollToSection, handleExploreProducts }) => {
    return (
        <footer className="bg-[#132644] text-[#F8F9FA]/70 pt-20 pb-10 border-t border-[#267C92]/30 relative z-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-white p-2 md:p-3 rounded-xl inline-block">
                                <img src="/assets/logo.png" alt="UniNexus Logo" className="w-32 md:w-40 h-auto object-contain" />
                            </div>
                        </div>
                        <p className="mb-6 text-[#F8F9FA]/60">
                            Connecting global markets with authentic Indian agricultural products. Purposeful sourcing, dependable partnerships.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 font-serif">Quick Links</h4>
                        <ul className="space-y-4">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.id}>
                                    <button onClick={() => scrollToSection(link.id)} className="hover:text-[#5EBBC8] transition-colors text-left">{link.label}</button>
                                </li>
                            ))}
                            <li>
                                <button onClick={handleExploreProducts} className="hover:text-[#5EBBC8] transition-colors text-left">Products</button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 font-serif">Our Products</h4>
                        <ul className="space-y-4">
                            {PRODUCT_LINKS.map((link) => (
                                <li key={link}>
                                    <button onClick={handleExploreProducts} className="hover:text-[#5EBBC8] transition-colors text-left">{link}</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 font-serif">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <MapPin className="text-[#C2A470] w-6 h-6 flex-shrink-0" />
                                <span>No. 101, NMK Street, Aynavaram, Chennai, Tamil Nadu, India - 600023</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="text-[#C2A470] w-6 h-6 flex-shrink-0" />
                                <a href="mailto:contact@globaluninexus.com" className="hover:text-[#C2A470] transition-colors">contact@globaluninexus.com</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="text-[#C2A470] w-6 h-6 flex-shrink-0" />
                                <a href="tel:+917904940409" className="hover:text-[#C2A470] transition-colors">+91 79049 40409</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#267C92]/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
                    <div className="text-[#F8F9FA]/50">
                        © 2026 UniNexus Traders Private Limited. All rights reserved.
                    </div>
                    <div className="text-[#F8F9FA]/50 flex flex-wrap items-center gap-x-6 gap-y-1">
                        <span>IEC: <span className="text-[#F8F9FA]/70">AADCU9786H</span></span>
                        <span>GSTIN: <span className="text-[#F8F9FA]/70">33AADCU9786H1ZT</span></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
