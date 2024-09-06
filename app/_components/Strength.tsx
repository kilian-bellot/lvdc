import Image from "next/image";

export default function Strength({title, iconPath, iconName, children}) {
  return (
    <li className="relative flex flex-col items-center mb-4 md:mb-16">
      <Image src={iconPath} alt={iconName} width={48} height={48}/>
      <h2 className="text-lg my-4 text-secondary ">{title}</h2>
      <p className="text-center">
        {children}
      </p>
    </li>
  );
}
