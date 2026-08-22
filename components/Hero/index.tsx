'use client';

import React from 'react';
import { ChevronRight, Sprout, Users, ShieldCheck, Ship } from 'lucide-react';

interface HeroProps {
    scrollToSection: (id: string) => void;
    handleExploreProducts: () => void;
}

const TRUST_SIGNALS = [
    { icon: Sprout, label: 'Origin-Led Sourcing' },
    { icon: Users, label: 'Structured Supplier Network' },
    { icon: ShieldCheck, label: 'Quality Verification' },
    { icon: Ship, label: 'Export Coordination' },
];

const Hero: React.FC<HeroProps> = ({ scrollToSection, handleExploreProducts }) => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-[#FBF6EC] pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden">
                {/* Subtle dot texture, matches brand watermark feel */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #132644 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
                        {/* Text column */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white border border-[#C2A470]/40 px-4 py-1.5 rounded-full text-[#8a6f3f] text-xs md:text-sm font-semibold tracking-wide uppercase mb-6">
                                UniNexus Traders Private Limited
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 font-serif text-[#132644]">
                                From India <span className="text-[#8a6f3f]">to the World</span>
                            </h1>
                            <p className="text-lg md:text-xl text-[#132644]/80 mb-8 max-w-xl leading-relaxed border-l-4 border-[#C2A470] pl-6">
                                Connecting global markets with authentic Indian agricultural products — sourced directly from recognised growing regions, verified for quality, and coordinated end-to-end for export.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="bg-[#132644] hover:bg-[#0d1b30] text-white px-8 py-4 rounded-full font-semibold text-base md:text-lg transition-colors shadow-sm flex items-center justify-center gap-2"
                                >
                                    Request a Quote <ChevronRight className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={handleExploreProducts}
                                    className="bg-transparent hover:bg-white border-2 border-[#132644]/20 hover:border-[#C2A470] text-[#132644] px-8 py-4 rounded-full font-semibold text-base md:text-lg transition-colors flex items-center justify-center"
                                >
                                    View Products
                                </button>
                            </div>
                        </div>

                        {/* Image column */}
                        <div className="relative">
                            <div className="absolute -inset-3 border border-[#C2A470]/50 rounded-[2rem] hidden md:block"></div>
                            <div className="relative rounded-[1.75rem] overflow-hidden shadow-xl aspect-[4/3] md:aspect-[5/4]">
                                <img
                                    src="/assets/hero-spices.jpg"
                                    alt="Hands sourcing cardamom, turmeric and red chillies at origin in India"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#132644]/30 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Signals Strip */}
            <section className="py-10 md:py-12 bg-[#132644] text-white border-y border-[#C2A470]/20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {TRUST_SIGNALS.map(({ icon: Icon, label }, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center gap-3 p-2">
                                <div className="w-12 h-12 rounded-full border border-[#C2A470]/50 flex items-center justify-center text-[#C2A470]">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div className="text-sm md:text-base font-medium text-white/90 tracking-wide">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
