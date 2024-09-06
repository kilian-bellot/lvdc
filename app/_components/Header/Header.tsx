import Image from "next/image";
import LogoSvg from "/public/logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex max-h-20 w-full">
      <LogoSvg className="h-full"/>
      <nav>
        <ul className="flex">
          <li className="p-4"><Link href="/">Accueil</Link></li>
          <li className="p-4"><Link href="/about">Qui suis-je ?</Link></li>
          <li className="p-4"><Link href="/book">Carnet de voyage</Link></li>
          <li className="p-4"><Link href="/price">Prix</Link></li>
          <li className="p-4"><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export style = {
  
}
