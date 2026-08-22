'use client';

import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
    isScrolled: boolean;
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (open: boolean) => void;
    scrollToSection: (id: string) => void;
    handleExploreProducts: () => void;
    setCurrentView: (view: string) => void;
}

const NAV_ITEMS = [
    { label: 'About Us', id: 'about-us' },
    { label: 'Process', id: 'process' },
    { label: 'Compliance', id: 'compliance' },
    { label: 'Contact', id: 'contact' },
];

const Navbar: React.FC<NavbarProps> = ({
    isScrolled,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    scrollToSection,
    handleExploreProducts,
    setCurrentView,
}) => {
    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 bg-[#FBF6EC]/95 backdrop-blur-sm shadow-sm border-b border-[#C2A470]/20 ${isScrolled ? 'py-2' : 'py-3'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <button
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => setCurrentView('home')}
                    aria-label="UniNexus Traders — go to homepage"
                >
                    <img src="/assets/logo2.jpg" alt="UniNexus Traders Private Limited" className="w-16 md:w-20 object-contain rounded-md" />
                </button>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-base font-semibold text-[#132644] hover:text-[#267C92] transition-colors"
                        >
                            {item.label}
                        </button>
                    ))}
                    <button
                        onClick={handleExploreProducts}
                        className="text-base font-semibold text-[#132644] hover:text-[#267C92] transition-colors"
                    >
                        Products
                    </button>

                    <button
                        onClick={() => scrollToSection('contact')}
                        className="bg-[#C2A470] hover:bg-[#A9855A] text-[#132644] px-5 py-2.5 rounded-full text-base font-semibold transition-colors shadow-sm"
                    >
                        Request a Quote
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="text-[#132644]" />
                    ) : (
                        <Menu className="text-[#132644]" />
                    )}
                </button>
            </div>

            {/* Mobile Nav Dropdown */}
            {isMobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden absolute top-full left-0 w-full bg-[#FBF6EC] shadow-xl border-t border-[#C2A470]/30">
                    <div className="flex flex-col p-4 gap-1">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-left py-3 font-medium text-[#132644] border-b border-black/5"
                            >
                                {item.label}
                            </button>
                        ))}
                        <button onClick={handleExploreProducts} className="text-left py-3 font-medium text-[#132644] border-b border-black/5">Products</button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="bg-[#C2A470] text-[#132644] w-full py-3 rounded-lg font-semibold mt-4"
                        >
                            Request a Quote
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
