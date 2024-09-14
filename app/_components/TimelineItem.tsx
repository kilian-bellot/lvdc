import Icon from "@app/_components/Icon";

const iconInsetValue = (position) => {
  switch (position) {
    case 'top-left':
      return 'top-0 left-0 translate-x-[-20px] translate-y-[-20px]'
    case 'top-right':
      return 'top-0 left-0 translate-x-[-20px] translate-y-[-20px]'
    case 'bottom-left':
      return 'bottom-0 left-0 translate-x-[-20px] translate-y-[20px]'
    case 'bottom-right':
      return 'bottom-0 right-0 translate-x-[20px] translate-y-[20px]'
  }
}

export default function TimelineItem({title, text, icon, iconPosition, index}) {
  const position = index + 1;
  const containerInset = index % 2 === 0
    ? "left-0 translate-x-[50px] md:left-auto md:translate-x-0 md:bottom-0 md:translate-y-[-50px]"
    : "left-0 translate-x-[50px] md:left-auto md:translate-x-0 md:top-0 md:translate-y-[50px]";
  const iconInset = iconInsetValue(iconPosition);
  return (
    <div className={"flex relative h-1/5 md:w-1/5 items-center justify-center justify-self-center self-center"}>
      <span
        className={"absolute flex w-16 h-16 bg-light rounded-full items-center justify-center text-2xl font-bold"}>
        {position}
      </span>
      <div
        className={`w-[70vw] md:w-48 absolute p-1 sm:p-2 border-4 border-secondary rounded-xl text-center ${containerInset}`}>
        <h3 className={"mb-2 font-bold"}>{title}</h3>
        <span className={iconPosition}>
          <Icon name={icon} size={48}
                className={`absolute ${iconInset} bg-white rounded-full`}/>
        </span>
        <p className={"text-xs sm:text-md"}>{text}</p>
      </div>
    </div>
  )
}