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

export default function TimelineItem({title, text, icon, index}) {
  const position = index + 1;
  const containerInset = index % 2 === 0
    ? "left-0 translate-x-[50px] md:left-auto md:translate-x-0 md:bottom-0 md:translate-y-[-50px]"
    : "left-0 translate-x-[50px] md:left-auto md:translate-x-0 md:top-0 md:translate-y-[50px]";
  return (
    <div className={"flex relative h-1/5 md:w-1/5 items-center justify-center justify-self-center self-center"}>
      <span
        className={"absolute flex w-16 h-16 bg-neutral rounded-full items-center justify-center text-2xl font-bold"}>
        {position}
      </span>
      <div
        className={`flex flex-col w-[70vw] md:w-52 absolute p-1 sm:p-2 border-2 border-secondary rounded-xl text-center justify-center ${containerInset}`}>
        <span className={"flex items-center mx-auto mb-1"}>
          <Icon name={icon} className={"mx-2"}/>
          <h3 className={"font-bold"}>{title}</h3>
        </span>
        <p className={"text-xs sm:text-md"}>{text}</p>
      </div>
    </div>
  )
}