import Image from "next/image";
import Section from "@/app/_components/Section";
import Strength from "@/app/_components/Strength";
import mountain from "@/public/assets/mountain.jpg";

export default function Home() {
  return (
    <main className={"p-4 pt-8 lg:p-16"}>
      <Section title="Ma mission">
        <div className="flex flex-col items-center md:flex-row">
          <p className="pb-8 md:border-b-2 border-secondary md:text-right md:w-1/2 md:mr-4 md:mb-4">
            Révéler la magie de votre voyage avec un itinéraire sur mesure qui rendra chaque instant inoubliable !
          </p>
          <Image src={mountain} alt="paysage" className="-lg rounded-lg md:w-1/2" sizes="100vw"/>
        </div>
      </Section>
      <Section title="Pourquoi me choisir ?">
        <ul className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <Strength title="Gain de temps" icon="clock">
            Partagez avec moi votre projet de voyage, et je m'occuperai de l'organisation pour vous faire gagner du
            temps.
          </Strength>
          <Strength title="En toute sérénité" icon="trust">
            J'effectue toutes les recherches et vous n'avez plus qu'à valider!
          </Strength>
          <Strength title="Sur mesure" icon="puzzle">
            Je prends en compte vos préférences et vous suggère des options, tout en vous laissant le contrôle total sur
            votre voyage.
          </Strength>
          <Strength title="Budget maîtrisé" icon="money">
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
