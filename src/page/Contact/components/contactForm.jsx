import React, { useState } from "react";
import Swal from "sweetalert2";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.target);

        formData.append("access_key", "894fdf5e-2693-4ea5-8919-caf71407069f");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            }).then((res) => res.json());

            if (res.success) {
                Swal.fire({
                    title: "Success!",
                    text: "Message Sent Successfully!",
                    icon: "success",
                    confirmButtonColor: "#0ea5e9",
                });
                setName("");
                setEmail("");
                setMessage("");
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong. Please try again.",
                    icon: "error",
                    confirmButtonColor: "#ef4444",
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong. Please try again.",
                icon: "error",
                confirmButtonColor: "#ef4444",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-gradient-to-br from-white to-blue-50/30 p-8 lg:p-12 space-y-8">
            <div className="space-y-8">
                {/* Header */}
                <div className="text-center lg:text-left">
                    <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                        Send us a Message
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={onSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div className="group">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 shadow-lg hover:shadow-xl placeholder-gray-400"
                                placeholder="Enter your full name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="group">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 hover:border-green-300 shadow-lg hover:shadow-xl placeholder-gray-400"
                                placeholder="Enter your email address"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="group">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                            Message
                        </label>
                        <div className="relative">
                            <textarea
                                name="message"
                                id="message"
                                rows="6"
                                className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 hover:border-purple-300 shadow-lg hover:shadow-xl placeholder-gray-400 resize-none"
                                placeholder="Tell us about your inquiry, questions, or how we can help you..."
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="relative">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group relative w-full overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-600 to-blue-500 rounded-2xl font-bold text-lg text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 transform-gpu disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {/* Button background animation */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-500 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Button content */}
                            <div className="relative z-10 flex items-center justify-center space-x-2">
                                <span className="group-hover:scale-110 transition-transform duration-300">
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </span>
                                {!isSubmitting && (
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                )}
                                {isSubmitting && (
                                    <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                )}
                            </div>
                            
                            {/* Button shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                        </button>

                        {/* Button decorative elements */}
                        <div className="absolute -bottom-2 left-1/4 w-4 h-4 bg-blue-400/30 rounded-full animate-ping"></div>
                        <div className="absolute -top-2 right-1/4 w-3 h-3 bg-cyan-400/50 rounded-full animate-bounce"></div>
                    </div>

                    {/* Additional Info */}
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-800 mb-1">Quick Response</h4>
                                <p className="text-sm text-gray-600">
                                    We typically respond to messages within 24 hours during business days.
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;