import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 py-10 text-center">
      <p className="font-medium">
        Developed by
        <Link href="https://github.com/ViniGSouza" className="text-[#5703d6] duration-150 hover:text-black"> me.</Link>
        </p>
    </footer>
  )
}