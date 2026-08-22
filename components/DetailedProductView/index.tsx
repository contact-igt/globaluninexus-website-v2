'use client';

import React, { useEffect } from 'react';
import {
    ArrowLeft,
    ArrowRight,
    MapPin,
} from 'lucide-react';

interface DetailedProductViewProps {
    onBack: () => void;
    onEnquire: (productName: string) => void;
}

interface VarietyItem {
    label: string;
    desc: string;
}

interface VarietyPhoto {
    label: string;
    image: string;
}

interface ProductBlock {
    name: string;
    origin: string;
    image: string;
    badge?: string;
    description: string;
    varieties?: VarietyItem[];
    facts?: string[];
    varietyPhotos?: VarietyPhoto[];
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
        description: 'Available in stem, stemless and powder forms. High pungency and rich colour, sourced from recognised chilli-growing regions with export-oriented quality handling.',
        varieties: [
            { label: 'Teja (S17)', desc: 'Popular for international buyers. Exported stemless, with stem, and as powder. Bright red, thin skin, fiery hot.' },
            { label: 'Sannam (334 / S4)', desc: 'Thick, red skin; hot when crushed. Bright red, thick skin, hot.' },
            { label: 'Byadgi', desc: 'Longer, brighter red, wrinkled and mild. Used in cuisines and colour extraction. Thin skin, less hot.' },
            { label: '341', desc: 'Popular with masala and chilli powder companies. Dark red, thin skin, less hot.' },
        ],
    },
    {
        name: 'Turmeric',
        origin: 'Erode, Tamil Nadu',
        image: '/assets/erode-turmeric-powder.jpeg',
        badge: 'GI Tagged',
        description: "Famous Erode turmeric from Tamil Nadu, known as the “Turmeric City of India.” High curcumin content, bright golden colour and strong aroma.",
        varietyPhotos: [
            { label: 'Powder', image: '/assets/turmeric-powder.jpg' },
            { label: 'Finger', image: '/assets/turmeric-finger.jpg' },
            { label: 'Bulb', image: '/assets/turmeric-bulb.jpg' },
        ],
    },
    {
        name: 'Cardamom',
        origin: 'Theni, Tamil Nadu & Idukki, Kerala',
        image: '/assets/theni-cardamom.png',
        description: 'Sourced from the Cardamom Hills region. All sizes available, with intense aroma and vibrant colour across forms.',
        varietyPhotos: [
            { label: 'Large Cardamom', image: '/assets/cardamom-large.jpg' },
            { label: 'Small Cardamom', image: '/assets/cardamom-small.jpg' },
            { label: 'Cardamom Powder', image: '/assets/cardamom-powder.jpg' },
            { label: 'Cardamom Husk', image: '/assets/cardamom-husk.jpg' },
        ],
    },
    {
        name: 'Black Pepper',
        origin: 'Karnataka & Kerala',
        image: '/assets/karnataka-black-pepper.png',
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
        description: 'A premium, tiny-grained, aromatic South Indian rice variety and a traditional Tamil Nadu delta rice. Its unique texture aids in absorbing rich spices deeply, and it is preferred for easier digestion.',
        facts: ['Traditional / Organic', 'Aged Samba', 'Polished Samba', 'Unpolished Samba'],
    },
    {
        name: 'Kavuni Rice',
        origin: 'Chettinad Region, Tamil Nadu',
        image: '/assets/kavuni-rice-black.jpg',
        description: 'A South Indian heritage grain from the Chettinad region, also known as Indian black rice. Traditionally valued for its antioxidant and fibre content.',
        facts: ['Red Kavuni Rice', 'Black Kavuni Rice'],
    },
    {
        name: 'Basmati Rice',
        origin: 'Himalayan Foothills',
        image: '/assets/basmati-rice.jpg',
        description: 'Long-grain, aromatic rice grown in specific geographical areas of the Himalayan foothills.',
        varieties: [
            { label: '1121 Basmati', desc: 'World-renowned extra-long grain, ideal for premium biryani.' },
            { label: '1509 Basmati', desc: 'Faster crop cycles and improved water efficiency.' },
            { label: '1885 Basmati', desc: 'Improved resistance to common crop pests.' },
        ],
        facts: ['Raw / White', 'Steamed', 'Sella / Parboiled'],
    },
    {
        name: 'Cashews',
        origin: 'India',
        image: '/assets/cashews.jpg',
        description: 'Carefully graded, naturally rich, export-quality cashews across four grade sizes.',
        varieties: [
            { label: 'W180', desc: 'King of cashews.' },
            { label: 'W210', desc: 'Jumbo size.' },
            { label: 'W240', desc: 'Large size.' },
            { label: 'W320', desc: 'Standard size.' },
        ],
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
        description: "Sourced with care from Tamil Nadu's Namakkal and Krishnagiri regions. Quality assured, export ready.",
        varietyPhotos: [
            { label: 'White Eggs', image: '/assets/eggs-white.jpg' },
            { label: 'Brown Eggs', image: '/assets/eggs-brown.jpg' },
        ],
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
        description: 'From the famous Palani district of Tamil Nadu. Sourced with care, quality assured, export ready.',
    },
];

