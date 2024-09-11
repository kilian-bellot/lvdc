import Image from "next/image";
import Section from "@app/_components/Section";

const values = [
  {
    title: "La découverte",
    text: "Le voyage est une quête de découvertes, un passage du connu à l'inconnu. Chaque étape révèle des paysages nouveaux, des cultures fascinantes et des rencontres inattendues. En explorant le monde, on se découvre soi-même à travers les yeux d’autrui. Ainsi, chaque voyage enrichit notre vision et nous rappelle la beauté de l’inexploré."
  },
  {
    title: "Le respect",
    text: "Le voyage est une quête de découvertes, un passage du connu à l'inconnu. Chaque étape révèle des paysages nouveaux, des cultures fascinantes et des rencontres inattendues. En explorant le monde, on se découvre soi-même à travers les yeux d’autrui. Ainsi, chaque voyage enrichit notre vision et nous rappelle la beauté de l’inexploré."
  },
  {
    title: "L'aventure",
    text: "L'aventure est un quête de l'inconnu, un voyage qui nous fait grandir à chaque nouvelle découverte. C'est un chemin de transformation où chaque surprise devient une occasion d'émerveillement et d'apprentissage."
  },

]

export default function About() {
  return (
    <main>
      <div className={"flex flex-col p-12 bg-primary mb-8 lg:flex-row"}>
        <div className="flex items-center">
          <Image src={"/assets/me-main.jpg"} alt="paysage" className="max-h-[30vh] mb-8 lg:m-0"
                 width="950" height="550" style={{objectFit: "contain"}}/>
        </div>
        <div className={"flex flex-col text-tertiary md:px-8"}>
          <p className={"mb-6"}>Je m'appelle Charlène et je suis expatriée au Québec depuis 2019.</p>
          <p className={"mb-6"}>Après avoir finalisé mes études dans le tourisme, j’ai eu l’opportunité de découvrir
            diverses facettes du
            monde
            du voyage. J’ai travaillé dans le service réclamation, en agence de voyage, comme tour opérateur pour des
            groupes, et pour deux réceptifs spécialisés sur le Canada et les USA.
          </p>
          <p className={"mb-6"}>Au fil des années, j’ai eu la chance de voyager au Sri Lanka, à l'île Maurice, aux
            États-Unis, au Mexique, en
            Espagne, au Portugal et dans bien d'autres endroits aussi magnifiques les uns que les autres. Ces voyages
            ont
            nourri ma passion et affiné mon expertise.
          </p>
          <p className={"mb-6"}>En 2021, la pandémie m'a contrainte à me réorienter et à quitter ce domaine que j'aimais
            tant.</p>
          <p className={"mb-6"}>Aujourd'hui, je mets toute cette expérience à votre service pour créer des voyages sur
            mesure et vous offrir
            des
            moments inoubliables. Que vous souhaitiez explorer les paysages époustouflants du Canada ou découvrir
            d’autres
            destinations fascinantes, je suis là pour transformer vos rêves de voyage en réalité.
          </p>
        </div>
      </div>
      <Section title={"Quelles sont mes valeurs ?"}>
        {values.map(({title, text}) => {
          return (
            <div key={title} className={"px-12 md:px-20"}>
              <h3 className={"font-bold underline"}>{title}</h3>
              <p className={"mb-8"}>{text}</p>
            </div>
          )
        })}
      </Section>
    </main>
  )

}
