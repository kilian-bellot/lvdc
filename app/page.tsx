import Image from "next/image";
import Section from "@/app/_components/Section";
import Strength from "@/app/_components/Strength";
import Link from "next/link";
import Timeline from "@app/_components/Timeline";

export default function Home() {
  return (
    <main className={"px-4"}>
      <Section>
        <div className={"relative p-4 sm:p-20 bg-gradient-to-b from-tertiary to-50% from-50% to-primary"}>
          <Image src={"/assets/home/landscape.png"} alt="carte du monde avec des objets à emporter dans la valise"
                 className="border-4 border-tertiary" width="1280" height="800"/>
          <div
            className={"absolute bottom-10 sm:bottom-10 left-1/2 translate-x-[-50%] z-10 w-4/5 sm:w-1/2 px-6 py-2 bg-tertiary opacity-90 text-center"}>
            <h2 className={"flex flex-col items-center"}>
              <span className={"text-sm sm:text-2xl"}>Bienvenue chez</span>
              <span className={"text-sm sm:text-2xl text-secondary"}>Les voyages de Charlène</span>
            </h2>
            <p className={"text-xs sm:text-lg"}>
              Révélez la magie de votre voyage avec un itinéraire sur mesure qui rendra chaque instant inoubliable !
            </p>
          </div>
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
        <div className={"flex flex-col bg-light rounded-md py-4 px-16 items-center gap-y-4"}>
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
