'use client';

import React, { useState, useEffect } from 'react';
import {
    ArrowLeft,
    ArrowRight,
    MapPin,
    Sparkles,
    ShieldCheck,
    Layers,
} from 'lucide-react';

interface ProductVarietiesViewProps {
    initialProduct?: string;
    onBack: () => void;
    onBackToHome?: () => void;
    onEnquire: (productName: string) => void;
}

interface ChilliVariety {
    label: string;
    image: string;
    desc: string;
    appearance: string;
}

interface PhotoCard {
    label: string;
    image: string;
    subtitle?: string;
}

interface VarietyItem {
    label: string;
    desc: string;
    badge?: string;
}

interface ProductVarietyData {
    id: string;
    name: string;
    origin: string;
    subtitle?: string;
    tagline?: string;
    badge?: string;
    description: string;
    type: 'chilli-grid' | 'turmeric-row' | 'cardamom-grid' | 'pepper-table' | 'cards-list' | 'photo-grid';
    chilliVarieties?: ChilliVariety[];
    photoCards?: PhotoCard[];
    varieties?: VarietyItem[];
    facts?: string[];
    table?: {
        rows: { attribute: string; a: string; b: string }[];
        colA: string;
        colB: string;
    };
}

const VARIETIES_DATA: ProductVarietyData[] = [
    {
        id: 'red-chillies',
        name: 'Red Chillies',
        origin: 'Guntur, Andhra Pradesh • Byadgi, Karnataka',
        badge: 'GI Tagged',
        tagline: 'High Pungency, Capsaicin & Natural ASTA Color Varieties',
        description: 'India is the world’s leading producer and exporter of red chillies. We source directly from Guntur (Asia’s largest chilli hub) and certified GI regions, providing graded varieties in stem, stemless, crushed, and fine powder forms.',
        type: 'chilli-grid',
        chilliVarieties: [
            {
                label: 'TEJA (S17)',
                image: '/assets/chilli-teja.jpg',
                desc: 'Popular for international buyers. Exported stemless, with stem, and as powder. Perfect for soups, stir fry, stews and blends.',
                appearance: 'Appearance: Bright Red, Thin Skin, Fiery Hot',
            },
            {
                label: 'SANNAM (334 / S4)',
                image: '/assets/chilli-sannam.jpg',
                desc: 'Sannam skin is thick and red. When crushed — thick, red and hot. Rich in Vitamin C and Protein.',
                appearance: 'Appearance: Bright Red, Thick Skin, Hot',
            },
            {
                label: 'BYADGI',
                image: '/assets/chilli-byadgi.jpg',
                desc: 'Physically longer, brighter red, wrinkled and mild. Used in cuisines and colour extraction industries.',
                appearance: 'Appearance: Bright Red, Thin Skin, Less Hot',
            },
            {
                label: '341',
                image: '/assets/chilli-341.jpg',
                desc: 'Popular with masala and chilli powder companies. When crushed — dark red, less spicy.',
                appearance: 'Appearance: Dark Red, Thin Skin, Less Hot',
            },
        ],
    },
    {
        id: 'turmeric',
        name: 'Turmeric',
        origin: 'Erode, Tamil Nadu ("Turmeric City of India")',
        badge: 'GI Tagged',
        tagline: 'High Curcumin Content, Bright Golden Colour & Strong Aroma',
        description: 'Renowned worldwide for its high natural curcumin content, deep golden hue, and potent antimicrobial aroma. Sourced from the regulated agricultural markets of Erode and surrounding belts.',
        type: 'turmeric-row',
        photoCards: [
            { label: 'POWDER', image: '/assets/turmeric-powder.jpg' },
            { label: 'FINGER', image: '/assets/turmeric-finger.jpg' },
            { label: 'BULB', image: '/assets/turmeric-bulb.jpg' },
        ],
        facts: [
            'Curcumin Range: 3.0% – 5.0%+',
            'Double Polished & Single Polished Fingers',
            'Low Moisture (<10%) for Long Transit Stability',
            'Certified Free from Artificial Colorants / Lead Chromate',
        ],
    },
    {
        id: 'cardamom',
        name: 'Cardamom',
        origin: 'TAMIL NADU (THENI), KERALA (IDUKKI)',
        tagline: 'All sizes are available',
        description: 'Sourced from the lush misty elevations of the Cardamom Hills. Carefully graded by diameter, pod density, and vibrant green color retention with intense aromatic volatile oils.',
        type: 'cardamom-grid',
        photoCards: [
            { label: 'LARGE CARDAMOM', subtitle: 'Intense Aroma & Vibrant Color', image: '/assets/cardamom-large.jpg' },
            { label: 'SMALL CARDAMOM', subtitle: 'Intense Aroma & Vibrant Color', image: '/assets/cardamom-small.jpg' },
            { label: 'CARDAMOM POWDER', subtitle: 'Intense Aroma & Vibrant Color', image: '/assets/cardamom-powder.jpg' },
            { label: 'CARDAMOM HUSK', subtitle: 'Intense Aroma & Vibrant Color', image: '/assets/cardamom-husk.jpg' },
        ],
    },
    {
        id: 'black-pepper',
        name: 'Black Pepper',
        origin: 'Karnataka & Kerala',
        tagline: 'All sizes available',
        badge: 'GI Tagged Malabar',
        description: 'Known as the "King of Spices", sourced from the renowned high-altitude growing estates of Karnataka (Coorg) and Kerala (Malabar). Carefully graded for aroma, high piperine content, and bold berry density.',
        type: 'pepper-table',
        table: {
            colA: 'Karnataka',
            colB: 'Kerala',
            rows: [
                { attribute: 'Aroma', a: 'Mild to moderate', b: 'Strong & complex' },
                { attribute: 'Oil Content', a: 'Moderate', b: 'Higher' },
                { attribute: 'Pungency', a: 'Good', b: 'Higher' },
            ],
        },
        varieties: [
            { label: 'Tellicherry Extra Bold (TGSEB / TGEB - 4.75mm+)', desc: 'Largest gourmet berries harvested at full vine maturity, rich in volatile essential oils.' },
            { label: 'Malabar Garbled (MG1 - 550+ g/L)', desc: 'Benchmark export grade with high bulk density, destoned, uniform wrinkled black berries.' },
        ],
    },
    {
        id: 'basmati-rice',
        name: 'Basmati Rice',
        origin: 'Himalayan Foothills',
        badge: 'GI Protected',
        tagline: 'Extra-Long Grain Aromatic Heritage Rice',
        description: 'Grown in the fertile foothills of the Himalayas. Extra-long slender grains that elongate up to 2.5x upon cooking with delicate, natural vintage aroma.',
        type: 'cards-list',
        varieties: [
            { label: '1121 Basmati', desc: 'World-renowned extra-long grain (8.35mm+), exceptional cooked elongation, ideal for premium luxury biryani.', badge: 'Extra-Long Grain' },
            { label: '1509 Basmati', desc: 'Faster crop cycles and improved water efficiency, high yield with exquisite cooking fragrance.', badge: 'Long Slender' },
            { label: '1885 Basmati', desc: 'Modern high-yield cultivar with enhanced resistance to common crop pests and pristine kernel structure.', badge: 'Modern Hybrid' },
        ],
        facts: ['Raw / White', 'Steamed', 'Creamy Sella / Parboiled', 'Golden Sella'],
    },
    {
        id: 'cashews',
        name: 'Cashews',
        origin: 'India',
        badge: 'Export Graded',
        tagline: 'Export-Quality White Whole Kernels & Splits',
        description: 'Carefully graded, naturally rich, export-quality cashews across internationally recognized grade sizes.',
        type: 'cards-list',
        varieties: [
            { label: 'W180', desc: 'King of cashews. Largest and heaviest whole kernel, premier luxury presentation.', badge: '160–180 nuts/lb' },
            { label: 'W210', desc: 'Jumbo size whole cashew with smooth white appearance and rich natural crunch.', badge: '200–210 nuts/lb' },
            { label: 'W240', desc: 'Large size cashew offering an ideal balance of visual size and commercial value.', badge: '220–240 nuts/lb' },
            { label: 'W320', desc: 'Standard export grade, the international benchmark for bulk food service and packaging.', badge: '300–320 nuts/lb' },
        ],
        facts: ['White Wholes', 'Scorched Wholes (SW)', 'Splits (JH/JK)', 'Pieces (LWP/SWP)'],
    },
    {
        id: 'seeraga-samba-rice',
        name: 'Seeraga Samba Rice',
        origin: 'Cauvery Delta, Tamil Nadu',
        badge: 'GI Tagged Heritage',
        tagline: 'Tiny Aromatic Grains for Authentic South Indian Biryanis',
        description: 'A premium, tiny-grained, aromatic South Indian rice variety and a traditional Tamil Nadu delta heritage grain. Its unique porous starch texture absorbs rich seasonings and broths deeply, and it is preferred for easy digestion.',
        type: 'cards-list',
        varieties: [
            { label: 'Aged Seeraga Samba', desc: 'Naturally aged for 12+ months to achieve non-sticky fluffiness and distinct floral aroma.', badge: 'Aged 12M+' },
            { label: 'Polished Raw Samba', desc: 'Milled to an appealing pearl finish while retaining core fragrance and non-sticky cooking.', badge: 'Pearl Finish' },
            { label: 'Mappillai Samba (Bridegroom Rice)', desc: 'Ancient red heritage rice high in iron, zinc, and dietary fiber for vitality.', badge: 'Red Heritage' },
        ],
        facts: ['Traditional / Organic', 'Aged Samba', 'Polished Samba', 'Unpolished Samba'],
    },
    {
        id: 'eggs',
        name: 'Eggs',
        origin: 'Namakkal & Krishnagiri, Tamil Nadu',
        tagline: 'Biosecure Farm Fresh Export Eggs',
        description: 'Sourced with care from Tamil Nadu’s premier poultry belt in Namakkal. UV-sanitized, candled, weight-graded, and certified free from Salmonella.',
        type: 'photo-grid',
        photoCards: [
            { label: 'WHITE EGGS', subtitle: 'Export Table Eggs (50g–60g)', image: '/assets/eggs-white.jpg' },
            { label: 'BROWN EGGS', subtitle: 'Free-Range Farm Fresh', image: '/assets/eggs-brown.jpg' },
        ],
    },
];

