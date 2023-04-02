import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Header () {
  return (
    <header className="flex items-center justify-between px-10 space-x-2 font-semibold py-7">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://vg-dev.site/assets/logomarca-vg.330a14cb.png"
            width={100}
            height={100}
            alt="logo"
          />
        </Link>
        <h1 className="text-[#5703d6]">VG News - Your Tech Blog</h1>
      </div>

      <div className="flex items-center text-[#5703d6] gap-4">
        <Link href="https://github.com/ViniGSouza" target="_blank">
          <BsGithub className="w-6 h-6" />
        </Link>
        <Link href="https://www.linkedin.com/in/viniciusgdev/" target="_blank">
          <BsLinkedin className="w-6 h-6" />
        </Link>
      </div>
    </header>
  )
}

export default Header;