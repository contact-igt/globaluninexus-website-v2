'use client';

import React from 'react';
import { Sprout, Users, ShieldCheck, SearchCheck, ClipboardCheck, MapPin } from 'lucide-react';

const OVERVIEW_POINTS = [
    { icon: Sprout, title: 'Origin-Led Sourcing', desc: 'Commodities and spices sourced from recognised production regions across India.' },
    { icon: Users, title: 'Structured Network', desc: 'Working with regulated markets, FPOs, farmer clusters and verified regional suppliers.' },
    { icon: ShieldCheck, title: 'Quality & Reliability', desc: 'Disciplined SOPs from sourcing and quality verification to handling and export co-ordination.' },
];

const APPROACH_POINTS = [
    { icon: SearchCheck, title: 'Market Research' },
    { icon: ClipboardCheck, title: 'Product Feasibility' },
    { icon: MapPin, title: 'Supplier Verification' },
];

const WhyUs: React.FC = () => {
    return (
        <section id="about-us" className="py-20 md:py-28 bg-[#FBF6EC]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mb-14">
                    <h2 className="text-[#8a6f3f] font-bold tracking-wider uppercase text-sm mb-3">Company Overview</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#132644] mb-6 font-serif">
                        A structured system of sourcing, quality and reliability
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        UniNexus Traders is a Tamil Nadu-based import and export company sourcing premium agricultural commodities and spices from recognised production regions across India. Working with regulated markets, FPOs, farmer clusters and verified regional suppliers, we follow disciplined standard operating procedures from sourcing and quality verification through to handling and export co-ordination.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {OVERVIEW_POINTS.map((feature, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl border border-[#132644]/10 hover:border-[#C2A470] shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-[#C2A470]/40 text-[#267C92]">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-[#132644] mb-3 font-serif">{feature.title}</h4>
                            <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Strategic Approach */}
                <div className="bg-[#132644] rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h4 className="text-[#C2A470] font-bold tracking-wider uppercase text-sm mb-3">Strategic Approach</h4>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 font-serif">Built on Research Before Trade</h3>
                        <p className="text-white/75 leading-relaxed mb-8">
                            UniNexus was founded by professionals committed to building a reliable, research-driven agricultural export enterprise focused on quality, traceability and long-term value. Before initiating operations, the founders studied international demand, product feasibility and recognised production regions to identify the right commodities and market opportunities.
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                            {APPROACH_POINTS.map((point, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center gap-2">
                                    <div className="w-11 h-11 rounded-full border border-[#C2A470]/50 flex items-center justify-center text-[#C2A470]">
                                        <point.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-white/80 text-xs md:text-sm font-medium">{point.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-10">
                        <p className="text-2xl md:text-3xl font-serif text-white leading-snug mb-4">
                            &ldquo;We don&apos;t stock. We source with purpose.&rdquo;
                        </p>
                        <p className="text-white/60">
                            Every sourcing decision begins with origin, evidence and accountability.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
