import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useState } from 'react';


export default function NavMenu() {
    const [toggle, setToggle] = useState(false);

  return (
    <>
    {/* Menu Desktop */}
    <NavigationMenu.Root className="relative z-[100] w-full hidden lg:flex">
      <NavigationMenu.List className="block p-1 m-0 list-none lg:flex gap-x-8">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-white hover:text-[#00bcff] group flex select-none items-center justify-between gap-[2px] rounded-[4px] py-3 text-[15px] font-normal leading-none outline-none focus:shadow-[0_0_0_2px]">
            NOTÍCIAS <CaretDownIcon className="relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute left-0 w-auto bg-gray-900 shadow-md shadow-black/25 rounded data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-14">
            <ul className="font-medium text-center text-white">
              <li className="hover:text-[#00bcff] hover:bg-gray-800/75 ease-in duration-150 py-2 rounded">
                <Link href='/' className="px-6 py-2">Tecnologia</Link>
              </li>
              <li className="hover:text-[#00bcff] hover:bg-gray-800/75 ease-in duration-150 py-2 rounded">
                <Link href='/' className="px-6 py-2">Tutoriais</Link>
              </li>
              <li className="hover:text-[#00bcff]  hover:bg-gray-800/75 ease-in duration-150 py-2 rounded">
                <Link href='/' className="px-6 py-2">Cursos</Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="text-white hover:text-[#00bcff] group flex select-none items-center justify-between gap-[2px] rounded-[4px] text-[15px] font-normal leading-none outline-none focus:shadow-[0_0_0_2px]">
          <Link href='/' className="py-3">
            ÚLTIMAS NOTÍCIAS
          </Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="text-white hover:text-[#00bcff] group flex select-none items-center justify-between gap-[2px] rounded-[4px] text-[15px] font-normal leading-none outline-none focus:shadow-[0_0_0_2px]">
          <Link href='/' className="py-3">
            TUTORIAIS
          </Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="text-white hover:text-[#00bcff] group flex select-none items-center justify-between gap-[2px] rounded-[4px] text-[15px] font-normal leading-none outline-none focus:shadow-[0_0_0_2px]">
          <Link href='/' className="py-3">
            CURSOS
          </Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="text-white hover:text-[#00bcff] group flex select-none items-center justify-between gap-[2px] rounded-[4px] text-[15px] font-normal leading-none outline-none focus:shadow-[0_0_0_2px]">
          <Link href='/' className="py-3">
            COLUNAS
          </Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn top-full z-[1] flex h-[9px] items-end justify-center overflow-hidden transition-[width,transform_150ms_ease]">
          <div className="relative top-[70%] h-[9px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-[#00bcff]" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="absolute">
        <NavigationMenu.Viewport className="relative data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut duration-300" />
      </div>
    </NavigationMenu.Root>

    <div className="flex items-center justify-between py-2 text-lg text-white lg:hidden px-4">
      <span className="font-medium">MENU</span>
      <label className="relative block cursor-pointer text-[20px] select-none">
      <input type="checkbox" className="absolute cursor-pointer h-0 w-0" onClick={(e) => {e.preventDefault; setToggle(!toggle)}}/>
      <div className="relative top-0 left-0 h-[1.3em] w-[1.3em]">
        <span className={`w-[32px] h-[2px] bg-white absolute ease-in-out duration-[300ms] ${toggle ? 'top-[50%] translate-y-[-50%] rotate-45' : 'top-[10%]' }`}></span>
        <span className={`w-[32px] h-[2px] bg-white absolute ease-in-out duration-[300ms] ${toggle ? 'top-[50%] translate-y-[-50%] -rotate-45' : 'top-[50%]' }`}></span>
        <span className={`w-[32px] h-[2px] bg-white absolute ease-in-out duration-[300ms] top-[90%] ${toggle ? 'translate-x-[-50px] opacity-0' : 'opacity-1' }`}></span>
      </div>
      </label>
    </div>
    
    {/* Menu MOBAL */}
    <NavigationMenu.Root className="relative z-[100] w-full lg:hidden">
    <NavigationMenu.List className={`${toggle && 'block h-screen overflow-y-auto visible'} h-0 top-[1px] overflow-y-hidden absolute right-0 ease-linear duration-300 z-[1000] bg-[#101822] px-4 w-full`}>
    <NavigationMenu.Item className="text-white hover:text-[#00bcff] group flex select-none items-center justify-between gap-[2px] text-[15px] font-normal leading-none outline-none focus:shadow-[0_0_0_2px] border-b-[1px] border-[#00bcff]">
        <Link href='/' className="w-full py-4" onClick={(e) => {e.preventDefault; setToggle(!toggle)}}>
          CATEGORIAS
        </Link>
      </NavigationMenu.Item>

      <NavigationMenu.Item className="text-white hover:text-[#00bcff] group flex select-none items-center justify-between gap-[2px] text-[15px] font-normal leading-none outline-none focus:shadow-[0_0_0_2px] border-b-[1px] border-[#00bcff]">
        <Link href='/' className="w-full py-4" onClick={(e) => {e.preventDefault; setToggle(!toggle)}}>
          ÚLTIMAS NOTÍCIAS
        </Link>
      </NavigationMenu.Item>

      <NavigationMenu.Item className="text-white hover:text-[#00bcff] group flex select-none items-center justify-between gap-[2px] text-[15px] font-normal leading-none outline-none focus:shadow-[0_0_0_2px] border-b-[1px] border-[#00bcff]">
        <Link href='/' className="w-full py-4" onClick={(e) => {e.preventDefault; setToggle(!toggle)}}>
          TUTORIAIS
        </Link>
      </NavigationMenu.Item>

      <NavigationMenu.Item className="text-white hover:text-[#00bcff] group flex select-none items-center justify-between gap-[2px] text-[15px] font-normal leading-none outline-none focus:shadow-[0_0_0_2px] border-b-[1px] border-[#00bcff]">
        <Link href='/' className="w-full py-4" onClick={(e) => {e.preventDefault; setToggle(!toggle)}}>
          CURSOS
        </Link>
      </NavigationMenu.Item>

      <NavigationMenu.Item className="text-white hover:text-[#00bcff] group flex select-none items-center justify-between gap-[2px] text-[15px] font-normal leading-none outline-none focus:shadow-[0_0_0_2px]">
        <Link href='/' className="w-full py-4" onClick={(e) => {e.preventDefault; setToggle(!toggle)}}>
          COLUNAS
        </Link>
      </NavigationMenu.Item>

      <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn top-full z-[1] flex h-[9px] items-end justify-center overflow-hidden transition-[width,transform_150ms_ease]">
        <div className="relative top-[70%] h-[9px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-[#00bcff]" />
      </NavigationMenu.Indicator>
    </NavigationMenu.List>

    <div className="absolute">
      <NavigationMenu.Viewport className="relative data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut duration-300" />
    </div>
    </NavigationMenu.Root>
    </>
    )
  
}