"use client";
import { Fragment } from "react";
import Image from "next/image";
import styles from './Portfolio.module.css'
export default function Page() {
  const backgroundImageStyle = {
    backgroundImage: 'linear-gradient(62deg, #EEF7FB 0 50%, #48AFDE 0% 100%)',
    minHeight: '500px', 
    maxHeight: '1200px',
    height: '100%',
    width: '100%',
  }
  return(
    <Fragment>
      <div className="flex flex-col items-center justify-center w-full pt-[80px] pb-[80px] mt-4">
        <div className='flex flex-col items-center justify-center w-full h-[400px]'>
          <div className="flex flex-col items-center justify-center  w-full h-full bg-[#223740]/70 backdrop-brightness-50">
            <div className="text-center bg-[#48AFDE] py-[5px] px-[10px] tracking-wide uppercase font-semibold text-[20px] text-white rounded-lg">
              <a href="#contact" className="cursor-pointer">
                Personal Projects
              </a>
            </div>
            <div className="mt-[10px]">
              <h1 className="recoletaBold text-5xl text-[#48AFDE] p-2 text-center tracking-wide">
                Portfolio
              </h1>
            </div>
            <div className="flex justify-center text-center mt-[10px] md:w-[830px]">
              <p className="text-white font-[300] text-cener text-xl">
                Take a look at some of my previous projects spanning across multiple technologies.<br/>
                I'm continuously updating this list so check back frequently to see what the new things I'm working on!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            overflow-hidden
            rounded-2xl
            border border-[#D5EAF2]
            bg-[#EAF7FC]
            shadow-lg
            flex
            flex-col
            lg:flex-row
            items-center
            gap-6
            lg:gap-10
            p-4
            sm:p-6
            lg:p-8
          "
        >
          {/* Project Image */}
          <a
            href="https://qwick-chat.com"
            target="_blank"
            rel="noreferrer"
            className="
              w-full
              lg:w-[55%]
              flex
              justify-center
              items-center
            "
          >
            <img
              src="/HomePage.png"
              alt="Qwick chat home page"
              className="
                w-full
                h-auto
                max-h-[500px]
                object-contain
                rounded-xl
                shadow-md
                transition-transform
                duration-300
                hover:scale-[1.02]
                cursor-pointer
              "
            />
          </a>

          {/* Project Information */}
          <div
            className="
              w-full
              lg:w-[45%]
              flex
              flex-col
              gap-4
              p-2
              sm:p-4
            "
          >
            {/* Project Title */}
            <a
              href="https://qwick-chat.com"
              target="_blank"
              rel="noreferrer"
              className="
                block
                rounded-lg
                bg-[#48AFDE]
                px-4
                py-3
                text-center
                text-white
                transition-colors
                duration-200
                hover:bg-[#329DCE]
              "
            >
              <h1 className="text-xl sm:text-2xl font-semibold tracking-wide uppercase">
                Qwick Chat
              </h1>
            </a>

            {/* GitHub Repository */}
            <a
              href="https://github.com/charles-afk/qwick-chat"
              target="_blank"
              rel="noreferrer"
              className={`${styles.repo} block break-all text-sm sm:text-base`}
            >
              https://github.com/charles-afk/qwick-chat
            </a>

            {/* Description */}
            <div className="text-sm sm:text-base leading-relaxed text-[#47626D]">
              <p>
                This full-stack real-time chat platform was built using
                React, Node.js/Express, and AWS. The application supports real-time
                messaging, live user presence, file uploads, dynamic theming, JWT
                authentication, and Google OAuth 2.0 login.
              </p>

              <p className="mt-4">
                This application uses a distributed AWS architecture: the React
                frontend is hosted on S3 and served through CloudFront, while the
                Express API runs on EC2 instances behind an Application Load Balancer
                with HTTPS. RDS MySQL provides persistent application data,
                ElastiCache Redis handles session management and fast-access state,
                and S3 provides scalable object storage for user-uploaded files!
              </p>

              <p className="mt-4">
                This project also showcases experience with full-stack architecture, cloud
                deployment, authentication, session management, real-time systems,
                relational databases, caching, object storage, load balancing, and
                secure HTTPS communication.
              </p>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
};