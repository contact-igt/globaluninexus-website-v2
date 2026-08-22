'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ProductsProps {
    handleExploreProducts: () => void;
}

const Products: React.FC<ProductsProps> = ({ handleExploreProducts }) => {
    const products = [
        {
            name: 'Red Chillies',
            image: '/assets/guntur-red-chilli.webp',
            desc: 'Teja, Sannam, Byadgi and 341 varieties from Guntur, Andhra Pradesh.'
        },
        {
            name: 'Turmeric',
            image: '/assets/erode-turmeric-powder.jpeg',
            desc: 'Powder, finger and bulb forms from Erode, Tamil Nadu.'
        },
        {
            name: 'Cardamom',
            image: '/assets/theni-cardamom.png',
            desc: 'Large, small, powder and husk forms from Theni and Idukki.'
        },
        {
            name: 'Ayakudi Guava',
            image: '/assets/guava.jpg',
            desc: 'From the famous Palani district of Tamil Nadu.'
        }
    ];

    return (
        <section id="products" className="py-20 md:py-28 bg-[#FBF6EC]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-[#8a6f3f] font-bold tracking-wider uppercase text-sm mb-3">Our Products</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#132644] mb-4 font-serif">Export-Ready Sourcing</h3>
                        <p className="text-slate-600 text-lg">
                            A preview of the spices, rice and produce UniNexus sources from recognised growing regions across India, curated for export, wholesale and bulk supply.
                        </p>
                    </div>
                    <button
                        onClick={handleExploreProducts}
                        className="text-[#132644] font-bold hover:text-[#267C92] flex items-center gap-2 group whitespace-nowrap bg-white border border-[#C2A470] px-6 py-3 rounded-full hover:bg-[#FBF6EC] transition-colors shadow-sm"
                    >
                        View Full Catalogue <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                    {products.map((product, idx) => (
                        <button key={idx} className="group cursor-pointer text-left" onClick={handleExploreProducts}>
                            <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#132644]/90 via-[#132644]/10 to-transparent"></div>

                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <h4 className="text-white text-xl font-bold mb-1 font-serif">{product.name}</h4>
                                    <p className="text-[#C2A470] text-sm font-medium">{product.desc}</p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
