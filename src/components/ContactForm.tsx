"use client";

import React, { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("https://formspree.io/f/mqabrgvz", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: new FormData(e.target as HTMLFormElement),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 3000);
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
            <h1 className="md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-2xl md:text-3xl lg:text-[2.5rem] font-bold bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent">
                Let&rsquo;s work together
            </h1>
            <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
                I&rsquo;m available for freelance work, full-time opportunities, or collaborative projects. Let&rsquo;s connect and discuss how I can contribute to your team.
            </p>

            {status === "success" && (
                <p className="mt-4 text-green-400 font-medium">✅ Message sent successfully!</p>
            )}
            {status === "error" && (
                <p className="mt-4 text-red-400 font-medium">❌ Failed to send message. Please try again.</p>
            )}

            <form onSubmit={handleSubmit} className="mt-8 block w-full overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md outline-none w-full"
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md outline-none w-full"
                    />
                </div>

                <div className="mt-5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md outline-none w-full"
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md outline-none w-full"
                    />
                </div>

                <textarea
                    rows={7}
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md outline-none"
                />

                <input type="hidden" name="_captcha" value="false" />

                <div className="mt-4">
                    <button
                        type="submit"
                        className="px-8 py-3.5 bg-[#7947df] text-white cursor-pointer hover:bg-[#5c2fb7] transition-all duration-150 rounded-full"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}
