'use client';

import React from 'react';
import { Eye, Target, MapPin, Users2, Users, ShieldCheck, Globe2 } from 'lucide-react';

const Mission: React.FC = () => {
    return (
        <>
            <section id="mission" className="py-20 md:py-28 bg-[#132644] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #5EBBC8 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <h2 className="text-[#C2A470] font-bold tracking-wider uppercase text-sm mb-3">Vision &amp; Mission</h2>
                        <h3 className="text-3xl md:text-4xl font-bold font-serif">From Authentic Origins to Lasting Partnerships</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-[#C2A470]/30">
                            <div className="flex items-center gap-3 mb-4">
                                <Eye className="w-6 h-6 text-[#C2A470]" />
                                <h4 className="text-lg font-bold text-[#C2A470] tracking-wide">VISION</h4>
                            </div>
                            <p className="text-white/80 leading-relaxed">
                                To be a trusted global exporter of authentic Indian agricultural products through quality, sustainability and reliable sourcing.
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-[#C2A470]/30">
                            <div className="flex items-center gap-3 mb-4">
                                <Target className="w-6 h-6 text-[#C2A470]" />
                                <h4 className="text-lg font-bold text-[#C2A470] tracking-wide">MISSION</h4>
                            </div>
                            <p className="text-white/80 leading-relaxed">
                                To promote Indian agricultural products worldwide through a transparent and dependable export network that benefits farmers, suppliers and buyers.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="flex gap-4 p-6">
                            <MapPin className="w-8 h-8 text-[#C2A470] flex-shrink-0" />
                            <div>
                                <h5 className="font-bold text-white mb-1">Traceable Sourcing</h5>
                                <p className="text-white/60 text-sm leading-relaxed">Direct sourcing from verified growing regions to ensure authenticity, traceability and product integrity.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6">
                            <Users2 className="w-8 h-8 text-[#C2A470] flex-shrink-0" />
                            <div>
                                <h5 className="font-bold text-white mb-1">Long-Term Partnership</h5>
                                <p className="text-white/60 text-sm leading-relaxed">Building mutually beneficial relationships with farmers, suppliers and buyers rooted in trust and shared growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* GI Tags & Origin Authenticity */}
            <section className="py-20 md:py-24 bg-[#FBF6EC]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-[#8a6f3f] font-bold tracking-wider uppercase text-sm mb-3">GI Tags &amp; Legal Protection</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#132644] mb-5 font-serif">Protected Origin. Trusted Authenticity.</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            In India, Geographical Indication (GI) tags are granted under the Geographical Indications of Goods (Registration and Protection) Act, 1999, and administered by the Geographical Indications Registry, Chennai, under the Ministry of Commerce and Industry.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            { icon: Users, title: 'Exclusive Regional Use', desc: 'Only producers from the registered regions can legally use the GI tag for that product.' },
                            { icon: ShieldCheck, title: 'Protection From Imitation', desc: 'It prevents misuse or imitation by producers outside the registered region.' },
                            { icon: Globe2, title: 'Authenticity & Traceability', desc: 'It signals authentic origin to buyers, supporting premium value and export credibility.' },
                        ].map((item, idx) => (
                            <div key={idx} className="text-center p-6">
                                <div className="w-14 h-14 mx-auto rounded-full border border-[#C2A470]/50 flex items-center justify-center text-[#8a6f3f] mb-4">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h5 className="font-bold text-[#132644] mb-2">{item.title}</h5>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Mission;
