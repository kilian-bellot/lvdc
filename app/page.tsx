import Image from "next/image";
import Section from "@/app/_components/Section";
import Strength from "@/app/_components/Strength";
import mountain from "@/public/assets/mountain.jpg";

export default function Home() {
  return (
    <main className={"p-4 pt-8 lg:p-16"}>
      <Section title="Ma mission">
        <div className="flex flex-col md:flex-row">
          <p className="pb-8 md:w-1/2 md:pr-4 md:pb-4">
            Je suis là pour transformer vos rêves de voyage en réalité ! Mon objectif est de vous aider à créer un
            itinéraire parfait ou à choisir la destination qui répond à toutes vos envies. Je crois que chaque voyage
            est unique et mérite une attention particulière pour le rendre inoubliable. Avec mon expertise et mes
            conseils personnalisés, je m'engage à enrichir votre expérience de voyage. Contactez-moi pour un voyage sur
            mesure et mémorable !
          </p>
          <Image src={mountain} alt="paysage" className="-lg rounded-lg md:w-1/2" sizes="100vw"/>
        </div>
      </Section>
      <Section title="Pourquoi me choisir ?">
        <ul className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <Strength title="Gain de temps" iconPath="/assets/icons/clock.svg" iconName="horloge">
            Confier moi votre projet de voyage, je vous facilite l'organisation en vous faisant gagner du temps.
          </Strength>
          <Strength title="En toute sérénité" iconPath="/assets/icons/meditation.svg" iconName="meditation">
            Je réalise les recherches difficiles, sources de tensions, vous n'avez qu'à valider votre choix.
          </Strength>
          <Strength title="Sur mesure" iconPath="/assets/icons/ruler.svg" iconName="règle">
            J'adapte mes carnets de voyage à vos envies et vous propose des idées mais vous restez maître de votre
            voyage.
          </Strength>
          <Strength title="Budget maîtrisé" iconPath="/assets/icons/piggy-bank.svg" iconName="tirelire">
            Pour chaque voyage sur mesure, l'offre est claire et le budget du voyage est transparent.
          </Strength>
        </ul>
      </Section>
      <Section title={"Comment ça fonctionne ?"}>En cours de rédaction...</Section>
      <Section>
        <p>Prêt à vous lancer dans la création d’un voyage sur mesure ?</p>
        <p>N’attendez plus, le premier rendez-vous est gratuit !</p>
        <p>Clique ici pour voir mes disponibilités</p>
      </Section>
      <Section>
        <p> « Voyager c’est vivre. »</p>
        <p>– Hans Christian Andersen -</p>
      </Section>
    </main>
  )
    ;
}
