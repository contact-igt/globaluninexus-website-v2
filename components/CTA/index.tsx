'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';

interface CTAProps {
    presetProduct?: string;
}

const PRODUCT_OPTIONS = [
    'Red Chillies',
    'Turmeric',
    'Cardamom',
    'Black Pepper',
    'Seeraga Samba Rice',
    'Basmati Rice',
    'Kavuni Rice',
    'Cashews',
    'Almonds',
    'Puliyangudi Lemon',
    'Ayakudi Guava',
    'Eggs',
    'Other',
];

const TRUST_TAGS = ['Origin-Verified Sourcing', 'Structured Compliance', 'Export Co-ordination', 'Dependable Communication'];

const CTA: React.FC<CTAProps> = ({ presetProduct }) => {
    const router = useRouter();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [isloading, setisloading] = useState<boolean>(false);
    const [isError, setisError] = useState<boolean>(false);

    useEffect(() => {
        if (presetProduct && PRODUCT_OPTIONS.includes(presetProduct)) {
            setValue('product', presetProduct, { shouldValidate: true });
        }
    }, [presetProduct, setValue]);

    const onsubmit = async (data: any) => {
        if (isloading) return;
        setisError(false);

        try {
            setisloading(true);
            await fetch("https://script.google.com/macros/s/AKfycbzgjfkWwvROzTDz6aeA69SapWZAcXZ_I1AHlnVDdaWZ8wXCTnjrJgxO7I3lGpuX4ocvhg/exec", {
                method: "POST",
                body: JSON.stringify(data),
            });

            // Redirect to thank you page after successful submission
            router.push('/thank-you');
        }

        catch (err) {
            console.log('error message', err);
            setisError(true);
        }
        finally {
            setisloading(false);
        }
    };

    return (
        <section id="contact" className="py-20 md:py-28 bg-[#132644] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#5EBBC8]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#C2A470]/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#132644] mb-6 font-serif">
                            Partner with <span className="text-[#8a6f3f]">UniNexus</span> for Global Quality Agri-Exports
                        </h2>
                        <p className="text-slate-600 text-lg mb-8">
                            Purposeful sourcing, dependable partnerships. Reach out for authentic, quality-verified agricultural products directly from India&apos;s finest growing regions.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-8">
                            {TRUST_TAGS.map((tag) => (
                                <div key={tag} className="flex items-center gap-2 text-[#132644] font-medium bg-[#FBF6EC] border border-slate-200 px-4 py-2 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-[#C2A470]" /> {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <form className="space-y-4" onSubmit={handleSubmit(onsubmit)} noValidate>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="cta-name" className="sr-only">Your Name</label>
                                    <input
                                        id="cta-name"
                                        type="text"
                                        placeholder="Your Name"
                                        aria-invalid={!!errors.name}
                                        aria-describedby={errors.name ? 'cta-name-error' : undefined}
                                        className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-slate-200 focus:border-[#C2A470] focus:outline-none focus:ring-2 focus:ring-[#C2A470]/20 transition-all"
                                        {...register("name", {
                                            required: "Name required", pattern: {
                                                value: /^[A-Za-z\s]*$/,
                                                message: 'Only letters and spaces are allowed'
                                            }
                                        })}
                                    />
                                    {typeof errors.name?.message === "string" && (
                                        <p id="cta-name-error" role="alert" className='text-[red] text-xs mt-1 mx-2 font-medium'>{errors.name.message}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="cta-company" className="sr-only">Company Name</label>
                                    <input
                                        id="cta-company"
                                        type="text"
                                        placeholder="Company Name"
                                        aria-invalid={!!errors.company_name}
                                        aria-describedby={errors.company_name ? 'cta-company-error' : undefined}
                                        className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-slate-200 focus:border-[#C2A470] focus:outline-none focus:ring-2 focus:ring-[#C2A470]/20 transition-all"
                                        {...register("company_name", {
                                            required: "Company name required"
                                        })}
                                    />
                                    {typeof errors.company_name?.message === "string" && (
                                        <p id="cta-company-error" role="alert" className='text-[red] text-xs mt-1 mx-2 font-medium'>{errors.company_name?.message}</p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="cta-email" className="sr-only">Business Email</label>
                                <input
                                    id="cta-email"
                                    type="email"
                                    placeholder="Business Email"
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? 'cta-email-error' : undefined}
                                    className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-slate-200 focus:border-[#C2A470] focus:outline-none focus:ring-2 focus:ring-[#C2A470]/20 transition-all"
                                    {...register("email", {
                                        required: "Email required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                />
                                {typeof errors.email?.message === "string" && (
                                    <p id="cta-email-error" role="alert" className='text-[red] text-xs mt-1 mx-2 font-medium '>{errors.email?.message}</p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="cta-product" className="sr-only">Product of Interest</label>
                                <select
                                    id="cta-product"
                                    className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-slate-200 focus:border-[#C2A470] focus:outline-none focus:ring-2 focus:ring-[#C2A470]/20 transition-all text-slate-500"
                                    aria-invalid={!!errors.product}
                                    aria-describedby={errors.product ? 'cta-product-error' : undefined}
                                    {...register("product", {
                                        required: "Please select a product"
                                    })} defaultValue={""}>
                                    <option value={""} disabled>Select Product of Interest</option>
                                    {PRODUCT_OPTIONS.map((option) => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                                {typeof errors.product?.message === "string" && (
                                    <p id="cta-product-error" role="alert" className='text-[red] text-xs mt-1 mx-2 font-medium '>{errors.product?.message}</p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="cta-message" className="sr-only">Message / Requirement Details</label>
                                <textarea
                                    id="cta-message"
                                    placeholder="Message / Requirement Details"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-slate-200 focus:border-[#C2A470] focus:outline-none focus:ring-2 focus:ring-[#C2A470]/20 transition-all"
                                    {...register("message")}
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#C2A470] hover:bg-[#A9855A] text-[#132644] font-bold py-4 rounded-lg shadow-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                                    disabled={isloading}
                                    aria-busy={isloading}
                                >
                                    {isloading ? "Sending..." : "Send Request"}
                                </button>
                                {isError && (
                                    <p role="alert" className='text-[red] text-xs mt-2 font-medium text-center'>Something went wrong. Please try again later.</p>
                                )}
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
