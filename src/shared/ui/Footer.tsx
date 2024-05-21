export default function Footer() {
  return (
    <footer className="bg-white/15 relative z-10 rounded-lg shadow m-4 backdrop-blur-sm">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <p className="text-sm text-stone-300 font-bold tracking-wider flex gap-1">
          <span className="inline-block">© 2024 develop by</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/WanderleeDev"
            className="hover:underline inline-block"
          >
            WanderleeDev
          </a>
        </p>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
