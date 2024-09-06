import Image from "next/image";

const positions = ["absolute", "fixed", "relative", "static", "sticky"];
export default function Svg({src, alt, size = 24, className = "", ...restProps}) {
  const hasDefinedPosition = className.split(" ").some((e) => positions.includes(e))
  return (
    <div
      className={`${hasDefinedPosition ? `${className}` : `relative ${className}`}`}
      style={{height: size, width: size}}>
      <Image src={src} alt={alt} fill={true} {...restProps}/>
    </div>
  )
}