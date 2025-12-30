"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaTimes, FaChevronDown } from "react-icons/fa";
import { schoolInfo } from "../data/schoolInfo";
import { faqs } from "../data/content";
import { env } from "../utils/env";

export function WhatsAppChatbot() {
    // Check if chatbot is enabled via environment variable
    if (!env.ENABLE_CHATBOT) {
        return null;
    }

    const [isOpen, setIsOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: ""
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleChatOnWhatsApp = () => {
        const { name, phone, message } = formData;
        // Use env variable if available, otherwise fallback to schoolInfo
        const phoneNumber = (env.WHATSAPP_PHONE || schoolInfo.contact.phone)
            .replace(/\s+/g, "")
            .replace("+", "");
        const defaultMessage = env.WHATSAPP_MESSAGE_TEMPLATE || "I have a question about Benchmark School System.";
        const whatsappMessage = encodeURIComponent(
            `Hello! My name is ${name || "User"}. ${message || defaultMessage}\n\nPhone: ${phone || "Not provided"}`
        );
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
        window.open(whatsappUrl, "_blank");
    };

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    // Get first 5 FAQs for quick reference
    const quickFaqs = faqs.slice(0, 5);

    return (
        <>
            {/* WhatsApp Icon Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
                aria-label="Open WhatsApp Chat"
            >
                {isOpen ? (
                    <FaTimes className="text-2xl" />
                ) : (
                    <FaWhatsapp className="text-3xl" />
                )}
            </button>

            {/* Chatbot Panel */}
            {isOpen && (
                <div className="fixed bottom-24 left-6 z-50 w-80 rounded-lg bg-white shadow-2xl border border-gray-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-[#25D366] px-4 py-3 text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <FaWhatsapp className="text-2xl" />
                                <div>
                                    <h3 className="font-semibold">Benchmark School</h3>
                                    <p className="text-xs opacity-90">We're here to help</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:opacity-80"
                                aria-label="Close chat"
                            >
                                <FaTimes />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="max-h-96 overflow-y-auto p-4">
                        {/* Quick Info */}
                        <div className="mb-4 rounded-lg bg-gray-50 p-3 text-sm">
                            <p className="font-semibold mb-2">Quick Information:</p>
                            <p className="text-gray-700">📍 {schoolInfo.contact.address}</p>
                            <p className="text-gray-700">📞 {schoolInfo.contact.phone}</p>
                            <p className="text-gray-700">✉️ {schoolInfo.contact.email}</p>
                        </div>

                        {/* FAQs Section */}
                        <div className="mb-4">
                            <p className="font-semibold mb-2 text-sm">Frequently Asked Questions:</p>
                            <div className="space-y-2">
                                {quickFaqs.map((faq, index) => (
                                    <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                                        <button
                                            onClick={() => toggleFaq(index)}
                                            className="w-full px-3 py-2 text-left text-sm font-medium bg-gray-50 hover:bg-gray-100 flex items-center justify-between"
                                        >
                                            <span className="flex-1 pr-2">{faq.question}</span>
                                            <FaChevronDown
                                                className={`text-xs transition-transform ${
                                                    expandedFaq === index ? "rotate-180" : ""
                                                }`}
                                            />
                                        </button>
                                        {expandedFaq === index && (
                                            <div className="px-3 py-2 text-sm text-gray-700 bg-white">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="border-t border-gray-200 pt-4">
                            <p className="font-semibold mb-3 text-sm">Send us a message:</p>
                            <div className="space-y-3">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange("phone", e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                                />
                                <textarea
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={(e) => handleInputChange("message", e.target.value)}
                                    rows="3"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366] resize-none"
                                />
                                <button
                                    onClick={handleChatOnWhatsApp}
                                    disabled={!formData.name || !formData.phone}
                                    className="w-full bg-[#25D366] text-white py-2 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    <FaWhatsapp className="text-lg" />
                                    Chat on WhatsApp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

