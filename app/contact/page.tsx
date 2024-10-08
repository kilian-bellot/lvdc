import Page from "@app/_components/Page";
import Section from "@app/_components/Section";
import NumberedTitle from "@app/_components/NumberedTitle";
import Icon from "@app/_components/Icon";
import ContactForm from "@app/_components/ContactForm";

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
      <Section className={"flex justify-center"}>
        <Icon name={"or"} size={76} color={"secondary"}/>
      </Section>
      <Section className={"flex flex-col items-center"}>
        <NumberedTitle number={2} text={"Le formulaire de contact"}/>
        <div className={"flex w-full xl:w-1/2 border-4 border-primary rounded-2xl"}>
          <ContactForm />
        </div>
      </Section>
    </Page>
  );
}
