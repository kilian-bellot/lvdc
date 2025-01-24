'use client';
import Input from "@app/_components/Input";
import {sendEmail} from "@app/action";
import {useFormStatus} from "react-dom";
import {useState} from "react";

export default function ContactForm() {
  const { pending } = useFormStatus()
  const [ submitted, setSubmitted ] = useState(false)

  if(submitted || pending) return <div className={"p-4"}>Message envoyé !</div>;

  return (
    <form action={sendEmail} onSubmit={() => {setSubmitted(true)}} className={"w-full p-4"}>
      <div className={"grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center gap-x-8"}>
        <Input type="text" name="firstname" placeholder={"Prénom"} required/>
        <Input type="text" name="lastname" placeholder={"Nom"} required/>
        <Input type="text" name="email" placeholder={"E-mail"} required/>
        <Input type="text" name="phone" placeholder={"Téléphone"} />
      </div>
      <Input type="textarea" name="message" label={"Message"}
             className={"w-full min-h-48 border-2 border-neutral p-1"}
             placeholder={"N'oubliez pas de partager tout ce qui pourra être utile à la préparation de notre échange (destination, dates...)"}
             required />
      <Input type="submit" value="Envoyer" disabled={submitted || pending} className={"w-1/2 px-8 py-4 text-tertiary uppercase cursor-pointer hover:bg-lighter-primary"}
             readOnly />
    </form>
  )
}