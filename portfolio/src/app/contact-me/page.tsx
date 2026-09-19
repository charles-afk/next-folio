"use client";
import React, { useState, Fragment, ChangeEvent, FormEvent } from "react";
import { Hind } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const hind = Hind({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

type ContactDetails = {
    name: string;
    email: string;
    phoneNumber: string;
    subject: string;
    message: string
}

export default function Page() {
    const [state, setState] = useState<ContactDetails>({
        name: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const key = event?.target?.name;
        const value = event?.target?.value;
        setState({
            ...state,
            [key]: value,
        });
    };

    const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event?.target?.value;
        const numericValue = value.replace(/[^0-9]/g, "");
        setState({ ...state, phoneNumber: numericValue });
    };

    const clearState = () => {
        setState({
            name: "",
            email: "",
            phoneNumber: "",
            subject: "",
            message: "",
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
            let data = {
            ...state,
        };
        fetch("/api/contact", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(async (res) => {
            setLoading(false);
            const response = await res.json();
            if (!response.error) {
                clearState();
                toast(response.message);
            } else {
                clearState();
                toast("something went wrong");
            }
        })
        .catch((e) => {
            setLoading(false);
            clearState();
            toast("something went wrong");
        });
    };

    return (
        <Fragment>
            <ToastContainer />
            <div className="flex flex-col items-center justify-center w-full pt-[80px] pb-[80px] mt-4">
                <div className='flex flex-col items-center justify-center w-full h-[400px]'>
                    <div className="flex flex-col items-center justify-center  w-full h-full bg-[#223740]/70 backdrop-brightness-50">
                        <div className="text-center bg-[#48AFDE] py-[5px] px-[10px] tracking-wide uppercase font-semibold text-[20px] text-white rounded-lg">
                            <a href="#contact" className="cursor-pointer">
                                Contact Form
                            </a>
                        </div>
                        <div className="mt-[10px]">
                            <h1 className="recoletaBold text-5xl text-[#48AFDE] p-2 text-center tracking-wide">
                                Hire Me
                            </h1>
                        </div>
                        <div className="flex justify-center text-center mt-[10px] md:w-[830px] ">
                            <p className="text-white font-[300] text-cener text-xl">
                                Are you looking for a professinal full-stack developer to help build
                                your website or software? Leave me a message and let me know how I can help!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col xl:flex-row justify-center gap-[60px] mt-[10px] px-[30px] max-w-[1105px] m-auto p-10 mb-[-100px]" id="contact">
                <div className="flex flex-col gap-[20px]">
                    <div className="text-center w-[100px] bg-red-500 py-[1px] tracking-wide uppercase font-300 font-sans text-[14px] text-white rounded-lg">
                        Contact Me
                    </div>
                    <div className="">
                        <p className="text-[30px] text-[#48AFDE]">
                            {" "}
                            Request A Call Back! Feel Free To Reach Out & Contact Me.
                        </p>
                    </div>
                    <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
                        <div className={`flex flex-col sm:flex-row gap-[20px] ${hind.className}`} >
                            <input type="text" name="name" placeholder="Your Name.." required onChange={handleChange} 
                            value={state.name} className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200" />
                            <input type="email" name="email" placeholder="Your Email.." required onChange={handleChange}
                            value={state.email} className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200" />
                        </div>
                        <div className={`flex flex-col sm:flex-row gap-[20px] ${hind.className}`}>
                            <input type="text" name="phoneNumber" placeholder="Your Number.." required onChange={handlePhoneChange}
                            value={state.phoneNumber} className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200"/>
                            <input type="text" name="subject" placeholder="Your Subject.." required onChange={handleChange}
                            value={state.subject} className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200"/>
                        </div>
                        <div className={`${hind.className}`}>
                            <textarea required name="message" placeholder="Your Message.." onChange={handleChange} value={state.message}
                            className="px-[12px] outline-none h-[180px] w-full rounded-md py-[12px] flex-1 bg-gray-200" />
                        </div>
                        <div>
                            {loading && ( <div className="mb-3 text-center ml-5 w-6 h-6 border-t-2 border-blue-600 border-solid animate-spin rounded-full"></div> )}
                            <button className="bg-[#48AFDE] w-full sm:w-auto px-[30px] py-[12px] hover:bg-[#223740] transition-colors duration-300 font-semibold rounded-lg text-white">
                                Send Me A Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}
