"use client";
import Image from 'next/image';
import Link from "next/link";
import Icon from "@app/_components/Icon";
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

  useEffect(() => {
    setShowMenu(false);
  }, [currentPage]);

  useEffect(() => {
    showMenu ? document.body.classList.add('--no-scroll') : document.body.classList.remove('--no-scroll')
  }, [showMenu])

  return (
    <header
      className={`bg-tertiary border-b border-secondary sticky z-50 top-0 h-24 flex items-center justify-center p-1 mb-4`}>
      <Link href={"/"} className="flex mr-auto flex-grow-0 h-full">
        <span className={"w-20 h-20 relative"}>
          <Image src={"/assets/logo.svg"} alt="logo Les Voyages de Charlène" fill={true}/>
        </span>
        <h1 className={"hidden"}>Les voyages de Charlène</h1>
      </Link>
      <span className="sm:hidden h-auto" onClick={handleMenuClick}>
        {!showMenu && <Icon name={"menu"} size={36} className={"mr-4"}/>}
      </span>
      <nav
        className={`h-full bg-tertiary mr-auto ${showMenu ? "fixed z-10 inset-0 h-full w-full" : "hidden"} sm:block`}>
        {showMenu && <div className={"relative w-full h-8"}>
            <Icon name={"close"} size={36} className={"absolute right-0 mt-8 mr-5"}
                  onClick={handleMenuClick}/>
        </div>}
        <ul
          className={`flex h-full justify-end sm:mr-0 lg:mr-12 ${showMenu ? "flex-col h-min items-center" : "flex-row"}`}>
          {pages.map(({title, url}) => {
            return (
              <li key={title}
                  className={`
                    flex items-center text-center mx-4 sm:mx-2 lg:mx-4 tracking-wider
                    ${showMenu ? "w-full p-8 border-b border-solid border-secondary" : ""}
                    ${currentPage == url ? "font-bold" : ""}
                  `}>
                <Link href={url}
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