import Page from "@app/_components/Page";
import Section from "@app/_components/Section";
import NumberedTitle from "@app/_components/NumberedTitle";
import Input from "@app/_components/Input";

export default function Contact() {
  return (
    <Page>
      <Section className={"flex flex-col items-center"}>
        <NumberedTitle number={1} text={"Le rendez-vous en ligne"}/>
        <div className={"flex"}>
          <div className={"flex flex-col w-1/3 self-start items-center text-center"}>
            <h3 className={"font-bold"}>Appel découverte</h3>
            <p className={"mb-4"}>30min</p>
            <div className={"flex flex-col gap-y-8"}>
              <p>
                Vous envisagez de me confier l'organisation de vos prochaines vacances ? Faisons connaissances !
              </p>
              <p>
                Nous allons passer une trentaine de minutes ensemble pour échanger sur votre projet de voyage.
              </p>
              <p>
                Cet appel découverte est gratuit et n'engage à rien ! Il peut se dérouler par téléphone (Whatsapp) ou
                par
                visio selon vos préférences.
              </p>
            </div>
          </div>
          <div className={"flex w-2/3 items-center justify-center"}>
            WIP...
          </div>
        </div>
      </Section>
      <Section className={"flex flex-col items-center"}>
        <NumberedTitle number={2} text={"Le formulaire de contact"}/>
        <div className={"flex w-full border-4 border-primary rounded-2xl"}>
          <form action="mailto:info@charlene-voyages.com" method="GET">
            <Input name="firstname" type="text" placeholder={"Prénom"} className={""}/>
            <Input name="lastname" type="text" placeholder={"Nom"} className={""}/>
            <Input name="email" type="text" placeholder={"E-mail"} className={""}/>
            <Input name="subject" type="text" placeholder={"Voyage au Canada"} className={""}/>
            <textarea name="body"></textarea>
            <Input type="submit" value="Envoyer l'e-mail" className={""}/>
          </form>
        </div>
      </Section>
    </Page>
  );
}
