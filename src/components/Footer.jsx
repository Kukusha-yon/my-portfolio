import React from "react";
// import {FaFacebook ,FaInstagram, FaTelegram ,FaTiktok } from "react-icons/ti"

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center  text-center text-white dark:bg-neutral-700">
      <div className="container pt-9">
        <div className="mb-9 flex justify-center">
          <a
            href="https://github.com/Kukusha-yon"
            className="mr-9 text-neutral-200 dark:text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.683-.217.683-.482 0-.237-.009-.866-.014-1.699-2.782.604-3.37-1.291-3.37-1.291-.454-1.151-1.109-1.457-1.109-1.457-.908-.621.068-.608.068-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.527 2.343 1.086 2.912.831.092-.645.35-1.085.636-1.334-2.228-.257-4.567-1.114-4.567-4.953 0-1.096.39-1.994 1.032-2.698-.104-.257-.448-1.278.099-2.661 0 0 .844-.271 2.76 1.03a9.582 9.582 0 012.498-.336c.85.005 1.706.114 2.498.336 1.916-1.301 2.758-1.03 2.758-1.03.549 1.383.206 2.404.101 2.661.644.704 1.03 1.602 1.03 2.698 0 3.849-2.342 4.692-4.576 4.945.359.308.679.92.679 1.854 0 1.339-.013 2.416-.013 2.744 0 .267.18.579.688.481C19.139 20.163 22 16.417 22 12c0-5.523-4.477-10-10-10z"
              />
            </svg>
          </a>
          <a href="#!" className="mr-9 text-neutral-200 dark:text-neutral-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="#ffffff"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.707 6.707a1 1 0 0 1 1.414-1.414L12 10.586l4.879-4.879a1 1 0 1 1 1.414 1.414L13.414 12l4.879 4.879a1 1 0 0 1-1.414 1.414L12 13.414l-4.879 4.879a1 1 0 0 1-1.414-1.414L10.586 12 5.707 7.121a1 1 0 0 1 1.414-1.414L12 10.586l4.879-4.879a1 1 0 1 1 1.414 1.414L13.414 12l4.879 4.879a1 1 0 0 1-1.414 1.414L12 13.414l-4.879 4.879a1 1 0 0 1-1.414-1.414L10.586 12 6.707 7.121a1 1 0 0 1-.707-.707z"
              />
            </svg>
          </a>
          <a
            href="http://linkedin.com/in/yonatan-aschalew"
            className="mr-9 text-neutral-200 dark:text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="w-full bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © 2024 Copyright: Yonatan Aschalew
      </div>
    </footer>
  );
}
