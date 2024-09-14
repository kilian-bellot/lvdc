import Image from "next/image";
import Section from "@/app/_components/Section";
import Strength from "@/app/_components/Strength";
import Link from "next/link";
import Timeline from "@app/_components/Timeline";

export default function Home() {
  return (
    <main className={"p-4 pt-8 lg:p-16"}>
      <Section title="Ma mission">
        <div className="flex flex-col items-center md:flex-row">
          <p className="pb-8 md:border-b-2 border-secondary md:text-right md:mr-8 md:mb-4 lg:mr-16">
            Révéler la magie de votre voyage avec un itinéraire sur mesure qui rendra chaque instant inoubliable !
          </p>
          <Image src={"/assets/home/landscape.png"} alt="carte du monde avec des objets à emporter dans la valise"
                 className="-lg rounded-lg md:w-1/2" width="700" height="450"/>
        </div>
      </Section>
      <Section title="Pourquoi me choisir ?">
        <ul className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <Strength title="Gain de temps" icon="speed-clock">
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
          <Strength title="Budget maîtrisé" icon="money-hand">
            Pour chaque voyage sur mesure, l'offre est claire et le budget du voyage est transparent.
          </Strength>
        </ul>
      </Section>
      <Section title={"Comment ça fonctionne ?"}><Timeline/></Section>
      <Section>
        <div className={"flex flex-col bg-light rounded-md py-4 px-20 items-center gap-y-4"}>
          <p>Prêt à vous lancer dans la création d’un voyage sur mesure ?</p>
          <p className={"font-bold"}>N’attendez plus, le premier rendez-vous est gratuit !</p>
          <Link href="/contact" className={"flex w-48 rounded-full bg-secondary py-2 text-center text-tertiary italic"}>
            Afficher mes disponibilités
          </Link>
        </div>
      </Section>
      <Section>
        <p> « Voyager c’est vivre. »</p>
        <p>– Hans Christian Andersen -</p>
      </Section>
    </main>
  )
    ;
}
