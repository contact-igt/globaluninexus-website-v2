'use client';

import React from 'react';
import {
    Compass, Layers, ShieldCheck as Governance,
    Search, MapPin, ClipboardCheck,
    Package, BadgeCheck, Boxes,
    FileCheck, Truck, PhoneCall,
    FileText, Building2, Warehouse, UtensilsCrossed,
} from 'lucide-react';

const PHILOSOPHY = [
    { icon: Compass, title: 'Origin First', desc: "Direct sourcing from the product's authentic growing region." },
    { icon: Layers, title: 'Beyond Trading', desc: 'Co-ordinating procurement, quality, documentation, logistics and communication.' },
    { icon: Governance, title: 'Structured Governance', desc: 'Accountability and transparency guide every decision.' },
];

const JOURNEY = [
    {
        stage: 'Origin & Research',
        image: '/assets/stage-origin-research.jpg',
        steps: [
            { icon: Search, label: 'Research' },
            { icon: MapPin, label: 'Origin Selection' },
            { icon: ClipboardCheck, label: 'Supplier Qualification' },
        ],
    },
    {
        stage: 'Procurement & Quality',
        image: '/assets/stage-procurement-quality.jpg',
        steps: [
            { icon: Boxes, label: 'Procurement' },
            { icon: BadgeCheck, label: 'Quality Verification' },
            { icon: Package, label: 'Packaging' },
        ],
    },
    {
        stage: 'Export & Support',
        image: '/assets/export-logistics.jpg',
        steps: [
            { icon: FileCheck, label: 'Export Compliance' },
            { icon: Truck, label: 'Logistics Co-ordination' },
            { icon: PhoneCall, label: 'Buyer Support' },
        ],
    },
];

const TRADE_DOCS = ['Commercial Invoice', 'Packing List', 'Certificate of Origin', 'Phytosanitary Certification', 'Import-Country Regulatory Documentation'];

const BUYERS = [
    { icon: Building2, label: 'Importers' },
    { icon: Warehouse, label: 'Wholesalers' },
    { icon: Boxes, label: 'Distributors' },
    { icon: UtensilsCrossed, label: 'Food Businesses' },
];

const OurEdge: React.FC = () => {
    return (
        <section id="process" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-6">
                    <h2 className="text-[#8a6f3f] font-bold tracking-wider uppercase text-sm mb-3">Our Operating Philosophy</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#132644] mb-6 font-serif">From Researched Origin to Dependable Buyer Support</h3>
                </div>

                {/* Philosophy pillars */}
                <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-16">
                    {PHILOSOPHY.map((p, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center gap-2 p-4">
                            <div className="w-11 h-11 rounded-full bg-[#132644] text-[#C2A470] flex items-center justify-center">
                                <p.icon className="w-5 h-5" />
                            </div>
                            <h5 className="font-bold text-[#132644] text-sm">{p.title}</h5>
                            <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Journey */}
                <div className="grid lg:grid-cols-3 gap-6 mb-16">
                    {JOURNEY.map((stage, idx) => (
                        <div key={idx} className="rounded-2xl border border-[#132644]/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            {stage.image && (
                                <div className="h-40 overflow-hidden">
                                    <img src={stage.image} alt={`${stage.stage} — UniNexus export process`} className="w-full h-full object-cover" />
                                </div>
                            )}
                            <div className={`p-6 ${stage.image ? '' : 'pt-8'}`}>
                                <span className="text-xs font-bold text-[#8a6f3f] tracking-widest uppercase">Stage 0{idx + 1}</span>
                                <h4 className="text-lg font-bold text-[#132644] mb-4 font-serif">{stage.stage}</h4>
                                <div className="space-y-3">
                                    {stage.steps.map((s, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm">
                                            <s.icon className="w-4 h-4 text-[#267C92] flex-shrink-0" />
                                            <span className="text-slate-700 font-medium">{s.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trade documentation + buyer categories */}
                <div className="grid md:grid-cols-2 gap-8 bg-[#FBF6EC] rounded-3xl p-8 md:p-12">
                    <div>
                        <h4 className="font-bold text-[#132644] mb-4 font-serif text-lg">Trade Documentation</h4>
                        <ul className="space-y-2">
                            {TRADE_DOCS.map((doc, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                                    <FileText className="w-4 h-4 text-[#8a6f3f] flex-shrink-0" /> {doc}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-[#132644] mb-4 font-serif text-lg">Who We Engage</h4>
                        <div className="grid grid-cols-2 gap-3">
                            {BUYERS.map((b, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-[#132644]/10 text-sm font-medium text-[#132644]">
                                    <b.icon className="w-4 h-4 text-[#267C92] flex-shrink-0" /> {b.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <p className="text-center text-[#132644]/70 font-medium mt-8 text-sm md:text-base tracking-wide">
                    Secure Handling &middot; Co-ordinated Logistics &middot; Timely Delivery
                </p>
            </div>
        </section>
    );
};

export default OurEdge;
