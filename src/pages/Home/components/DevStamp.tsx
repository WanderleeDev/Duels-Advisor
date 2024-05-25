export default function DevStamp() {
  return (
    <p className="text-sm text-gray-200 tracking-wider flex gap-1 font-Belwe">
      <span className="inline-block">
        © {new Date().getFullYear().toString()} develop by
      </span>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/WanderleeDev"
        className="underline inline-block text-amber-400 hover:text-white transition-colors"
      >
        WanderleeDev
      </a>
    </p>
  );
}
