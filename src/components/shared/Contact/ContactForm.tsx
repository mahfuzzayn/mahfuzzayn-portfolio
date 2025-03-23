/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "sonner";

const ContactForm = () => {
    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        const toastId = toast.loading("Sending message...");

        formData.append(
            "access_key",
            `${process.env.NEXT_PUBLIC_MESSAGE_SENDER_SECRET_API_KEY}`
        );

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            }).then((res) => res.json());

            if (res?.success) {
                form.reset();
                toast.success("Message has been sent successfully.", {
                    id: toastId,
                });
            } else {
                toast.error("Message has been not send.", { id: toastId });
                form.reset();
            }
        } catch (error: any) {
            toast.error("Something went wrong.", { id: toastId });
            form.reset();
        }
    };

    return (
        <form className="space-y-3" onSubmit={handleFormSubmit}>
            <div className="form-control">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="bg-gray-300 w-full p-4 rounded-lg outline-none"
                    required
                />
            </div>
            <div className="form-control">
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Address"
                    className="bg-gray-300 w-full p-4 rounded-lg outline-none"
                    required
                />
            </div>
            <div className="form-control">
                <textarea
                    className="bg-gray-300 h-24 w-full p-4 rounded-lg outline-none"
                    name="message"
                    placeholder="Your Message"
                    required
                ></textarea>
            </div>
            <Button
                type="submit"
                className="bg-indigo-500 w-full !p-6 rounded-lg text-white hover:!bg-indigo-500 cursor-pointer"
            >
                Submit It
            </Button>
        </form>
    );
};

export default ContactForm;