const Tag: React.FC<{ children: React.ReactNode; muted?: boolean }> = ({ children, muted }) => (
    <span
        className={`text-[11px] font-bold px-2.5 py-1 rounded-full border whitespace-nowrap ${muted
                ? 'bg-transparent text-[#132644]/70 border-[#132644]/15'
                : 'bg-[#132644]/[0.04] text-[#132644] border-[#132644]/10'
            }`}
    >
        {children}
    </span>
);

const ProductCard: React.FC<{ product: ProductBlock; onEnquire: (name: string) => void }> = ({ product, onEnquire }) => (
    <div className="group bg-white rounded-2xl border border-[#132644]/10 hover:border-[#C2A470]/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden relative flex-shrink-0">
            <img
                src={product.image}
                alt={`${product.name} — ${product.origin}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {product.badge && (
                <span className="absolute top-3 left-3 bg-[#C2A470] text-[#132644] text-[11px] font-bold px-3 py-1 rounded-full tracking-wide uppercase shadow-sm">
                    {product.badge}
                </span>
            )}
        </div>

        <div className="p-5 sm:p-6 flex flex-col flex-1">
            <div className="flex items-center gap-1.5 text-[#8a6f3f] text-xs font-bold tracking-wide uppercase mb-2">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" /> {product.origin}
            </div>
            <h3 className="text-xl font-bold text-[#132644] font-serif mb-2">{product.name}</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">{product.description}</p>

            {product.varietyPhotos && (
                <div className="flex flex-wrap gap-3 mb-4">
                    {product.varietyPhotos.map((v) => (
                        <div key={v.label} className="text-center w-16 sm:w-[4.75rem]">
                            <div className="aspect-square rounded-lg overflow-hidden border border-[#132644]/10 mb-1.5">
                                <img src={v.image} alt={`${v.label} — ${product.name}`} className="w-full h-full object-cover" />
                            </div>
                            <span className="text-[9px] font-bold text-[#132644]/70 tracking-wide uppercase leading-tight block">{v.label}</span>
                        </div>
                    ))}
                </div>
            )}

            {product.table && (
                <div className="mb-4 rounded-lg border border-[#132644]/10 overflow-x-auto">
                    <div className="min-w-[280px]">
                        <div className="grid grid-cols-3 bg-[#132644]/[0.04] text-[10px] font-bold text-[#132644] uppercase tracking-wide">
                            <div className="p-2"></div>
                            <div className="p-2">{product.table.colA}</div>
                            <div className="p-2">{product.table.colB}</div>
                        </div>
                        {product.table.rows.map((row) => (
                            <div key={row.attribute} className="grid grid-cols-3 text-xs border-t border-[#132644]/10">
                                <div className="p-2 font-semibold text-[#8a6f3f]">{row.attribute}</div>
                                <div className="p-2 text-slate-600">{row.a}</div>
                                <div className="p-2 text-slate-600">{row.b}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {(product.varieties || product.facts) && (
                <div className="space-y-2 mb-4">
                    {product.varieties && (
                        <div className="flex flex-wrap gap-1.5">
                            {product.varieties.map((v) => (
                                <Tag key={v.label}>{v.label}</Tag>
                            ))}
                        </div>
                    )}
                    {product.facts && (
                        <div className="flex flex-wrap gap-1.5">
                            {product.facts.map((f) => (
                                <Tag key={f} muted>{f}</Tag>
                            ))}
                        </div>
                    )}
                </div>
            )}

            <div className="mt-auto pt-4 border-t border-[#132644]/10">
                <button
                    onClick={() => onEnquire(product.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#132644] hover:text-[#8a6f3f] transition-colors group/btn"
                >
                    Enquire about this product
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
            </div>
        </div>
    </div>
);

const DetailedProductView: React.FC<DetailedProductViewProps> = ({ onBack, onEnquire }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#FBF6EC] min-h-screen pb-20 pt-20">
            {/* Header / Nav for subpage */}
            <div className="fixed top-0 left-0 w-full bg-[#FBF6EC]/95 backdrop-blur-sm shadow-sm z-40 py-4 border-b border-[#C2A470]/30">
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-[#132644] font-bold hover:bg-white px-4 py-2 rounded-lg transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-[#C2A470]" /> Back to Home
                    </button>
                    <span className="font-bold text-[#132644] text-lg hidden sm:block font-serif">UniNexus Traders Catalogue</span>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 mt-8">
                {/* Main Section Heading */}
                <div className="text-center max-w-4xl mx-auto mb-14">
                    <span className="bg-white text-[#132644] border border-[#C2A470] px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6 inline-block shadow-sm">
                        Premium Export Catalogue
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#132644] mb-6 font-serif">Our Premium Agricultural Products</h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Authentic Indian spices, rice and produce sourced directly from recognised growing regions — curated for export, wholesale and bulk supply.
                    </p>
                </div>

                {/* Product grid */}
                <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-16">
                    {PRODUCTS.map((product) => (
                        <ProductCard key={product.name} product={product} onEnquire={onEnquire} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center pb-12 pt-4">
                    <h3 className="text-2xl font-bold mb-6 text-[#132644] font-serif">Interested in our Catalogue?</h3>
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
