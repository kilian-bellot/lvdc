"use client";
import Image from 'next/image';
import Link from "next/link";
import Svg from "@app/_components/Svg";
import {useEffect, useState} from "react";
import {usePathname} from "@node_modules/next/dist/client/components/navigation";

const pages = [
  {title: "Accueil", url: "/"},
  {title: "Qui suis-je ?", url: "/about"},
  {title: "Carnet de voyage", url: "/book"},
  {title: "Prix", url: "/price"},
  {title: "Contact", url: "/contact"},
]

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const currentPage = usePathname();

  const handleMenuClick = () => {
    return setShowMenu(!showMenu)
  }

  const handleNavClick = (event) => {
    // TODO close menu and continue event ?
    console.log(event);
    return;
  }

  useEffect(() => {
    setShowMenu(false);
  }, [currentPage]);

  useEffect(() => {
    showMenu ? document.body.classList.add('--no-scroll') : document.body.classList.remove('--no-scroll')
  }, [showMenu])

  return (
    <header
      className={`bg-white border-b b-secondary sticky z-50 top-0 flex h-24 items-center justify-between p-1`}>
      <Link href={"/"} className="flex items-center h-full sm:pr-1 lg:ml-12">
        <span className={"w-20 h-20 relative mr-2"}>
          <Image src={"/assets/logo.jpg"} alt="logo" fill={true}/>
        </span>
        <h1 className={"text-2xl sm:text-lg md:text-lg lg:text-2xl text-nowrap"}><span
          className="text-secondary">C</span>rea-voyage
        </h1>
      </Link>
      <span className="sm:hidden h-auto" onClick={handleMenuClick}>
        {!showMenu && <Svg src={"/assets/icons/menu.svg"} alt={"menu"} size={36} className={"mx-4"}/>}
      </span>
      <nav
        className={`h-full bg-white ${showMenu ? "fixed z-10 inset-0 h-full w-full" : "hidden"} sm:block`}>
        {showMenu && <div className={"relative w-full h-8"}>
            <Svg src={"/assets/icons/close.svg"} alt={"close"} size={36} className={"absolute right-0 m-8 mr-4"}
                 onClick={handleMenuClick}/>
        </div>}
        <ul
          className={`flex h-full justify-end sm:mr-0 lg:mr-12 ${showMenu ? "flex-col h-min items-center" : "flex-row"}`}>
          {pages.map(({title, url}) => {
            return (
              <li key={title}
                  className={`
                    flex items-center text-center mx-4 sm:mx-2 lg:mx-4 tracking-wider
                    ${showMenu ? "w-full p-8 border-b border-solid b-secondary" : ""}
                    ${currentPage == url ? "font-bold" : ""}
                  `}>
                <Link href={url} onClick={handleNavClick}
                      className={title == "Contact" ? "bg-secondary text-tertiary rounded p-2 mx-0 leading-4" : ""}>
                  {title}
                </Link>
              </li>)
          })}
        </ul>
      </nav>

    </header>
  );
}