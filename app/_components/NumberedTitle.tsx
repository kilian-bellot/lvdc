export default function NumberedTitle({number, text}) {
  return (
    <div className={"flex items-center gap-x-2 mb-8"}>
      <span className={"flex w-16 h-16 bg-neutral rounded-full items-center justify-center text-2xl font-bold"}>
        {number}
      </span>
      <h2 className={"text-2xl"}>{text}</h2>
    </div>
  )
}