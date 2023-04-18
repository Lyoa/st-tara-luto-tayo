import React from "react";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <p className="text-center text-black dark:text-white">
          Lyoa 2023
        </p>
        <div className="flex mt-4">
          <a
            href="https://www.facebook.com/lyoa.sool.ace/"
            rel="noreferrer"
            target="_blank"
            className="text-black dark:text-white mr-6 hover:text-gray-400 transition duration-300 ease-in-out"
          >
            <FaFacebookF className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/Lyoa"
            rel="noreferrer"
            target="_blank"
            className="text-black dark:text-white mr-6 hover:text-gray-400 transition duration-300 ease-in-out"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/sool.ace"
            rel="noreferrer"
            target="_blank"
            className="text-black dark:text-white hover:text-gray-400 transition duration-300 ease-in-out"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;