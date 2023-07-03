import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const [result, setResult] = useState("");

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append(
            "access_key",
            `${import.meta.env.VITE_MESSAGE_SENDER_SECRET_API_KEY}`
        );

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());

        if (res.success) {
            form.reset();
            toast.success("Message has been sent successfully.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            // console.log("Success", res);
            setResult(res.message);
        } else {
            toast.error("Message has been not send.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            // console.log("Error", res);
            setResult(res.message);
            form.reset();
        }
    };

    return (
        <div className="contact my-[130px]">
            <section className="flex items-center gap-4 gap-x-8 flex-col md:flex-row px-10 space-y-20 md:space-y-0">
                <div className="w-full md:w-1/2">
                    <h3 className="text-indigo-500 text-4xl md:text-5xl font-bold">
                        Let us Get Connected
                    </h3>
                    <h1 className="text-xl font-semibold text-white my-4">
                        Leave your message here
                    </h1>
                    <form className="space-y-3" onSubmit={handleFormSubmit}>
                        <div className="form-control">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Your Name"
                                className="input input-bordered w-full p-4 rounded-lg outline-none"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Email Address"
                                className="input input-bordered w-full p-4 rounded-lg outline-none"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <textarea
                                className="textarea textarea-bordered h-24 w-full p-4 rounded-lg outline-none"
                                name="message"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <button className="bg-indigo-500 w-full p-2 rounded-lg text-white">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="w-full md:w-1/2 flex items-center flex-col text-white space-y-3">
                    <div className="flex gap-4 items-center">
                        <div className="p-5 bg-indigo-500  rounded-full">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 384 512"
                                height="2rem"
                                width="2rem"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                            </svg>
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-medium">Address</h4>
                            <p className="font-light">
                                Kayestorail, Sylhet, Bangledesh
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="p-5 bg-indigo-500  rounded-full">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 512 512"
                                height="2rem"
                                width="2rem"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                            </svg>
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-medium">Email</h4>
                            <p className="font-light">mahfuzzayn8@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="p-5 bg-indigo-500  rounded-full">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 512 512"
                                height="2rem"
                                width="2rem"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                            </svg>
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-medium">Phone</h4>
                            <p className="font-light">+880 158046 4009</p>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
};

export default Contact;
