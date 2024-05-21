export default function InfoLink() {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/WanderleeDev"
      className="flex w-fit justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full  select-none animate-fade-in animate-delay-500 hover:bg-blue-700 hover:text-blue-100 transition-colors mx-auto"
    >
      <span className="text-xs bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full text-white px-4 py-1.5 me-3">
        New
      </span>{" "}
      <span className="text-sm font-medium">
        Integrated with <strong>GEMINI AI</strong>{" "}
        <span className="hidden md:inline-block"> for deck generation</span>
      </span>
      <svg
        className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 9 4-4-4-4"
        />
      </svg>
    </a>
  );
}
