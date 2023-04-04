import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 py-10 text-center bg-[#101822]">
      <p className="font-medium text-white">
        Developed by
        <Link href="https://github.com/ViniGSouza" target="_blank" className="text-[#00bcff] duration-150 hover:text-white"> me.</Link>
        </p>
    </footer>
  )
}