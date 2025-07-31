import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/hugobertoncelo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          {/* Ícone LinkedIn */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6 1.1 6 0 4.88 0 3.5S1.1 1 2.48 1c1.38 0 2.5 1.12 2.5 2.5zM.08 8.06h4.8v13.94h-4.8zM8.66 8.06h4.6v1.94h.06c.64-1.22 2.2-2.5 4.53-2.5 4.84 0 5.73 3.19 5.73 7.33v8.17h-4.8v-7.25c0-1.73-.03-3.96-2.41-3.96-2.42 0-2.79 1.9-2.79 3.86v7.35h-4.8z" />
          </svg>
        </a>

        <a
          href="https://instagram.com/bertoncelo.hugo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          {/* Ícone Instagram */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M7.75 2h8.5C19.55 2 22 4.46 22 7.75v8.5c0 3.3-2.46 5.75-5.75 5.75h-8.5C4.45 22 2 19.54 2 16.25v-8.5C2 4.46 4.46 2 7.75 2zM12 7.2a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zm5.4-.8a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zM12 9.6a2.4 2.4 0 110 4.8 2.4 2.4 0 010-4.8z" />
          </svg>
        </a>

        <a
          href="https://github.com/Hugobertoncelo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          {/* Ícone GitHub */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12a10 10 0 006.84 9.54c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.92 0-1.08.38-1.97 1.03-2.67-.1-.25-.45-1.26.1-2.64 0 0 .84-.27 2.75 1.03a9.55 9.55 0 015 0c1.9-1.3 2.75-1.03 2.75-1.03.56 1.38.2 2.39.1 2.64.64.7 1.02 1.59 1.02 2.67 0 3.82-2.34 4.67-4.57 4.91.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
          </svg>
        </a>

        <a
          href="https://wa.me/5528999453033"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          {/* Ícone WhatsApp */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.54 12.54 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.54 12.54 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>

        <a
          href="https://hugobertoncelo.github.io/Portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Portfolio"
        >
          {/* Ícone Portfólio */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <rect x="3" y="4" width="18" height="14" rx="2" ry="2" />
            <line x1="3" y1="20" x2="21" y2="20" />
            <line x1="8" y1="14" x2="16" y2="14" />
          </svg>
        </a>
      </div>
      <div className="footer-text">
        © {new Date().getFullYear()} Hugo Bertoncelo
      </div>
    </footer>
  );
}