const ProductVarietiesView: React.FC<ProductVarietiesViewProps> = ({
    initialProduct = 'Red Chillies',
    onBack,
    onBackToHome,
    onEnquire,
}) => {
    // Determine active product based on initialProduct
    const [selectedProductId, setSelectedProductId] = useState<string>(() => {
        const found = VARIETIES_DATA.find(
            (p) =>
                p.name.toLowerCase() === initialProduct.toLowerCase() ||
                p.id.toLowerCase() === initialProduct.toLowerCase() ||
                initialProduct.toLowerCase().includes(p.name.toLowerCase())
        );
        return found ? found.id : 'red-chillies';
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [selectedProductId]);

    // Update if prop changes
    useEffect(() => {
        if (initialProduct) {
            const found = VARIETIES_DATA.find(
                (p) =>
                    p.name.toLowerCase() === initialProduct.toLowerCase() ||
                    p.id.toLowerCase() === initialProduct.toLowerCase() ||
                    initialProduct.toLowerCase().includes(p.name.toLowerCase())
            );
            if (found) {
                setSelectedProductId(found.id);
            }
        }
    }, [initialProduct]);

    const activeProduct = VARIETIES_DATA.find((p) => p.id === selectedProductId) || VARIETIES_DATA[0];

    return (
        <div className="bg-[#FBF6EC] min-h-screen pb-24 pt-20">
            {/* Sticky Navigation Header */}
            <div className="fixed top-0 left-0 w-full bg-[#FBF6EC]/95 backdrop-blur-md shadow-sm z-40 py-3.5 border-b border-[#C2A470]/30">
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-[#132644] font-bold hover:bg-white px-4 py-2 rounded-full border border-transparent hover:border-[#C2A470]/40 transition-all group shadow-2xs text-sm"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#C2A470]" />
                        <span>Back to Catalogue</span>
                    </button>

                    <span className="font-bold text-[#132644] text-base md:text-lg font-serif">
                        Product Varieties &amp; Forms
                    </span>

                    {onBackToHome && (
                        <button
                            onClick={onBackToHome}
                            className="hidden sm:block text-xs font-semibold text-[#8a6f3f] hover:text-[#132644] transition-colors"
                        >
                            Home
                        </button>
                    )}
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 mt-6 max-w-6xl">
                {/* Product Navigation Pills */}
                <div className="mb-10 overflow-x-auto pb-2 scrollbar-none">
                    <div className="flex items-center gap-2.5 min-w-max">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 flex items-center gap-1">
                            <Layers className="w-3.5 h-3.5 text-[#8a6f3f]" /> Commodity:
                        </span>
                        {VARIETIES_DATA.map((product) => {
                            const isActive = product.id === activeProduct.id;
                            return (
                                <button
                                    key={product.id}
                                    onClick={() => setSelectedProductId(product.id)}
                                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                                        isActive
                                            ? 'bg-[#132644] text-white shadow-md'
                                            : 'bg-white text-[#132644] hover:bg-[#F8F9FA] border border-[#C2A470]/40'
                                    }`}
                                >
                                    {product.name}
                                    {product.badge && (
                                        <span
                                            className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                                                isActive ? 'bg-[#C2A470] text-[#132644]' : 'bg-[#FBF6EC] text-[#8a6f3f]'
                                            }`}
                                        >
                                            {product.badge}
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Main Product Header Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#132644]/10 shadow-sm mb-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                        <div>
                            <div className="inline-flex items-center gap-2 text-[#8a6f3f] text-xs sm:text-sm font-bold uppercase tracking-wide mb-2">
                                <MapPin className="w-4 h-4 flex-shrink-0" />
                                {activeProduct.origin}
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#132644] font-serif">
                                {activeProduct.name}
                            </h1>
                            {activeProduct.tagline && (
                                <p className="text-[#8a6f3f] text-base sm:text-lg font-medium mt-1">
                                    {activeProduct.tagline}
                                </p>
                            )}
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => onEnquire(activeProduct.name)}
                                className="bg-[#C2A470] hover:bg-[#a9855a] text-[#132644] px-6 py-3 rounded-full font-bold text-sm shadow-sm transition-all flex items-center gap-2"
                            >
                                <span>Request Quote for {activeProduct.name}</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <p className="text-slate-600 text-base leading-relaxed pt-6 max-w-4xl">
                        {activeProduct.description}
                    </p>
                </div>

                {/* VARIETIES DISPLAY SECTION - Matches Design Reference Images */}

                {/* 1. RED CHILLIES - Exact 2x2 Grid (Matching Image 1) */}
                {activeProduct.type === 'chilli-grid' && activeProduct.chilliVarieties && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14">
                        {activeProduct.chilliVarieties.map((v) => (
                            <div
                                key={v.label}
                                className="bg-[#FBF6EC] border-2 border-dashed border-[#C2A470] rounded-[2.5rem] p-7 sm:p-9 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Subtle background watermark feel */}
                                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 bg-white flex-shrink-0">
                                    <img src={v.image} alt={v.label} className="w-full h-full object-cover" />
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-bold text-[#132644] font-serif tracking-wide uppercase mb-3">
                                    {v.label}
                                </h3>

                                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 max-w-md flex-1">
                                    {v.desc}
                                </p>

                                <div className="pt-4 border-t border-[#C2A470]/40 w-full max-w-xs">
                                    <p className="text-[#8a6f3f] font-serif text-sm sm:text-base font-semibold italic">
                                        {v.appearance}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* 2. TURMERIC - Exact 3-Card Row (Matching Image 2) */}
                {activeProduct.type === 'turmeric-row' && activeProduct.photoCards && (
                    <div className="mb-14">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                            {activeProduct.photoCards.map((v) => (
                                <div
                                    key={v.label}
                                    className="bg-[#FBF6EC] border-2 border-[#C2A470] rounded-[2.5rem] p-6 sm:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all"
                                >
                                    <div className="aspect-square w-full rounded-2xl overflow-hidden mb-6 bg-white flex items-center justify-center p-4 shadow-xs">
                                        <img src={v.image} alt={v.label} className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-[#132644] tracking-widest uppercase font-serif">
                                        {v.label}
                                    </h3>
                                </div>
                            ))}
                        </div>

                        {activeProduct.facts && (
                            <div className="mt-8 bg-white rounded-2xl p-6 border border-[#132644]/10 shadow-xs">
                                <h4 className="text-sm font-bold text-[#132644] uppercase tracking-wider mb-4 flex items-center gap-2 font-serif">
                                    <Sparkles className="w-4 h-4 text-[#8a6f3f]" />
                                    Export Specifications &amp; Quality Parameters:
                                </h4>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {activeProduct.facts.map((fact) => (
                                        <div key={fact} className="flex items-center gap-2 text-sm text-slate-700 bg-[#FBF6EC] p-3 rounded-xl border border-[#C2A470]/30 font-medium">
                                            <span className="w-2 h-2 rounded-full bg-[#8a6f3f]"></span>
                                            {fact}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* 3. CARDAMOM - Exact 2x2 Grid with Dashed Bottom Boxes (Matching Image 3) */}
                {activeProduct.type === 'cardamom-grid' && activeProduct.photoCards && (
                    <div className="mb-14">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#132644] font-serif mb-1">
                                Cardamom
                            </h2>
                            <h3 className="text-sm sm:text-base font-bold text-[#132644] tracking-widest uppercase mb-1">
                                TAMIL NADU (THENI), KERALA (IDUKKI)
                            </h3>
                            <p className="text-slate-600 text-sm font-medium">All sizes are available</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                            {activeProduct.photoCards.map((v) => (
                                <div
                                    key={v.label}
                                    className="bg-white rounded-3xl p-4 sm:p-5 flex flex-col items-center border border-[#132644]/10 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="aspect-square w-full rounded-2xl overflow-hidden bg-white shadow-2xs p-4 flex items-center justify-center">
                                        <img src={v.image} alt={v.label} className="w-full h-full object-contain" />
                                    </div>

                                    <div className="w-full mt-4 border-2 border-dashed border-[#C2A470] rounded-2xl p-4 text-center bg-[#FBF6EC]">
                                        <h4 className="font-bold text-[#132644] text-base sm:text-lg tracking-wide uppercase font-serif">
                                            {v.label}
                                        </h4>
                                        {v.subtitle && (
                                            <p className="text-slate-600 text-xs sm:text-sm mt-0.5 font-medium">
                                                {v.subtitle}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 4. BLACK PEPPER - Table & Varieties */}
                {activeProduct.type === 'pepper-table' && (
                    <div className="space-y-8 mb-14">
                        {activeProduct.table && (
                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#132644]/10 shadow-sm">
                                <h3 className="text-xl font-bold text-[#132644] font-serif mb-4">
                                    Regional Characteristics Comparison
                                </h3>
                                <div className="rounded-2xl border border-[#132644]/15 overflow-hidden">
                                    <div className="grid grid-cols-3 bg-[#132644] text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                                        <div className="p-3.5">Parameter</div>
                                        <div className="p-3.5">{activeProduct.table.colA}</div>
                                        <div className="p-3.5">{activeProduct.table.colB}</div>
                                    </div>
                                    {activeProduct.table.rows.map((row) => (
                                        <div key={row.attribute} className="grid grid-cols-3 text-sm border-t border-slate-200">
                                            <div className="p-3.5 font-semibold text-[#8a6f3f] bg-slate-50">{row.attribute}</div>
                                            <div className="p-3.5 text-slate-700 bg-white">{row.a}</div>
                                            <div className="p-3.5 text-slate-700 bg-white">{row.b}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeProduct.varieties && (
                            <div className="grid sm:grid-cols-2 gap-6">
                                {activeProduct.varieties.map((v) => (
                                    <div key={v.label} className="bg-[#FBF6EC] border-2 border-dashed border-[#C2A470] rounded-3xl p-6">
                                        <h4 className="text-lg font-bold text-[#132644] font-serif mb-2">{v.label}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* 5. BASMATI, CASHEWS, SEERAGA SAMBA - Cards List */}
                {activeProduct.type === 'cards-list' && activeProduct.varieties && (
                    <div className="space-y-8 mb-14">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {activeProduct.varieties.map((v) => (
                                <div
                                    key={v.label}
                                    className="bg-[#FBF6EC] border-2 border-dashed border-[#C2A470] rounded-3xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
                                >
                                    <div>
                                        <div className="flex items-center justify-between gap-2 mb-3">
                                            <h4 className="text-xl font-bold text-[#132644] font-serif uppercase">
                                                {v.label}
                                            </h4>
                                            {v.badge && (
                                                <span className="text-[11px] font-bold bg-[#132644]/5 text-[#8a6f3f] border border-[#C2A470]/40 px-2.5 py-1 rounded-full whitespace-nowrap">
                                                    {v.badge}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                            {v.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {activeProduct.facts && (
                            <div className="bg-white rounded-2xl p-6 border border-[#132644]/10">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                                    Available Processing Forms / Grades:
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {activeProduct.facts.map((fact) => (
                                        <span key={fact} className="text-xs font-bold text-[#132644] bg-[#FBF6EC] border border-[#C2A470]/50 px-3.5 py-1.5 rounded-full">
                                            {fact}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* 6. EGGS PHOTO GRID */}
                {activeProduct.type === 'photo-grid' && activeProduct.photoCards && (
                    <div className="grid sm:grid-cols-2 gap-8 mb-14 max-w-4xl mx-auto">
                        {activeProduct.photoCards.map((v) => (
                            <div
                                key={v.label}
                                className="bg-[#FBF6EC] border-2 border-[#C2A470] rounded-3xl p-6 flex flex-col items-center text-center shadow-sm"
                            >
                                <div className="aspect-square w-full rounded-2xl overflow-hidden mb-5 bg-white shadow-xs">
                                    <img src={v.image} alt={v.label} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-[#132644] font-serif uppercase mb-1">
                                    {v.label}
                                </h3>
                                {v.subtitle && (
                                    <p className="text-slate-600 text-sm font-medium">{v.subtitle}</p>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Bottom Quote & Sourcing Callout */}
                <div className="bg-[#132644] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-[#C2A470] text-xs font-semibold tracking-wide uppercase mb-4">
                            <ShieldCheck className="w-4 h-4" /> Export Quality Sourcing
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-3 font-serif">
                            Need specific grades or custom packaging for {activeProduct.name}?
                        </h3>
                        <p className="text-white/75 text-sm sm:text-base mb-6 max-w-xl mx-auto">
                            We coordinate direct procurement, moisture-controlled storage, export documentation, and global shipping.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => onEnquire(activeProduct.name)}
                                className="bg-[#C2A470] hover:bg-[#a9855a] text-[#132644] px-8 py-3.5 rounded-full font-bold text-base shadow-md transition-all"
                            >
                                Enquire for {activeProduct.name}
                            </button>
                            <button
                                onClick={onBack}
                                className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-3.5 rounded-full font-semibold text-base transition-all"
                            >
                                View All Products
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductVarietiesView;
