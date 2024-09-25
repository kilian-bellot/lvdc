import Icon from "@app/_components/Icon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="flex flex-col sm:flex-row w-full bottom-0 bg-primary p-2 text-tertiary justify-between gap-y-4 text-xs">
      <div className={"flex flex-col order-3 sm:order-1"}>
        <p>
          Tous droits réservés.
        </p>
        <p>
          Toute reproduction est interdite.
        </p>
        <p>
          ©2024 Les voyages de Charlène
        </p>
      </div>
      <div className={"flex flex-col items-center order-1 sm:order-2"}>
        <p className="block inset-x-1/2">
          Retrouvez moi sur
        </p>
        <span className={"flex justify-center gap-2"}>
          <Link href={"https://facebook.com"}>
            <Icon name={"facebook"} size={36} color={"secondary"}/>
          </Link>
          <Link href={"https://instagram.com"} passHref={true}>
            <Icon name={"instagram"} size={36} color={"secondary"}/>
          </Link>
        </span>
      </div>
      <div className={"flex flex-col order-2 sm:order-3"}>
        <Link href={"/policy/privacy"}>
          Politique de confidentialité
        </Link>
        <Link href={"/policy/terms-and-conditions"}>
          Conditions générales de ventes
        </Link>
      </div>
    </footer>
  );
}
