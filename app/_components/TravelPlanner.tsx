import Image from "next/image";

export default function TravelPlanner({imagePath, alt, reverse = false, children}) {
  return (
    <div className={`flex flex-col ${reverse ? "md:flex-col-reverse" : "md:flex-col"} md:w-1/2 p-2 sm:px-8`}>
      <Image src={imagePath} alt={alt} className={"my-2"}/>
      {children}
    </div>
  )
}