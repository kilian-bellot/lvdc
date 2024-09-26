import Image from "next/image";

export default function MediaTextColumnLayout({image, alt, reverse = false, children}) {
  return (
    <div
      className={`grid grid-cols-1 md:w-1/2 p-2 items-center justify-items-center sm:px-8`}>
      <Image src={image} alt={alt} placeholder={"blur"} className={`${reverse ? "order-1 md:-order-1" : "order-1"} xl:w-3/4 my-2`}/>
      <span className={"w-full xl:w-3/4 py-4 text-center"}>
        {children}
      </span>
    </div>
  )
}