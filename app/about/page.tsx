import Image from "next/image";
import Icon from "@app/_components/Icon";
import meMainImage from "@/public/assets/about/me-main.jpg";

export default function About() {
  return (
    <main>
      <div className={"flex flex-col lg:flex-row p-12 bg-primary items-stretch text-center"}>
        <Image src={meMainImage} alt="paysage" width={1700} height={1100}
               className={"lg:w-1/2 object-cover mb-4 lg:mb-0"}/>
        <div className={"flex flex-col items-center text-center text-tertiary md:px-8"}>
          <p className={"mb-6"}>Je m'appelle <span className={"text-secondary"}>Charlène</span>, je suis française (plus
            précisément de Bourgogne) et expatriée au Québec depuis 2019. Maman d’un petit garçon, j’ai à cœur de lui
            partager et lui transmettre ma passion du voyage.
          </p>
          <p className={"mb-6"}>
            Après avoir finalisé mes études dans le tourisme en 2014, j’ai eu l’opportunité de découvrir diverses
            facettes du monde du voyage. J’ai travaillé au service après-vente d’une agence de voyages, en tant que
            conseillère en agence, chez un tour opérateur au service groupe, et chez deux réceptifs spécialistes du
            Canada et des Etats-Unis.
          </p>
          <p className={"mb-6"}>
            Au fil des années, j’ai eu la chance de voyager au Sri Lanka, à l'Île Maurice, aux États-Unis, au Mexique,
            en Espagne, au Portugal et dans bien d'autres endroits aussi magnifiques les uns que les autres. Ces voyages
            ont nourri ma passion et affiné mon expertise.
          </p>
          <p className={"mb-6"}>
            En 2021, la pandémie m'a contrainte à me réorienter et à quitter ce domaine que j'aimais tant.
          </p>
          <p className={"mb-6"}>
            Aujourd'hui, je mets toute cette expérience à votre service pour créer des voyages sur mesure et vous offrir
            des moments inoubliables. Que vous souhaitiez explorer les paysages époustouflants du Canada ou découvrir
            d’autres destinations fascinantes, je suis là pour transformer vos rêves de voyage en réalité.
          </p>
          <Icon name={"arabesque"} size={36} color={"tertiary"} className={"mx-auto w-full"}/>
        </div>
      </div>
    </main>
  )

}
