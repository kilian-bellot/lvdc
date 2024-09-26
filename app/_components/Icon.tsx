import LogoSvg from "@/public/assets/logo.svg"
import MenuSvg from "@/public/assets/icons/menu.svg"
import CloseSvg from "@/public/assets/icons/close.svg"
import ArabesqueSvg from "@/public/assets/icons/about/arabesque.svg"
import CurvedArrowSvg from "@/public/assets/icons/about/curved-arrow.svg"
import NavArrowSvg from "@/public/assets/icons/book/nav-arrow.svg"
import PassportSvg from "@/public/assets/icons/book/passport.svg"
import OrSvg from "@/public/assets/icons/contact/or.svg"
import ChatBubbleSvg from "@/public/assets/icons/home/chat-bubble.svg"
import CheckListSvg from "@/public/assets/icons/home/check-list.svg"
import InvoiceSvg from "@/public/assets/icons/home/invoice.svg"
import MoneyHandSvg from "@/public/assets/icons/home/money-hand.svg"
import PlaneSvg from "@/public/assets/icons/home/plane.svg"
import PlaneBookSvg from "@/public/assets/icons/home/plane-book.svg"
import PlanningCheckSvg from "@/public/assets/icons/home/planning-check.svg"
import PuzzleSvg from "@/public/assets/icons/home/puzzle.svg"
import QuoteSvg from "@/public/assets/icons/home/quote.svg"
import SpeedClockSvg from "@/public/assets/icons/home/speed-clock.svg"
import TrustSvg from "@/public/assets/icons/home/trust.svg"
import FacebookSvg from "@/public/assets/icons/facebook.svg"
import InstagramSvg from "@/public/assets/icons/instagram.svg"

const icons = {
  "logo": LogoSvg,
  "menu": MenuSvg,
  "close": CloseSvg,
  "arabesque": ArabesqueSvg,
  "curved-arrow": CurvedArrowSvg,
  "nav-arrow": NavArrowSvg,
  "passport": PassportSvg,
  "or": OrSvg,
  "chat-bubble": ChatBubbleSvg,
  "check-list": CheckListSvg,
  "invoice": InvoiceSvg,
  "money-hand": MoneyHandSvg,
  "plane": PlaneSvg,
  "plane-book": PlaneBookSvg,
  "planning-check": PlanningCheckSvg,
  "puzzle": PuzzleSvg,
  "quote": QuoteSvg,
  "speed-clock": SpeedClockSvg,
  "trust": TrustSvg,
  "facebook": FacebookSvg,
  "instagram": InstagramSvg,
};

export default function Icon({name, size = 24, color = "primary", className = "", ...restProps}) {
  const SvgIcon = icons[name];
  return (
    <SvgIcon height={size} className={`svg-${color} ${className}`} {...restProps}/>
  )
}