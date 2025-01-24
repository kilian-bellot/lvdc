import Image from "next/image";
import Icon from "@app/_components/Icon";

const arrowContainerStyleByArrowPosition = (position) => {
  switch (position) {
    case "top":
      return "top-0 left-0 right-0 mx-auto w-fit translate-y-[-48px]"
    case "bottom":
      return "bottom-0 left-0 right-0 mx-auto w-fit translate-y-[48px]"
    case "left":
      return "left-0 top-0 bottom-0 my-auto h-fit translate-x-[-48px]"
    case "right":
      return "right-0 top-0 bottom-0 my-auto h-fit translate-x-[48px]"
    default:
      return "absolute"
  }
}

const arrowStyleByArrowPosition = (position) => {
  switch (position) {
    case "top":
      return "rotate-180"
    case "bottom":
      return "translate-x-[20px]"
    case "left":
      return "rotate-90"
    case "right":
      return "-rotate-90"
    default:
      return ""
  }
}

const labelStyleByArrowPosition = (position) => {
  switch (position) {
    case "top":
      return "min-w-fit top-0 left-0 right-0 mx-auto translate-x-[45px] translate-y-[-10px]"
    case "bottom":
      return "bottom-0 left-0 right-0 mx-auto translate-x-[-70px] translate-y-[5px]"
    case "left":
      return "left-0 top-0 bottom-0 my-auto translate-x-[-40px] translate-y-[-30px]"
    case "right":
      return "right-0 top-0 bottom-0 my-auto translate-x-[40px] translate-y-[40px]"
    default:
      return ""
  }
}

const rotateStyle = (angle) => `rotate(${angle}deg)`

export default function PolaroidBook({images}) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:grid-rows-[400px] w-full px-8 pt-10 pb-20 sm:pt-4 md:pb-4 justify-items-center items-center bg-primary gap-y-32`}>
      {images.map((image, index) => {
        const {src, alt, location, arrowPosition, rotation} = image;
        return (
          <div key={index} className={`relative bg-white p-2 max-w-fit max-h-fit`}
               style={{transform: rotateStyle(rotation)}}>
            <Image src={src} alt={alt} className={`w-96 sm:w-72 h-64 object-cover`}/>
            <div className={`absolute ${arrowContainerStyleByArrowPosition(arrowPosition)}`}>
              <div className={"relative"}>
                <Icon name={"curved-arrow"} size={36} color={"tertiary"}
                      className={`${arrowStyleByArrowPosition(arrowPosition)}`}/>
                <p className={`absolute w-max ${labelStyleByArrowPosition(arrowPosition)} text-tertiary`}>{location}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}