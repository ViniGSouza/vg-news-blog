import Image from "next/image";
import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";
import logo from "../../public/logo.png";

export default function () {
  return (
    <div className="bg-[#0D0F12] mx-4 md:mx-0 md:ml-5 md:w-full md:max-w-[300px] max-h-[820px] shadow-md py-10 px-6">
    <h3 className="text-3xl text-white">BUSCAR</h3>
    <input
      type="text"
      placeholder="Digite aqui..."
      className="bg-[#0d0f12] border-[#00bcff] border-[1px] rounded mt-3 w-full pl-2 py-1 text-white"
    />
    <h3 className="mt-10 mb-5 pb-3 text-3xl text-white border-b-[1px] border-[#00bcff]">DESTAQUES</h3>
      <ul>
        <li className="my-5">
        <Link href="/">
          <Image src={logo} alt="destaque"/>
        </Link>
        </li>
        <li className="my-5">
        <Link href="/">
          <Image src={logo} alt="destaque"/>
        </Link>
        </li>
        <li className="my-5">
        <Link href="/">
          <Image src={logo} alt="destaque"/>
        </Link>
        </li>
        <li className="my-5">
        <Link href="/">
          <Image src={logo} alt="destaque"/>
        </Link>
        </li>
      </ul>
      <h3 className="mt-10 mb-5 pb-3 text-3xl text-white border-b-[1px] border-[#00bcff]">TUTORIAIS</h3>
      <ul>
        <li className="my-2">
        <Link href="/">
          <p className="flex items-center text-lg text-white uppercase">
            <BsArrowRightCircleFill className="text-[#00bcff] mr-2" />Tutorial - 1</p>
        </Link>
        </li>
        <li className="my-2">
        <Link href="/">
          <p className="flex items-center text-lg text-white uppercase">
            <BsArrowRightCircleFill className="text-[#00bcff] mr-2" />Tutorial - 2</p>
        </Link>
        </li>
        <li className="my-2">
        <Link href="/">
          <p className="flex items-center text-lg text-white uppercase">
            <BsArrowRightCircleFill className="text-[#00bcff] mr-2" />Tutorial - 3</p>
        </Link>
        </li>
        <li className="my-2">
        <Link href="/">
          <p className="flex items-center text-lg text-white uppercase">
            <BsArrowRightCircleFill className="text-[#00bcff] mr-2" />Tutorial - 4</p>
        </Link>
        </li>
        <li className="my-2">
        <Link href="/">
          <p className="flex items-center text-lg text-white uppercase">
            <BsArrowRightCircleFill className="text-[#00bcff] mr-2" />Tutorial - 5</p>
        </Link>
        </li>
        <li className="my-2">
        <Link href="/">
          <p className="flex items-center text-lg text-white uppercase">
            <BsArrowRightCircleFill className="text-[#00bcff] mr-2" />Tutorial - 6</p>
        </Link>
        </li>
      </ul>
  </div>
  )
}