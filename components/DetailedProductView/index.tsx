'use client';

import React, { useEffect } from 'react';
import {
    ArrowLeft,
    ArrowRight,
    MapPin,
    Layers,
    Sparkles,
} from 'lucide-react';

interface DetailedProductViewProps {
    onBack: () => void;
    onEnquire: (productName: string) => void;
    onViewVarieties: (productName: string) => void;
}

interface ProductBlock {
    name: string;
    origin: string;
    image: string;
    badge?: string;
    hasVarieties?: boolean;
    varietiesSummary?: string;
    description: string;
    facts?: string[];
    table?: {
        rows: { attribute: string; a: string; b: string }[];
        colA: string;
        colB: string;
    };
}

const PRODUCTS: ProductBlock[] = [
    {
        name: 'Red Chillies',
        origin: 'Guntur, Andhra Pradesh',
        image: '/assets/guntur-red-chilli.webp',
        badge: 'GI Tagged',
        hasVarieties: true,
        varietiesSummary: 'Teja (S17), Sannam (334/S4), Byadgi & 341',
        description: 'Available in stem, stemless and powder forms. High pungency and rich colour, sourced from recognised chilli-growing regions with export-oriented quality handling.',
    },
    {
        name: 'Turmeric',
        origin: 'Erode, Tamil Nadu',
        image: '/assets/erode-turmeric-powder.jpeg',
        badge: 'GI Tagged',
        hasVarieties: true,
        varietiesSummary: 'Powder, Double-Polished Finger & Bulb',
        description: "Famous Erode turmeric from Tamil Nadu, known as the “Turmeric City of India.” High curcumin content, bright golden colour and strong aroma.",
    },
    {
        name: 'Cardamom',
        origin: 'Theni, Tamil Nadu & Idukki, Kerala',
        image: '/assets/theni-cardamom.png',
        hasVarieties: true,
        varietiesSummary: 'Large, Small, Powder & Husk (All Sizes Available)',
        description: 'Sourced from the Cardamom Hills region. All sizes available, with intense aroma and vibrant colour across forms.',
    },
    {
        name: 'Black Pepper',
        origin: 'Karnataka & Kerala',
        image: '/assets/karnataka-black-pepper.png',
        badge: 'GI Tagged Malabar',
        hasVarieties: true,
        varietiesSummary: 'Tellicherry Extra Bold (TGSEB) & Malabar Garbled (MG1)',
        description: 'Premium quality black pepper sourced from the renowned growing regions of Karnataka and Kerala. Carefully selected for rich aroma, strong pungency and superior quality. All sizes available.',
        table: {
            colA: 'Karnataka',
            colB: 'Kerala',
            rows: [
                { attribute: 'Aroma', a: 'Mild to moderate', b: 'Strong & complex' },
                { attribute: 'Oil Content', a: 'Moderate', b: 'Higher' },
                { attribute: 'Pungency', a: 'Good', b: 'Higher' },
            ],
        },
    },
    {
        name: 'Seeraga Samba Rice',
        origin: 'Tamil Nadu Delta',
        image: '/assets/seevaga-samba-rice.png',
        badge: 'GI Tagged',
        description: 'A premium, tiny-grained, aromatic South Indian rice variety and a traditional Tamil Nadu delta rice. Its unique texture aids in absorbing rich spices deeply, and it is preferred for easier digestion.',
    },
    {
        name: 'Kavuni Rice',
        origin: 'Chettinad Region, Tamil Nadu',
        image: '/assets/kavuni-rice-black.jpg',
        badge: 'Heritage Superfood',
        description: 'A South Indian heritage grain from the Chettinad region, also known as Indian black rice. Traditionally valued for its antioxidant and fibre content.',
    },
    {
        name: 'Basmati Rice',
        origin: 'Himalayan Foothills',
        image: '/assets/basmati-rice.jpg',
        badge: 'GI Protected',
        hasVarieties: true,
        varietiesSummary: '1126 Basmati, 1509 Basmati & 1885 Basmati',
        description: 'Long-grain, aromatic rice grown in specific geographical areas of the Himalayan foothills.',
        facts: ['Raw / White', 'Steamed', 'Sella / Parboiled', 'Golden Sella'],
    },
    {
        name: 'Cashews',
        origin: 'India',
        image: '/assets/cashews.jpg',
        badge: 'Export Graded',
        hasVarieties: true,
        varietiesSummary: 'W180 (King), W210 (Jumbo), W240 & W320',
        description: 'Carefully graded, naturally rich, export-quality cashews across four grade sizes.',
        facts: ['W180 (King)', 'W210 (Jumbo)', 'W240 (Large)', 'W320 (Standard)'],
    },
    {
        name: 'Almonds',
        origin: 'India',
        image: '/assets/almonds.jpg',
        description: 'Premium quality almonds, carefully selected for their rich taste, natural crunch and wholesome nutrition. Suited for everyday snacking, baking and recipe use.',
    },
    {
        name: 'Eggs',
        origin: 'Namakkal & Krishnagiri, Tamil Nadu',
        image: '/assets/eggs-white.jpg',
        hasVarieties: true,
        varietiesSummary: 'Export White Table Eggs & Farm Fresh Brown Eggs',
        description: "Sourced with care from Tamil Nadu's Namakkal and Krishnagiri regions. Quality assured, export ready.",
        facts: ['White Table Eggs', 'Brown Free-Range Eggs'],
    },
    {
        name: 'Puliyangudi Lemon',
        origin: 'Tamil Nadu',
        image: '/assets/lemon.avif',
        badge: 'GI Tagged',
        description: 'Known for its thin, aromatic peel, high juice content and high acidity.',
    },
    {
        name: 'Ayakudi Guava',
        origin: 'Palani District, Tamil Nadu',
        image: '/assets/guava.jpg',
        badge: 'GI Tagged',
        description: 'From the famous Palani district of Tamil Nadu. Sourced with care, quality assured, export ready.',
    },
];

