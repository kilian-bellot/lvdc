import Page from "@app/_components/Page";
import Section from "@app/_components/Section";
import MediaTextColumnLayout from "@app/_components/MediaTextColumnLayout";
import elephantImage from "@/public/assets/book/elephant.png";
import athenImage from "@/public/assets/book/athen.png";
import Divider from "@app/_components/Divider";
import TripBook from "@app/_components/TripBook";

export default function Book() {
  return (
    <Page>
      <Section title={"Votre carnet de voyage"} className={"flex flex-col md:flex-row"}>
        <MediaTextColumnLayout image={elephantImage} alt={"une famille d'éléphants"}>
          <p className={"mb-8"}>
            Pour chaque itinéraire que nous concevons ensemble, vous recevrez un carnet de voyage 100% personnalisé
          </p>
          <p className={"mb-8"}>
            Je m'assure que mes carnets soient à la fois riches en informations et agréables à lire. Vous recevrez une version numérique, facile à sauvegarder et à consulter.
          </p>
          <p className={"mb-8"}>
            Ce guide vous facilitera l'organisation de votre voyage et vous aidera à en maximiser les expériences.
          </p>
        </MediaTextColumnLayout>
        <Divider/>
        <MediaTextColumnLayout image={athenImage} alt={"une ile des maldives"} reverse>
          <p className={"mb-8 font-bold"}>
            Quand allez-vous recevoir votre carnet de voyage ?
          </p>
          <p>
            Une fois votre voyage validé, je réalise votre carnet de voyage en y incluant les réservations que vous avez effectuées directement suite à mes propositions. Je m’engage à vous le transmettre au moins 15 jours avant votre départ en voyage.
          </p>
        </MediaTextColumnLayout>
      </Section>
      {/*<Section>*/}
      {/*  <p className={"font-bold"}>*/}
      {/*    Que contient votre carnet de voyage personnalisé ?*/}
      {/*  </p>*/}
      {/*  <p>*/}
      {/*    Selon votre voyage, sa durée et le(s) pays visité(s), le contenu peut légèrement varier.*/}
      {/*  </p>*/}
      {/*  <p>*/}
      {/*    Vous y trouverez les informations suivantes :*/}
      {/*  </p>*/}
      {/*  <ul>*/}
      {/*    <li>Les étapes clés de votre voyage ;</li>*/}
      {/*    <li>Vos hébergements ;</li>*/}
      {/*    <li>Vos transports ;</li>*/}
      {/*    <li>Vos réservations d'activités et excursions ;</li>*/}
      {/*    <li>Des bonnes adresses ;</li>*/}
      {/*    <li>Des conseils pratiques sur votre destination ;</li>*/}
      {/*    <li>Une liste de choses à faire pour préparer votre bagage ;</li>*/}
      {/*    <li>Une carte interactive totalement personnalisée.</li>*/}
      {/*  </ul>*/}
      {/*</Section>*/}
      {/*<Section title={"Exemple d'un cart de voyage pour un séjour à Lisbonne"}>*/}
      {/*  <TripBook/>*/}
      {/*</Section>*/}
    </Page>
  );
}
