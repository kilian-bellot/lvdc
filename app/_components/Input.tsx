interface InputProps {
  type: string,
  name?: string,
  placeholder?: string,
  label?: string,
  value?: string,
  className?: string,
  required?: boolean,
  readOnly?: boolean,
  disabled?: boolean,
}

export default function Input({type, name, placeholder, label, required, disabled, className = "", ...rest} : InputProps) {
  const isSubmit = type === "submit";
  const submitInputStyle = `w-fit text-center bg-primary p-2 text-tertiary rounded-full ${className}`;

  return (
    <div className={`flex flex-col w-full p-2 ${type === "submit" ? "items-end" : ""}`}>
      {!isSubmit && <label htmlFor={name}>{`${label || placeholder}${required ? " *" : ""}`}</label>}
      {type === "textarea"
        ? <textarea {...rest} name={name} placeholder={placeholder} className={className} />
        : <input {...rest} type={type} name={name} placeholder={placeholder} required={required} disabled={disabled}
                 className={`border-b-2 border-neutral mb-4 ${isSubmit ? submitInputStyle : ""}`}/>
      }
    </div>
  )
}