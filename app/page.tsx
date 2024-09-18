import Image from "next/image";
import Link from "next/link";
import {dancingScript, newsReader} from "@app/font";
import Section from "@/app/_components/Section";
import Strength from "@/app/_components/Strength";
import Timeline from "@app/_components/Timeline";
import TravelPlanner from "@app/_components/TravelPlanner";
import Icon from "@app/_components/Icon";
import landscapeImage from "@/public/assets/home/landscape.png";
import easterIsleImage from "@/public/assets/home/easter-isle.png";
import maldivesImage from "@/public/assets/home/maldives.png";

export default function Home() {
  return (
    <main className={"px-4"}>
      <Section>
        <div className={"relative p-4 sm:p-20 sm:pt-4 bg-gradient-to-b from-tertiary to-50% from-50% to-primary"}>
          <Image src={landscapeImage} alt="paysage alpin"
                 className="border-4 border-tertiary" width="1280" height="800"/>
          <div
            className={`absolute bottom-6 left-1/2 translate-x-[-50%] z-10 w-4/5 sm:w-1/2 px-2 sm:px-6 py-1 bg-tertiary opacity-90 text-center`}>
            <h2 className={`flex flex-col items-center text-lg sm:text-2xl`}>
              <span>Bienvenue chez</span>
              <span
                className={`text-lg sm:text-2xl text-secondary ${dancingScript.className}`}>Les voyages de Charlène</span>
            </h2>
            <p className={"text-sm sm:text-lg"}>
              Révélez la magie de votre voyage avec un itinéraire sur mesure qui rendra chaque instant inoubliable !
            </p>
          </div>
        </div>
      </Section>
      <Section title="Qu'est-ce qu'un travel planner?">
        <div className={"flex flex-col md:flex-row"}>
          <TravelPlanner imagePath={easterIsleImage} alt={"statues Moaï sur l'île de paques"}
                         reverse={true}>
            <p>
              Un travel planner est un expert en organisation de voyage qui vous aide à la préparation de vos prochaines
              vacances dans le monde entier.
            </p>
            <p>
              Je mets à votre disposition <span className={"text-secondary"}>mon expertise</span> pour vous proposer le
              séjour le plus complet possible. Grâce à
              ce
              service, le voyage sur-mesure n’est plus un luxe ; il vous permet de partir en toute sérénité sans quitter
              le
              confort de votre canapé.
            </p>
          </TravelPlanner>
          <span className={"border-b-2 border-secondary sm:border-r-2"}/>
          <TravelPlanner imagePath={maldivesImage} alt={"une ile des maldives"}>
            <p>
              En tant que travel planner, j’ai à cœur de trouver les meilleures prestations pour rendre votre voyage
              inoubliable. Je consacre de nombreuses heures à effectuer des recherches approfondies afin de vous offrir
              des recommandations parfaitement adaptées. Je m’assure d’élaborer un voyage en accord avec <span
              className={"text-secondary"}>vos valeurs</span>, <span
              className={"text-secondary"}>vos attentes</span> et <span className={"text-secondary"}>votre budget</span>.
            </p>
          </TravelPlanner>
        </div>
      </Section>
      <Section title="Pourquoi me choisir ?">
        <ul className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <Strength title="Gain de temps" icon="speed-clock">
            Epargnez-vous de longues heures de recherches ! Partagez moi votre projet de voyage et je m'occuperai de
            l'organisation pour vous faire gagner du temps.
          </Strength>
          <Strength title="En toute sérénité" icon="trust">
            Des vacances réussies sont des vacances bien préparées ! J'effectue toutes les recherches et vous n'avez
            plus qu'à valider !
          </Strength>
          <Strength title="Sur mesure" icon="puzzle">
            Je prends en compte vos préférences et vous suggère des options, tout en vous laissant un total contrôle
            sur votre voyage.
          </Strength>
          <Strength title="Budget maîtrisé" icon="money-hand">
            Pour chaque voyage sur mesure, l'offre est claire et le budget du voyage est transparent. Je ne touche
            aucune commission sur vos réservations, vous assurant objectivité et indépendance dans mes propositions.
          </Strength>
        </ul>
        <Icon name={"plane"} size={96}/>
      </Section>
      <Section title={"Comment ça fonctionne ?"}>
        <Timeline/>
      </Section>
      <Section>
        <div className={"relative flex flex-col bg-neutral rounded-md py-4 px-16 items-center gap-y-4"}>
          <p>Prêt à vous lancer dans la création d’un voyage sur mesure ?</p>
          <p className={"font-bold"}>N’attendez plus, le premier rendez-vous est gratuit !</p>
          <Link href="/contact" className={"flex w-48 rounded-full bg-secondary py-2 text-center text-tertiary italic"}>
            Afficher mes disponibilités
          </Link>
          <Icon name={"stamp"} size={72}
                className={"hidden sm:block sm:absolute sm:bottom-0 sm:right-0 sm:translate-x-8 sm:translate-y-8"}/>
        </div>
      </Section>
      <Section>
        <Icon name={"quote"} size={48} className={"w-full mb-12"}/>
        <span className={`flex flex-col text-2xl text-center gap-y-6 ${newsReader.className}`}>
          <p> « Voyager c’est vivre. »</p>
          <p>– Hans Christian Andersen –</p>
        </span>
      </Section>
    </main>
  )
    ;
}
