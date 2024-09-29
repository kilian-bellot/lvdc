import TimelineItem from "@app/_components/TimelineItem";

const timelineItems = [
  {
    title: "1er échange",
    text: "Nous prenons le temps de discuter de vos envies et détails de votre projet, ainsi que de votre budget et de vos dates de voyage.",
    icon: "chat-bubble",
    iconPosition: "top-left"
  },
  {
    title: "Proposition d'itinéraire",
    text: "Après avoir étudié votre projet, je vous enverrai une première ébauche de l'itinéraire pour que vous puissiez commencer à visualiser votre voyage.",
    icon: "check-list",
    iconPosition: "bottom-left"
  },
  {
    title: "Paiement",
    text: "Une fois le paiement fait pour le travail déjà effectué, je commencerai les recherches approfondies pour peaufiner votre projet.",
    icon: "invoice",
    iconPosition: "bottom-right"
  },
  {
    title: "Réservations",
    text: "Après avoir détaillé votre itinéraire, je vous présenterai les options pour les hébergements, les activités et les modes de transport (vols, location de voiture ...).  Vous garderez le contrôle et effectuerez les réservations via le mail que je vous enverrai.",
    icon: "planning-check",
    iconPosition: "top-right"
  },
  {
    title: "Carnet de voyage",
    text: "Une fois les réservations effectuées, je reprends la main et réalise votre guide personnalisé et votre carte interactive pour vous rendre votre voyage encore plus inoubliable.",
    icon: "plane-book",
    iconPosition: "bottom-right"
  }
]

export default function Timeline() {
  return (
    <div
      className={`flex md:justify-center md:items-center w-full max-w-[100%] py-20 pl-5 sm:pl-10 md:pl-0 md:py-0 md:h-[500px]`}>
      <div
        className={"grid grid-rows-5 gap-y-48 md:gap-y-0 md:grid-rows-none md:grid-cols-5 border-l-4 md:border-l-0 md:border-t-4 border-primary h-full md:h-0 md:w-full md:max-w-[1600px] md:px-8 lg:px-0"}>
        {timelineItems.map(({...props}, index) =>
          <TimelineItem key={index} {...props} index={index}/>
        )}
      </div>
    </div>
  )
}