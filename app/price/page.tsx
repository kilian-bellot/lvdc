import Image from "next/image";
import Page from "@app/_components/Page";
import Section from "@app/_components/Section";
import lionImage from "@/public/assets/price/lion.png"
import sigiriyaImage from "@/public/assets/price/sigiriya.png"
import Icon from "@app/_components/Icon";

export default function Price() {
  return (
    <Page>
      <Section title={"Quel est le tarif de mon accompagnement ?"} className={"flex flex-col sm:flex-row justify-center xl:gap-x-32"}>
        <div className={"flex items-center justify-center"}>
          <p className={"h-fit p-4 sm:px-8 bg-secondary text-tertiary text-center text-2xl"}>
            <span className={"font-bold"}>10$ CAD</span> par jour pour 10 jours de voyage
          </p>
        </div>
        <div className={"flex flex-col sm:w-2/3 xl:max-w-2xl p-4"}>
          <p>
            Ce tarif est par jour pour un séjour de 10 jours et 4 personnes maximum.
          </p>
          <Icon name={"divider"} color={"secondary"} className={"my-8"}/>
          <h3 className={"mb-4 text-xl underline font-bold"}>Ce qui est inclus dans ce tarif :</h3>
          <ul className={"list-disc max-w-fit pl-8"}>
            <li>
              Mes conseils et mon expertise sur la destination choisie
            </li>
            <li>
              Des échanges autant que nécessaires
            </li>
            <li>
              La création d'un itinéraire optimisé et sur-mesure
            </li>
            <li>
              La sélection des hébergements
            </li>
            <li>
              Des suggestions de vols, location de voiture, activités et bonnes adresses
            </li>
            <li>
              La liste des choses à ne pas oublier pour un voyage serein
            </li>
            <li>
              La création d’un carnet de voyage personnalisé en version numérique
            </li>
            <li>
              Une carte interactive totalement personnalisée
            </li>
          </ul>
        </div>
      </Section>
      <Section className={"flex items-center justify-center xl:gap-x-8"}>
        <div className={"flex flex-col w-full sm:w-2/3 xl:max-w-2xl"}>
          <h3 className={"mb-4 text-xl underline font-bold"}>Les suppléments :</h3>
          <ul className={"list-disc max-w-fit pl-8 mb-4"}>
            <li>
              Plus de 10 jours de voyage : 15$ CAD
            </li>
            <li>
              Plus de 4 personnes : 50$ CAD/personne supplémentaire
            </li>
          </ul>
          <p className={"italic"}>
            Cette liste est non-exhaustive. Vous avez une demande spéciale ? Contactez-moi !
          </p>
          <Icon name={"divider"} color={"secondary"} className={"my-8"}/>
          <p className={"mb-6"}>
            Mon tarif est uniquement basé sur <span className={"font-bold"}>mon temps de recherche</span> et <span
            className={"font-bold"}>la création de votre carnet de voyage</span>.
          </p>
          <p className={"mb-6"}>
            Je ne prends aucune commission sur vos réservations de transports, logements ou activités puisque c’est vous
            qui effectuez les réservations à l’aide de la pré-sélection que je vous transmettrai.
          </p>
          <p className={"italic font-bold text-secondary text-center"}>Je m’adapte à vos envies ! La seule limite est votre imagination
            !</p>
        </div>
        <div className={"hidden sm:flex flex-col w-fit"}>
          <Image src={lionImage} alt={"Des lionceaux qui jouent"} className={"w-full max-w-lg p-4"}/>
          <Image src={sigiriyaImage} alt={"Site archéologique de Sigiriya"} className={"w-full max-w-lg p-4"}/>
        </div>
      </Section>
    </Page>
  )
    ;
}
