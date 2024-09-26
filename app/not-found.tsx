import Image from "next/image";
import notFoundImage from "@/public/assets/404.png";
import Page from "@app/_components/Page";

export default function NotFound() {
  return (
    <Page className={"relative flex items-center justify-center"}>
      <Image src={notFoundImage} alt="page introuvable" className={"h-full"}/>
      <div
        className={"flex flex-col w-1/2 absolute z-10 left-4 sm:left-10 top-0 bottom-0 my-auto h-fit p-2 sm:p-10 bg-primary shadow-black shadow-md text-sm sm:text-2xl uppercase"}>
        <p className={"text-tertiary mb-4"}>
          Oups ! La page que vous recherchez semble introuvable !
        </p>
        <p className={"text-secondary"}>
          Erreur 404
        </p>
      </div>
    </Page>
  );
}
