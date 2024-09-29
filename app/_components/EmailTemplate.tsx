import {EmailDTO} from "@app/types/email";

export default function EmailTemplate({firstname, lastname, email, phone, message}: EmailDTO) {
  return (
    <html>
      <body>
        <h1>Nouvelle demande de contact de {firstname} {lastname}</h1>
        <p>{`Email: ${email}`}</p>
        <p>{`Téléphone: ${phone}`}</p>
        <p>{message}</p>
      </body>
    </html>
  )
}