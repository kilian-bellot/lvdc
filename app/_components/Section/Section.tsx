import LogoSvg from "/public/logo.svg";
import Link from "next/link";
import "./Header.scss";

export default function Header() {
  return (
    <header className="flex w-full max-h-30 justify-between items-center p-8">
      <LogoSvg className="w-auto max-h-16 self-start"/>
      <nav>
        <ul className="flex">
          <li className="py-4 px-4"><Link href="/">Accueil</Link></li>
          <li className="py-4 px-4"><Link href="/about">Qui suis-je ?</Link></li>
          <li className="py-4 px-4"><Link href="/book">Carnet de voyage</Link></li>
          <li className="py-4 px-4"><Link href="/price">Prix</Link></li>
          <li className="py-4 px-4"><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
