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
                });
                setName("");
                setEmail("");
                setMessage("");
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong. Please try again.",
                    icon: "error",
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong. Please try again.",
                icon: "error",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
                <h2 className="text-4xl font-bold text-black">Contact Form</h2>
                <form
                    onSubmit={onSubmit}
                    className="flex flex-col self-stretch mt-10 w-full max-md:mt-10 max-md:max-w-full"
                >
                    <div className="flex w-full rounded-xl border border-black border-solid min-h-[59px] max-md:max-w-full">
                        <label htmlFor="name" className="sr-only">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="w-full rounded-xl border-none"
                            aria-label="Name"
                            placeholder="Full Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="flex mt-9 w-full rounded-xl border border-black border-solid min-h-[59px] max-md:max-w-full">
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="w-full rounded-xl border-none"
                            aria-label="Email"
                            placeholder="E-Mail"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex mt-9 w-full rounded-xl border border-black border-solid min-h-[180px] max-md:max-w-full">
                        <label htmlFor="message" className="sr-only">
                            Message
                        </label>
                        <textarea
                            name="message"
                            className="w-full rounded-xl border-none resize-none"
                            aria-label="Message"
                            placeholder="Message"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="overflow-hidden gap-2.5 self-stretch px-3 py-4 mt-7 text-xl font-medium text-white bg-sky-500 rounded-md min-h-[55px] hover:bg-[#046BAC]"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;