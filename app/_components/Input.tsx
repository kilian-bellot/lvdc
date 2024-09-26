export default function Input({...props}) {
  const {name, placeholder, type} = props;
  return (
    <div className={"flex flex-col p-4"}>
      <label htmlFor={name}>{placeholder}</label>
      <input {...props}
             className={`border-b-2 border-primary w-fit ${type === "submit" ? "bg-primary p-2 text-tertiary rounded-2xl" : ""}`}/>
    </div>
  )
}