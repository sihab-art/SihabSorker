import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date();

  return (
    <>
      <footer
        className="w-full text-center p-6 bg-accent"
        style={{ backgroundColor: "#313131" }}
      >
        <div className="flex items-center justify-center mb-6">
          <a
            className="inline-block mx-2"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl text-blue-600" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://x.com/sihabsorker0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-blue-400" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://www.linkedin.com/in/sihab-sorker-5a22b0311/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-black" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://github.com/sihabsorker0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl text-pink-500" />
          </a>
        </div>
        <div className="hidden  md:flex items-center justify-center mb-6 flex-wrap">
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://www.instagram.com/sihabsorker0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fiverr
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            UpWork
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Freelancer
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://themeforest.net/user/sihab"
            target="_blank"
            rel="noopener noreferrer"
          >
            ThemeForest
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            RemoteHub
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://drive.usercontent.google.com/download?id=1TZ2SRznpWKQxn84flctBRmlHuC1bI43D&export=download&authuser=0&confirm=t&uuid=3997ba42-91ec-4bc6-b388-25ee634008fb&at=APcmpoxHE9XXw-2_i5RRhl1D5MFp:1745318208867"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
          <p>
            Developed by{" "}
            <a
              href="Sihab"
              className="text-primary hover:underline"
              target="blank"
            >
              Sihab
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
