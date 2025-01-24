import Page from "@app/_components/Page";
import Section from "@app/_components/Section";
import NumberedTitle from "@app/_components/NumberedTitle";
import Icon from "@app/_components/Icon";
import ContactForm from "@app/_components/ContactForm";
import Calendar from "@app/_components/Calendar";

export default function Contact() {
  return (
    <Page>
      <Section className={"flex flex-col items-center"}>
        <NumberedTitle number={1} text={"Le rendez-vous en ligne"}/>
        <div className={"flex w-full h-full"}>
          <Calendar />
        </div>
      </Section>
      <Section className={"flex justify-center"}>
        <Icon name={"or"} size={76} color={"secondary"}/>
      </Section>
      <Section className={"flex flex-col items-center"}>
        <NumberedTitle number={2} text={"Le formulaire de contact"}/>
        <div className={"flex w-full xl:w-1/2 rounded-2xl"}>
          <ContactForm />
        </div>
      </Section>
    </Page>
  );
}
