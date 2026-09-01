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

interface CashewVariety {
    label: string;
    subtitle: string;
    image: string;
    desc?: string;
    imageClass?: string;
    category?: 'wholes' | 'scorched' | 'splits' | 'pieces';
    countPerLb?: string;
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

interface RiceVariety {
    label: string;
    subtitle: string;
    image: string;
    desc: string;
    badge?: string;
    specs: string;
}

interface ProductVarietyData {
    id: string;
    name: string;
    origin: string;
    subtitle?: string;
    tagline?: string;
    badge?: string;
    description: string;
    type: 'chilli-grid' | 'turmeric-row' | 'cardamom-grid' | 'cashew-grid' | 'pepper-table' | 'cards-list' | 'photo-grid' | 'rice-grid';
    chilliVarieties?: ChilliVariety[];
    cashewVarieties?: CashewVariety[];
    riceVarieties?: RiceVariety[];
    photoCards?: PhotoCard[];
    formCards?: PhotoCard[];
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
            {
                label: 'COMMERCIAL',
                subtitle: 'Conventional Grade • Double Polished',
                image: '/assets/commercial.png',
            },
            {
                label: 'IPM',
                subtitle: 'Pesticide Controlled • EU / US MRL Compliant',
                image: '/assets/ipm.png',
            },
            {
                label: 'ORGANIC',
                subtitle: '100% Chemical-Free • Certified Organic',
                image: '/assets/organic.png',
            },
        ],
        formCards: [
            {
                label: 'POWDER',
                subtitle: '100% Pure Fine Ground 100–120 Mesh',
                image: '/assets/turmeric-powder.jpg',
            },
            {
                label: 'FINGER',
                subtitle: 'Double & Single Polished Whole Fingers',
                image: '/assets/turmeric-finger.jpg',
            },
            {
                label: 'BULB',
                subtitle: 'High Curcumin Whole Round Bulbs (Gatha)',
                image: '/assets/turmeric-bulb.jpg',
            },
        ],
        facts: [
            'Curcumin Range: 3.0% – 5.0%+',
            'Double Polished & Single Polished Fingers',
            'Low Moisture (<10%) for Long Transit Stability',
            'Certified Free from Artificial Colorants & Lead Chromate',
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
        id: 'cashews',
        name: 'Cashews',
        origin: 'India',
        badge: 'Export Graded (28 Grades)',
        tagline: 'Export-Quality White Wholes, Scorched Grades, Splits & Cleaned Pieces',
        description: 'Comprehensive export portfolio covering all 28 recognized international cashew grades — from super-jumbo White Wholes (W180–W450) and rich Scorched Wholes to culinary Splits, Butts, Large White Pieces (LWP), Small Pieces (SWP), and Cleaned Baby Bits (BB1). Sourced directly from certified processing hubs in Kollam, Mangalore, and Panruti.',
        type: 'cashew-grid',
        cashewVarieties: [
            // White Wholes (WW / CW)
            {
                label: 'W180',
                subtitle: 'King of Cashews',
                image: '/assets/cashew-w180.jpg',
                desc: 'Largest whole kernel grade (160–180 nuts/lb). Luxurious presentation with rich crunch, ideal for elite gifting and retail.',
                category: 'wholes',
                countPerLb: '160–180 / lb',
            },
            {
                label: 'W210',
                subtitle: 'Jumbo Size',
                image: '/assets/cashew-w210.jpg',
                desc: 'Jumbo size whole cashew (200–210 nuts/lb) with smooth white appearance and rich natural crunch.',
                category: 'wholes',
                countPerLb: '200–210 / lb',
            },
            {
                label: 'W240',
                subtitle: 'Large Size',
                image: '/assets/cashew-w240.jpg',
                desc: 'Large size cashew (220–240 nuts/lb) offering an ideal balance of visual size, crunch, and commercial value.',
                imageClass: 'scale-115 translate-x-4',
                category: 'wholes',
                countPerLb: '220–240 / lb',
            },
            {
                label: 'CW240',
                subtitle: 'Commercial White 240',
                image: '/assets/cashew-w240.jpg',
                desc: 'Commercial grade white whole kernels (220–240 count/lb) with slight natural color variation for retail repacking.',
                category: 'wholes',
                countPerLb: '220–240 / lb',
            },
            {
                label: 'W320',
                subtitle: 'Standard Export Grade',
                image: '/assets/cashew-w320.jpg',
                desc: 'Standard export grade (300–320 nuts/lb), the global benchmark for bulk packaging, roasting, and food service.',
                category: 'wholes',
                countPerLb: '300–320 / lb',
            },
            {
                label: 'CW320',
                subtitle: 'Commercial White 320',
                image: '/assets/cashew-w320.jpg',
                desc: 'Commercial white wholes (300–320 count/lb). Economical whole cashew grade for FMCG packaging and sweet makers.',
                category: 'wholes',
                countPerLb: '300–320 / lb',
            },
            {
                label: 'W450',
                subtitle: 'Small Whole Grade',
                image: '/assets/cashews.jpg',
                desc: 'Small whole cashew kernels (400–450 nuts/lb). Highly popular for chocolate coatings, snack mixes, and baking.',
                category: 'wholes',
                countPerLb: '400–450 / lb',
            },
            {
                label: 'CW450',
                subtitle: 'Commercial White 450',
                image: '/assets/cashews.jpg',
                desc: 'Commercial small whole kernels (400–450 count/lb), maximizing nut count per packaging unit at high value.',
                category: 'wholes',
                countPerLb: '400–450 / lb',
            },

            // Scorched Wholes & Dessert Wholes
            {
                label: 'SW240',
                subtitle: 'Scorched Wholes 240',
                image: '/assets/cashew-scorched.jpg',
                desc: 'Large whole kernels (220–240 count/lb) with a natural golden-toasted hue from drying. Deep roasted flavor profile.',
                category: 'scorched',
                countPerLb: '220–240 / lb',
            },
            {
                label: 'SW320',
                subtitle: 'Scorched Wholes 320',
                image: '/assets/cashew-scorched.jpg',
                desc: 'Standard size scorched whole kernels (300–320 count/lb). Perfect for flavored snack seasonings and bakery products.',
                category: 'scorched',
                countPerLb: '300–320 / lb',
            },
            {
                label: 'SW450',
                subtitle: 'Scorched Wholes 450',
                image: '/assets/cashew-scorched.jpg',
                desc: 'Small whole scorched cashews (400–450 count/lb) offering intense nutty taste for trail mixes and industrial baking.',
                category: 'scorched',
                countPerLb: '400–450 / lb',
            },
            {
                label: 'DW',
                subtitle: 'Dessert Wholes',
                image: '/assets/cashew-scorched.jpg',
                desc: 'Deeply roasted or speckled whole kernels with robust flavor, specially selected for gourmet confectionery and desserts.',
                category: 'scorched',
                countPerLb: 'Assorted Wholes',
            },
            {
                label: 'SSW',
                subtitle: 'Slightly Scorched Wholes',
                image: '/assets/cashew-scorched.jpg',
                desc: 'Whole kernels with slight light-brown surface tint, maintaining unbroken whole shape and natural crunch.',
                category: 'scorched',
                countPerLb: 'Assorted Wholes',
            },

            // Splits, Halves & Butts
            {
                label: 'FB',
                subtitle: 'Fancy Butts',
                image: '/assets/cashew-splits.jpg',
                desc: 'Kernels broken cleanly across the middle (transversely). Plump white appearance, optimal for cooking and sweets.',
                category: 'splits',
                countPerLb: 'Transverse Halves',
            },
            {
                label: 'JH',
                subtitle: 'Jumbo Halves / Splits',
                image: '/assets/cashew-splits.jpg',
                desc: 'Kernels cleanly split lengthwise into two distinct halves. Premium visual presentation for gourmet garnishing.',
                category: 'splits',
                countPerLb: 'Lengthwise Halves',
            },
            {
                label: 'FS',
                subtitle: 'Fancy Splits',
                image: '/assets/cashew-splits.jpg',
                desc: 'White kernels split lengthwise into halves, completely undamaged. Widely exported for food service and packaging.',
                category: 'splits',
                countPerLb: 'Lengthwise Halves',
            },
            {
                label: 'FS-S',
                subtitle: 'Fancy Splits Scorched',
                image: '/assets/cashew-splits.jpg',
                desc: 'Lengthwise split cashew halves with light golden scorching, delivering toasted crunch for curry gravies and baking.',
                category: 'splits',
                countPerLb: 'Scorched Halves',
            },
            {
                label: 'SB',
                subtitle: 'Scorched Butts',
                image: '/assets/cashew-splits.jpg',
                desc: 'Transversely broken cashew halves with a golden roast tint, offering rich aroma in commercial food formulations.',
                category: 'splits',
                countPerLb: 'Scorched Butts',
            },
            {
                label: 'SS',
                subtitle: 'Scorched Splits',
                image: '/assets/cashew-splits.jpg',
                desc: 'Lengthwise split cashew halves with scorched color, providing an economical ingredient for snack bars and sauces.',
                category: 'splits',
                countPerLb: 'Scorched Splits',
            },

            // Pieces, Kolas & Baby Bits
            {
                label: 'LWP',
                subtitle: 'Large White Pieces',
                image: '/assets/cashew-pieces.jpg',
                desc: 'Kernels broken into 4–6 uniform white pieces. The global standard for bakeries, ice creams, and luxury sweets.',
                category: 'pieces',
                countPerLb: 'Large Cut Pieces',
            },
            {
                label: 'K',
                subtitle: 'Kernels / Kolas',
                image: '/assets/cashew-pieces.jpg',
                desc: 'Clean broken kernels and large splits preferred for traditional sweet manufacturing and industrial cooking.',
                category: 'pieces',
                countPerLb: 'Commercial Pieces',
            },
            {
                label: 'LWP-S',
                subtitle: 'Large White Pieces Scorched',
                image: '/assets/cashew-pieces.jpg',
                desc: 'Large broken cashew pieces with a toasted golden hue. Popular for spiced snack mixes and cookie doughs.',
                category: 'pieces',
                countPerLb: 'Scorched Large Pieces',
            },
            {
                label: 'SWP',
                subtitle: 'Small White Pieces',
                image: '/assets/cashew-pieces.jpg',
                desc: 'Cleanly broken small white cashew pieces. Excellent for toppings, biscuits, dairy desserts, and granola.',
                category: 'pieces',
                countPerLb: 'Small Cut Pieces',
            },
            {
                label: 'SWP-S',
                subtitle: 'Small White Pieces Scorched',
                image: '/assets/cashew-pieces.jpg',
                desc: 'Small broken pieces with light toasted shade, providing concentrated nutty richness to confectionery blends.',
                category: 'pieces',
                countPerLb: 'Small Scorched Pieces',
            },
            {
                label: 'SWP-S Small',
                subtitle: 'Small Pieces Scorched (Fine)',
                image: '/assets/cashew-pieces.jpg',
                desc: 'Extra-fine scorched pieces screened for uniform consistency in energy bars, granolas, and chocolate fillings.',
                category: 'pieces',
                countPerLb: 'Fine Scorched Pieces',
            },
            {
                label: 'SK1',
                subtitle: 'Scorched Kolas 1',
                image: '/assets/cashew-pieces.jpg',
                desc: 'Grade 1 scorched splits and broken pieces for commercial food preparation, pastes, and gravies.',
                category: 'pieces',
                countPerLb: 'Broken Kolas Gr.1',
            },
            {
                label: 'SK2',
                subtitle: 'Scorched Kolas 2',
                image: '/assets/cashew-pieces.jpg',
                desc: 'Grade 2 scorched pieces offering cost-efficient bulk nut solids for institutional food processing.',
                category: 'pieces',
                countPerLb: 'Broken Kolas Gr.2',
            },
            {
                label: 'BB1 CLEANED',
                subtitle: 'Baby Bits 1 (Cleaned)',
                image: '/assets/cashew-pieces.jpg',
                desc: 'Finely granulated, fully cleaned baby cashew bits. Ideal for smooth nut butter, kaju katli paste, and sauces.',
                category: 'pieces',
                countPerLb: 'Micro Baby Bits',
            },
        ],
        facts: [
            'White Wholes: W180 (King), W210 (Jumbo), W240, CW240, W320, CW320, W450, CW450',
            'Scorched & Dessert: SW240, SW320, SW450, DW (Dessert), SSW (Slightly Scorched)',
            'Halves, Splits & Butts: FB (Fancy Butts), JH (Jumbo Halves), FS, FS-S, SB, SS',
            'Pieces & Cleaned Bits: LWP, K, LWP-S, SWP, SWP-S, SWP-S Small, SK1, SK2, BB1 CLEANED',
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
        description: 'Grown in the fertile foothills of the Himalayas nurtured by mineral-rich glacier waters. Celebrated globally for exceptional grain elongation, non-sticky fluffiness, and distinct vintage aroma.',
        type: 'rice-grid',
        riceVarieties: [
            {
                label: '1126 Basmati',
                subtitle: 'Flagship Extra-Long Grain',
                image: '/assets/1126.png',
                badge: 'Extra-Long Grain (8.35mm+)',
                desc: 'World-renowned extra-long slender basmati (8.35mm+ raw length). Elongates dramatically up to 20–22mm upon cooking with pristine pearly finish, non-sticky separation, and captivating vintage fragrance. The gold standard for luxury biryanis and gourmet dining.',
                specs: 'Raw Length: 8.35mm+ | Cooked: ~20–22mm | Elongation: Up to 2.5x',
            },
            {
                label: '1509 Basmati',
                subtitle: 'Long Slender Fragrant Grain',
                image: '/assets/1509.png',
                badge: 'Long Slender Grain',
                desc: 'Elite early-maturing cultivar prized for its elegant long slender grains, tender cooked texture, and delicate floral aroma. Known for fast cooking time and exceptional head-rice recovery in commercial culinary operations.',
                specs: 'Raw Length: 8.40mm | Cooked: ~18–19mm | Delicate Floral Aroma',
            },
            {
                label: '1885 Basmati',
                subtitle: 'Next-Gen Elite Cultivar',
                image: '/assets/1885.png',
                badge: 'Modern Elite Cultivar',
                desc: 'Advanced hybrid cultivar engineered for superior grain strength and disease resistance while retaining traditional basmati taste. Delivers pristine kernel uniformity, excellent elongation, and rich aroma for export retail packaging.',
                specs: 'Raw Length: 8.30mm+ | Cooked: ~19–20mm | High Purity Grade',
            },
        ],
        facts: [
            'Raw / White Basmati',
            'Steam Basmati',
            'Creamy Sella (Parboiled)',
            'Golden Sella Basmati',
            'Broken Grades (Tibar / Dubar)',
        ],
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
            { label: 'BROWN EGGS', subtitle: 'Free-Range Farm Fresh', image: '/assets/brown-eggs.png' },
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

    const [cashewFilter, setCashewFilter] = useState<'all' | 'wholes' | 'scorched' | 'splits' | 'pieces'>('all');

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

                {/* 2. TURMERIC - Variety Grades & Processing Forms */}
                {activeProduct.type === 'turmeric-row' && (
                    <div className="space-y-12 mb-14">
                        {/* Quality & Cultivation Grades (Commercial, IPM, Organic) */}
                        {activeProduct.photoCards && (
                            <div>
                                <div className="text-center mb-8">
                                    <span className="text-xs font-bold text-[#8a6f3f] uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-[#C2A470]/30 shadow-xs inline-block mb-2">
                                        Cultivation &amp; Sourcing Grades
                                    </span>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-[#132644] font-serif">
                                        Quality &amp; Compliance Varieties
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                                    {activeProduct.photoCards.map((v) => (
                                        <div
                                            key={v.label}
                                            className="bg-[#FBF6EC] border-2 border-dashed border-[#C2A470] rounded-[2.5rem] p-6 sm:p-7 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                                        >
                                            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg mb-5 bg-white flex-shrink-0 relative group-hover:scale-105 transition-transform duration-500">
                                                <img src={v.image} alt={v.label} className="w-full h-full object-cover" />
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-[#132644] tracking-wider uppercase font-serif">
                                                {v.label}
                                            </h3>
                                            {v.subtitle && (
                                                <p className="text-[#8a6f3f] text-xs sm:text-sm mt-1.5 font-semibold">
                                                    {v.subtitle}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Physical Processing Forms (Powder, Finger, Bulb) */}
                        {activeProduct.formCards && (
                            <div>
                                <div className="text-center mb-8">
                                    <span className="text-xs font-bold text-[#8a6f3f] uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-[#C2A470]/30 shadow-xs inline-block mb-2">
                                        Available Product Forms
                                    </span>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-[#132644] font-serif">
                                        Processing Forms &amp; Cuts
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                                    {activeProduct.formCards.map((v) => (
                                        <div
                                            key={v.label}
                                            className="bg-[#FBF6EC] border-2 border-[#C2A470] rounded-[2.5rem] p-6 sm:p-7 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all"
                                        >
                                            <div className="w-full aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden mb-5 bg-transparent flex items-center justify-center">
                                                <img src={v.image} alt={v.label} className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300" />
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-[#132644] tracking-widest uppercase font-serif">
                                                {v.label}
                                            </h3>
                                            {v.subtitle && (
                                                <p className="text-slate-600 text-xs sm:text-sm mt-1.5 font-medium">
                                                    {v.subtitle}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

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

                {/* 4. CASHEWS - 28 Grades Portfolio with Category Filter & Export Matrix */}
                {activeProduct.type === 'cashew-grid' && activeProduct.cashewVarieties && (
                    <div className="mb-14 space-y-10">
                        {/* Category Filter Pills */}
                        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
                            {[
                                { id: 'all', label: 'All 28 Grades', count: activeProduct.cashewVarieties.length },
                                { id: 'wholes', label: 'White Wholes (WW/CW)', count: activeProduct.cashewVarieties.filter((v) => v.category === 'wholes').length },
                                { id: 'scorched', label: 'Scorched & Dessert (SW/DW)', count: activeProduct.cashewVarieties.filter((v) => v.category === 'scorched').length },
                                { id: 'splits', label: 'Splits & Butts (JH/FS/FB)', count: activeProduct.cashewVarieties.filter((v) => v.category === 'splits').length },
                                { id: 'pieces', label: 'Pieces & Baby Bits (LWP/SWP/BB1)', count: activeProduct.cashewVarieties.filter((v) => v.category === 'pieces').length },
                            ].map((tab) => {
                                const isActive = cashewFilter === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setCashewFilter(tab.id as any)}
                                        className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                                            isActive
                                                ? 'bg-[#132644] text-white shadow-md'
                                                : 'bg-white text-[#132644] hover:bg-[#FBF6EC] border border-[#C2A470]/40'
                                        }`}
                                    >
                                        <span>{tab.label}</span>
                                        <span
                                            className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                                                isActive ? 'bg-[#C2A470] text-[#132644]' : 'bg-[#FBF6EC] text-[#8a6f3f]'
                                            }`}
                                        >
                                            {tab.count}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Cashew Grade Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                            {activeProduct.cashewVarieties
                                .filter((v) => cashewFilter === 'all' || v.category === cashewFilter)
                                .map((v) => (
                                    <div
                                        key={v.label}
                                        className="group bg-[#FBF6EC] border-2 border-dashed border-[#C2A470] rounded-[2.5rem] p-6 sm:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                                    >
                                        {/* Grade Badge */}
                                        <div className="mb-4">
                                            <span className="text-[10px] font-bold text-[#8a6f3f] uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-[#C2A470]/40 shadow-2xs">
                                                {v.category === 'wholes' && 'White Whole Grade'}
                                                {v.category === 'scorched' && 'Scorched / Dessert'}
                                                {v.category === 'splits' && 'Splits & Halves'}
                                                {v.category === 'pieces' && 'Culinary Pieces & Bits'}
                                            </span>
                                        </div>

                                        {/* Circle Image with bowl of cashews */}
                                        <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg mb-5 bg-white flex-shrink-0 relative">
                                            <img
                                                src={v.image}
                                                alt={v.label}
                                                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                                                    v.imageClass ? v.imageClass : ''
                                                }`}
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl sm:text-3xl font-bold text-[#132644] font-serif uppercase tracking-wide mb-1">
                                            {v.label}
                                        </h3>

                                        {/* Subtitle */}
                                        <p className="text-[#8a6f3f] text-base sm:text-lg font-semibold font-serif mb-2">
                                            {v.subtitle}
                                        </p>

                                        {/* Description */}
                                        {v.desc && (
                                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 flex-grow max-w-xs">
                                                {v.desc}
                                            </p>
                                        )}

                                        {/* Count / Specification tag */}
                                        {v.countPerLb && (
                                            <div className="mt-auto mb-4">
                                                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#132644] bg-white border border-[#C2A470]/50 px-3 py-1 rounded-full shadow-2xs">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#8a6f3f]"></span>
                                                    Specification: {v.countPerLb}
                                                </span>
                                            </div>
                                        )}

                                        {/* Action Button */}
                                        <button
                                            onClick={() => onEnquire(`Cashew Grade ${v.label} (${v.subtitle})`)}
                                            className="w-full py-2.5 px-4 bg-[#132644] text-white hover:bg-[#C2A470] hover:text-[#132644] rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm group/btn"
                                        >
                                            <span>Request Quote for {v.label}</span>
                                            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                ))}
                        </div>

                        {/* Export Standards Specifications Table */}
                        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#132644]/10 shadow-sm max-w-6xl mx-auto">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#132644] font-serif">
                                        Cashew Export Grade Classification Reference
                                    </h3>
                                    <p className="text-slate-600 text-xs sm:text-sm mt-1">
                                        Standard international export classifications for raw processed cashew kernels.
                                    </p>
                                </div>
                                <span className="text-xs font-bold text-[#8a6f3f] bg-[#FBF6EC] border border-[#C2A470]/40 px-3.5 py-1.5 rounded-full self-start sm:self-auto">
                                    28 Standard Grades
                                </span>
                            </div>

                            <div className="rounded-2xl border border-[#132644]/15 overflow-x-auto">
                                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                    <thead>
                                        <tr className="bg-[#132644] text-white font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                                            <th className="p-3.5 sm:p-4">Grade Code</th>
                                            <th className="p-3.5 sm:p-4">Category</th>
                                            <th className="p-3.5 sm:p-4">Kernel Type / Count</th>
                                            <th className="p-3.5 sm:p-4">Typical Export Applications</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 text-slate-700">
                                        <tr className="bg-[#FBF6EC]/50 font-semibold text-[#8a6f3f]">
                                            <td colSpan={4} className="p-3 uppercase tracking-wider text-[11px]">
                                                1. White Wholes (WW / CW) - Premium &amp; Standard Whole Kernels
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-[#FBF6EC]/30 transition-colors">
                                            <td className="p-3.5 font-bold text-[#132644]">W180</td>
                                            <td className="p-3.5">White Whole</td>
                                            <td className="p-3.5">160–180 / lb (Super Jumbo)</td>
                                            <td className="p-3.5">Luxury gifting, premium retail packs, gourmet dining</td>
                                        </tr>
                                        <tr className="hover:bg-[#FBF6EC]/30 transition-colors">
                                            <td className="p-3.5 font-bold text-[#132644]">W210</td>
                                            <td className="p-3.5">White Whole</td>
                                            <td className="p-3.5">200–210 / lb (Jumbo)</td>
                                            <td className="p-3.5">High-end retail packaging, export gift tins</td>
                                        </tr>
                                        <tr className="hover:bg-[#FBF6EC]/30 transition-colors">
                                            <td className="p-3.5 font-bold text-[#132644]">W240 / CW240</td>
                                            <td className="p-3.5">White / Commercial Whole</td>
                                            <td className="p-3.5">220–240 / lb (Large)</td>
                                            <td className="p-3.5">Supermarket snack packaging, premium roasting</td>
                                        </tr>
                                        <tr className="hover:bg-[#FBF6EC]/30 transition-colors">
                                            <td className="p-3.5 font-bold text-[#132644]">W320 / CW320</td>
                                            <td className="p-3.5">White / Commercial Whole</td>
                                            <td className="p-3.5">300–320 / lb (Standard)</td>
                                            <td className="p-3.5">Global benchmark export grade, consumer packaging, roasting</td>
                                        </tr>
                                        <tr className="hover:bg-[#FBF6EC]/30 transition-colors">
                                            <td className="p-3.5 font-bold text-[#132644]">W450 / CW450</td>
                                            <td className="p-3.5">White / Commercial Whole</td>
                                            <td className="p-3.5">400–450 / lb (Small Whole)</td>
                                            <td className="p-3.5">Snack mixes, chocolate panning, confectionery bars</td>
                                        </tr>

                                        <tr className="bg-[#FBF6EC]/50 font-semibold text-[#8a6f3f]">
                                            <td colSpan={4} className="p-3 uppercase tracking-wider text-[11px]">
                                                2. Scorched Wholes &amp; Dessert Grades (SW / DW / SSW)
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-[#FBF6EC]/30 transition-colors">
                                            <td className="p-3.5 font-bold text-[#132644]">SW240 / SW320 / SW450</td>
                                            <td className="p-3.5">Scorched Whole</td>
                                            <td className="p-3.5">240, 320, 450 count / lb</td>
                                            <td className="p-3.5">Flavored snack cashews, spiced roasting, trail mixes</td>
                                        </tr>
                                        <tr className="hover:bg-[#FBF6EC]/30 transition-colors">
                                            <td className="p-3.5 font-bold text-[#132644]">DW / SSW</td>
                                            <td className="p-3.5">Dessert &amp; Slightly Scorched</td>
                                            <td className="p-3.5">Assorted Whole Kernels</td>
                                            <td className="p-3.5">Gourmet bakery fillings, roasted nut blends, confectionery</td>
                                        </tr>

                                        <tr className="bg-[#FBF6EC]/50 font-semibold text-[#8a6f3f]">
                                            <td colSpan={4} className="p-3 uppercase tracking-wider text-[11px]">
                                                3. Halves, Splits &amp; Butts (JH / FS / FB / SB / SS)
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-[#FBF6EC]/30 transition-colors">
                                            <td className="p-3.5 font-bold text-[#132644]">JH / FS / FS-S</td>
                                            <td className="p-3.5">Lengthwise Splits</td>
                                            <td className="p-3.5">Clean Split Halves</td>
                                            <td className="p-3.5">Garnishing, food service, confectionery, biryanis &amp; curries</td>
                                        </tr>
                                        <tr className="hover:bg-[#FBF6EC]/30 transition-colors">
                                            <td className="p-3.5 font-bold text-[#132644]">FB / SB / SS</td>
                                            <td className="p-3.5">Fancy &amp; Scorched Butts</td>
                                            <td className="p-3.5">Transverse Broken Halves</td>
                                            <td className="p-3.5">Commercial food manufacturing, institutional cooking, snacks</td>
                                        </tr>

                                        <tr className="bg-[#FBF6EC]/50 font-semibold text-[#8a6f3f]">
                                            <td colSpan={4} className="p-3 uppercase tracking-wider text-[11px]">
                                                4. Pieces, Kolas &amp; Cleaned Baby Bits (LWP / SWP / BB1)
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-[#FBF6EC]/30 transition-colors">
                                            <td className="p-3.5 font-bold text-[#132644]">LWP / LWP-S / K</td>
                                            <td className="p-3.5">Large White Pieces</td>
                                            <td className="p-3.5">4–6 Cut Pieces</td>
                                            <td className="p-3.5">Bakeries, ice creams, traditional luxury sweets, cereal bars</td>
                                        </tr>
                                        <tr className="hover:bg-[#FBF6EC]/30 transition-colors">
                                            <td className="p-3.5 font-bold text-[#132644]">SWP / SWP-S / SWP-S Small</td>
                                            <td className="p-3.5">Small White Pieces</td>
                                            <td className="p-3.5">Fine Cut Pieces</td>
                                            <td className="p-3.5">Ice cream toppings, biscuits, granola, cookies &amp; cakes</td>
                                        </tr>
                                        <tr className="hover:bg-[#FBF6EC]/30 transition-colors">
                                            <td className="p-3.5 font-bold text-[#132644]">SK1 / SK2 / BB1 CLEANED</td>
                                            <td className="p-3.5">Cleaned Baby Bits &amp; Kolas</td>
                                            <td className="p-3.5">Micro Cleaned Granules</td>
                                            <td className="p-3.5">Cashew butter, Kaju Katli paste, sauces, dairy formulations</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Available Commercial Grade Badges */}
                        {activeProduct.facts && (
                            <div className="bg-white rounded-2xl p-6 border border-[#132644]/10 max-w-6xl mx-auto shadow-2xs">
                                <span className="text-xs font-bold text-[#8a6f3f] uppercase tracking-wider block mb-3 font-serif">
                                    Full Commercial Export Spectrum:
                                </span>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                    {activeProduct.facts.map((fact) => (
                                        <div
                                            key={fact}
                                            className="text-xs text-slate-700 bg-[#FBF6EC] border border-[#C2A470]/40 p-3 rounded-xl font-medium"
                                        >
                                            {fact}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* 5. BLACK PEPPER - Table & Varieties */}
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

                {/* 6. BASMATI RICE - 3-Card Rice Grid (1126, 1509, 1885) */}
                {activeProduct.type === 'rice-grid' && activeProduct.riceVarieties && (
                    <div className="space-y-10 mb-14">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                            {activeProduct.riceVarieties.map((v) => (
                                <div
                                    key={v.label}
                                    className="bg-[#FBF6EC] border-2 border-dashed border-[#C2A470] rounded-[2.5rem] p-7 sm:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group hover:-translate-y-1"
                                >
                                    {/* Badge at top */}
                                    {v.badge && (
                                        <div className="mb-4">
                                            <span className="text-[11px] font-bold uppercase tracking-wider bg-[#132644] text-[#C2A470] px-3.5 py-1 rounded-full shadow-2xs border border-[#C2A470]/30">
                                                {v.badge}
                                            </span>
                                        </div>
                                    )}

                                    {/* Circular Rice Bowl Image */}
                                    <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 bg-white flex-shrink-0 relative group-hover:scale-105 transition-transform duration-500">
                                        <img
                                            src={v.image}
                                            alt={v.label}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl sm:text-3xl font-bold text-[#132644] font-serif uppercase tracking-wide mb-1">
                                        {v.label}
                                    </h3>

                                    {/* Subtitle */}
                                    {v.subtitle && (
                                        <p className="text-[#8a6f3f] text-sm font-semibold mb-3">
                                            {v.subtitle}
                                        </p>
                                    )}

                                    {/* Description */}
                                    <p className="text-slate-700 text-sm leading-relaxed mb-6 flex-1">
                                        {v.desc}
                                    </p>

                                    {/* Technical Specs Footer */}
                                    {v.specs && (
                                        <div className="pt-4 border-t border-[#C2A470]/40 w-full">
                                            <p className="text-[#8a6f3f] font-serif text-xs sm:text-sm font-semibold italic">
                                                {v.specs}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Processing Forms & Grades */}
                        {activeProduct.facts && (
                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#132644]/10 shadow-xs">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-100">
                                    <div>
                                        <h4 className="text-base font-bold text-[#132644] uppercase tracking-wider font-serif flex items-center gap-2">
                                            <Sparkles className="w-4 h-4 text-[#8a6f3f]" />
                                            Available Processing Forms &amp; Milling Cuts
                                        </h4>
                                        <p className="text-xs text-slate-500 mt-0.5">
                                            Tailored milling and moisture control according to destination country specifications
                                        </p>
                                    </div>
                                    <span className="text-[11px] font-bold text-[#8a6f3f] bg-[#FBF6EC] border border-[#C2A470]/40 px-3 py-1 rounded-full w-fit">
                                        100% Sortex Cleaned
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                                    {activeProduct.facts.map((fact) => (
                                        <div
                                            key={fact}
                                            className="flex items-center justify-center text-center text-xs sm:text-sm font-bold text-[#132644] bg-[#FBF6EC] border border-[#C2A470]/50 p-3 rounded-2xl hover:bg-[#132644] hover:text-[#C2A470] hover:border-[#132644] transition-all"
                                        >
                                            {fact}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quality Benchmark Parameters */}
                        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#132644]/10 shadow-xs">
                            <h4 className="text-base font-bold text-[#132644] uppercase tracking-wider font-serif mb-4 flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-[#8a6f3f]" />
                                Basmati Export Quality Benchmark
                            </h4>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-[#FBF6EC] p-4 rounded-2xl border border-[#C2A470]/30">
                                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Avg. Raw Grain Length</div>
                                    <div className="text-lg sm:text-xl font-bold text-[#132644] font-serif mt-1">8.30 – 8.45 mm</div>
                                    <div className="text-xs text-[#8a6f3f] font-medium mt-0.5">Extra-long slender grade</div>
                                </div>
                                <div className="bg-[#FBF6EC] p-4 rounded-2xl border border-[#C2A470]/30">
                                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Elongation Ratio</div>
                                    <div className="text-lg sm:text-xl font-bold text-[#132644] font-serif mt-1">2.0x – 2.5x</div>
                                    <div className="text-xs text-[#8a6f3f] font-medium mt-0.5">Non-sticky fluffy expansion</div>
                                </div>
                                <div className="bg-[#FBF6EC] p-4 rounded-2xl border border-[#C2A470]/30">
                                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Moisture Content</div>
                                    <div className="text-lg sm:text-xl font-bold text-[#132644] font-serif mt-1">&lt; 12.0% Max</div>
                                    <div className="text-xs text-[#8a6f3f] font-medium mt-0.5">Long sea transit stability</div>
                                </div>
                                <div className="bg-[#FBF6EC] p-4 rounded-2xl border border-[#C2A470]/30">
                                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Purity Standard</div>
                                    <div className="text-lg sm:text-xl font-bold text-[#132644] font-serif mt-1">95% Pure Basmati</div>
                                    <div className="text-xs text-[#8a6f3f] font-medium mt-0.5">DNA certified &amp; sortexed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Generic Cards List (Fallback) */}
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

                {/* 7. EGGS PHOTO GRID */}
                {activeProduct.type === 'photo-grid' && activeProduct.photoCards && (
                    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-14 max-w-4xl mx-auto">
                        {activeProduct.photoCards.map((v) => (
                            <div
                                key={v.label}
                                className="group bg-[#FBF6EC] border-2 border-dashed border-[#C2A470] rounded-[2.5rem] p-7 sm:p-9 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden hover:-translate-y-1"
                            >
                                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 bg-white flex-shrink-0 relative group-hover:scale-105 transition-transform duration-500">
                                    <img src={v.image} alt={v.label} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-[#132644] font-serif uppercase tracking-wide mb-1.5">
                                    {v.label}
                                </h3>
                                {v.subtitle && (
                                    <p className="text-[#8a6f3f] text-sm sm:text-base font-semibold">
                                        {v.subtitle}
                                    </p>
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
