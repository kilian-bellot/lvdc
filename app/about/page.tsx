import Image from "next/image";
import Link from "next/link";
import Icon from "@app/_components/Icon";
import Section from "@app/_components/Section";
import Page from "@app/_components/Page";
import PolaroidBook from "@app/_components/PolaroidBook";
import mainImage from "@/public/assets/about/me-main.webp";
import usaImage from "@/public/assets/about/me-usa.webp";
import mauriceIsleImage from "@/public/assets/about/me-maurice-isle.webp";
import quebecImage from "@/public/assets/about/me-quebec.webp";
import sriLankaImage from "@/public/assets/about/me-sri-lanka.webp";
import worldMapImage from "@/public/assets/about/world-map.webp";
import directionsImage from "@/public/assets/about/directions.webp";

const photoBookImages = [
  {
    name: "maurice",
    src: mauriceIsleImage,
    alt: "photo de Charlène à l'île Maurice",
    location: "île Maurice",
    arrowPosition: "bottom",
    rotation: "-10"
  },
  {
    name: "quebec", src: quebecImage,
    alt: "photo de Charlène au Québec",
    location: "Québec",
    arrowPosition: "top",
    rotation: "10"
  },
  {
    name: "usa", src: usaImage,
    alt: "photo de Charlène aux États-Unis",
    location: "États-Unis",
    arrowPosition: "top",
    rotation: "-10"
  },
  {
    name: "sri-lanka",
    src: sriLankaImage,
    alt: "photo de Charlène au Sri Lanka",
    location: "Sri Lanka",
    arrowPosition: "bottom",
    rotation: "20"
  },
]
export default function About() {
  return (
    <Page>
      <Section className={"flex flex-col lg:flex-row p-12 bg-primary items-stretch text-center"}>
        <Image src={mainImage} alt="photo professionelle de Charlène" priority className={"lg:w-1/2 object-cover mb-4 lg:mb-0"}/>
        <div className={"flex flex-col lg:w-full items-center gap-y-6 justify-center text-center text-tertiary lg:px-8"}>
          <p>Je m'appelle <span className={"text-secondary"}>Charlène</span>,
            je suis française (plus précisément bourguignonne) et expatriée au
            Québec depuis 2019. Maman d’un petit garçon, j’ai à cœur de lui partager et lui transmettre ma passion du
            voyage.
          </p>
          <p>
            Après avoir finalisé mes études dans le tourisme en 2014, j’ai eu l’opportunité de découvrir diverses
            facettes du monde du voyage. J’ai travaillé au service après-vente d’une agence de voyages, en tant que
            conseillère en agence, chez un tour opérateur au service groupe, et chez deux réceptifs spécialistes du
            Canada et des Etats-Unis.
          </p>
          <p>
            Au fil des années, j’ai eu la chance de voyager au Sri Lanka, à l'Île Maurice, aux États-Unis, au Mexique,
            en Espagne, au Portugal et dans bien d'autres endroits aussi magnifiques les uns que les autres. Ces
            voyages
            ont nourri ma passion et affiné mon expertise.
          </p>
          <p>
            En 2021, la pandémie m'a contrainte à me réorienter et à quitter ce domaine que j'aimais tant.
          </p>
          <p>
            Aujourd'hui, je mets toute cette expérience à votre service pour créer des voyages sur mesure et vous
            offrir
            des moments inoubliables. Que vous souhaitiez explorer les paysages époustouflants du Canada ou découvrir
            d’autres destinations fascinantes, je suis là pour transformer vos rêves de voyage en réalité.
          </p>
          <Icon name={"arabesque"} size={36} color={"tertiary"} className={"mx-auto w-full"}/>
        </div>
      </Section>
      <Section>
        <PolaroidBook images={photoBookImages}/>
      </Section>
      <Section className={"flex flex-col items-center"}>
        <div className={"flex mb-8"}>
          <div className={"flex flex-col px-4 items-center justify-center"}>
            <p className={"p-4 text-lg sm:text-2xl text-center"}>
              Certains des voyages les plus mémorables commencent par une simple
              discussion.
            </p>
            <Image src={directionsImage} alt={"carte du monde"}
                   className={"w-2/3 sm:w-auto p-4"}/>
          </div>
          <div className={"hidden sm:flex items-center"}>
            <Image src={worldMapImage} alt={"image de panneaux de différentes destinations"}
                   className={"h-fit"}/>
          </div>
        </div>
        <Link href={"/contact"}
              className={"flex w-48 rounded-full bg-secondary py-2 justify-center text-center text-tertiary italic hover:bg-lighter-secondary"}>
          Planifier mon voyage
        </Link>
      </Section>
    </Page>
  )

}
