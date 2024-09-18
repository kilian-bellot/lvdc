import Image from "next/image";

export default function NotFound() {
  return (
    <div className={"relative"}>
      <Image src={"/assets/404.png"} alt="page introuvable" width="1200" height="800"/>
      <div
        className={"flex flex-col w-1/2 absolute z-10 left-4 sm:left-10 top-0 bottom-0 my-auto h-fit p-2 sm:p-10 bg-primary shadow-black shadow-md sm:text-2xl uppercase"}>
        <p className={"text-tertiary mb-4"}>
          Oups ! La page que vous recherchez semble introuvable !
        </p>
        <p className={"text-secondary"}>
          Erreur 404
        </p>
      </div>

    </div>
  );
}