const Tag: React.FC<{ children: React.ReactNode; muted?: boolean }> = ({ children, muted }) => (
    <span
        className={`text-[11px] font-bold px-3 py-1 rounded-full border whitespace-nowrap ${
            muted
                ? 'bg-transparent text-[#132644]/70 border-[#132644]/15'
                : 'bg-[#132644]/[0.04] text-[#132644] border-[#132644]/10'
        }`}
    >
        {children}
    </span>
);

const ProductCard: React.FC<{
    product: ProductBlock;
    onEnquire: (name: string) => void;
    onViewVarieties: (name: string) => void;
}> = ({ product, onEnquire, onViewVarieties }) => (
    <div className="group bg-white rounded-3xl border border-[#132644]/10 hover:border-[#C2A470] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden">
        {/* Product Image */}
        <div className="aspect-[4/3] overflow-hidden relative flex-shrink-0 bg-slate-100">
            <img
                src={product.image}
                alt={`${product.name} — ${product.origin}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#132644]/80 via-[#132644]/10 to-transparent"></div>

            {product.badge && (
                <span className="absolute top-3 left-3 bg-[#C2A470] text-[#132644] text-[11px] font-bold px-3 py-1 rounded-full tracking-wide uppercase shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {product.badge}
                </span>
            )}

            <div className="absolute bottom-3 left-4 right-4 text-white">
                <div className="flex items-center gap-1.5 text-[#C2A470] text-[11px] font-bold tracking-wide uppercase mb-0.5">
                    <MapPin className="w-3 h-3 flex-shrink-0" /> {product.origin}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif leading-tight">{product.name}</h3>
            </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
            <p className="text-slate-600 text-sm leading-relaxed mb-4">{product.description}</p>

            {/* Varieties preview pill if available */}
            {product.hasVarieties && product.varietiesSummary && (
                <div className="mb-4 bg-[#FBF6EC] border border-[#C2A470]/40 rounded-xl p-3">
                    <div className="text-[11px] font-bold text-[#8a6f3f] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        Available Varieties &amp; Forms:
                    </div>
                    <p className="text-xs font-semibold text-[#132644]">{product.varietiesSummary}</p>
                </div>
            )}

            {/* Table if present (e.g. Pepper) */}
            {product.table && (
                <div className="mb-4 rounded-xl border border-[#132644]/10 overflow-hidden text-xs">
                    <div className="grid grid-cols-3 bg-[#132644]/[0.05] font-bold text-[#132644] uppercase p-2 text-[10px]">
                        <div>Attribute</div>
                        <div>{product.table.colA}</div>
                        <div>{product.table.colB}</div>
                    </div>
                    {product.table.rows.map((r) => (
                        <div key={r.attribute} className="grid grid-cols-3 p-2 border-t border-slate-100 text-xs">
                            <span className="font-semibold text-[#8a6f3f]">{r.attribute}</span>
                            <span className="text-slate-600">{r.a}</span>
                            <span className="text-slate-600">{r.b}</span>
                        </div>
                    ))}
                </div>
            )}

            {/* Fact tags if present */}
            {product.facts && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.facts.map((f) => (
                        <Tag key={f} muted>
                            {f}
                        </Tag>
                    ))}
                </div>
            )}

            {/* Action Buttons Below the Product */}
            <div className="mt-auto pt-4 border-t border-[#132644]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                {product.hasVarieties ? (
                    <button
                        onClick={() => onViewVarieties(product.name)}
                        className="bg-[#C2A470] hover:bg-[#a9855a] text-[#132644] px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-1.5"
                    >
                        <Layers className="w-4 h-4" />
                        <span>Varieties</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                ) : (
                    <div />
                )}

                <button
                    onClick={() => onEnquire(product.name)}
                    className="bg-[#132644] hover:bg-[#0d1b30] text-white px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5"
                >
                    <span>Request Quote</span>
                </button>
            </div>
        </div>
    </div>
);

const DetailedProductView: React.FC<DetailedProductViewProps> = ({
    onBack,
    onEnquire,
    onViewVarieties,
}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#FBF6EC] min-h-screen pb-20 pt-20">
            {/* Header / Nav */}
            <div className="fixed top-0 left-0 w-full bg-[#FBF6EC]/95 backdrop-blur-sm shadow-sm z-40 py-4 border-b border-[#C2A470]/30">
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-[#132644] font-bold hover:bg-white px-4 py-2 rounded-lg transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-[#C2A470]" />
                        <span>Back to Home</span>
                    </button>
                    <span className="font-bold text-[#132644] text-lg hidden sm:block font-serif">
                        UniNexus Traders Catalogue
                    </span>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 mt-8">
                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto mb-14">
                    <span className="bg-white text-[#132644] border border-[#C2A470] px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6 inline-block shadow-sm">
                        Premium Export Catalogue
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#132644] mb-6 font-serif">
                        Our Premium Agricultural Products
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Authentic Indian spices, rice and produce sourced directly from recognised growing regions. Click on <strong>Varieties</strong> to explore detailed varieties, grades, and processing cuts.
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {PRODUCTS.map((product) => (
                        <ProductCard
                            key={product.name}
                            product={product}
                            onEnquire={onEnquire}
                            onViewVarieties={onViewVarieties}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center pb-12 pt-4">
                    <h3 className="text-2xl font-bold mb-6 text-[#132644] font-serif">
                        Interested in our Catalogue or Custom Sourcing?
                    </h3>
                    <button
                        onClick={() => onEnquire('Other')}
                        className="bg-[#132644] hover:bg-[#0d1b30] text-white px-8 py-4 rounded-full font-bold text-lg shadow-sm transition-colors"
                    >
                        Contact Us for a Quote
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailedProductView;
