import MenuSvg from "@/public/assets/icons/menu.svg"
import CloseSvg from "@/public/assets/icons/close.svg"
import ClockSvg from "@/public/assets/icons/clock.svg"
import MoneySvg from "@/public/assets/icons/money.svg"
import PuzzleSvg from "@/public/assets/icons/puzzle.svg"
import TrustSvg from "@/public/assets/icons/trust.svg"

const icons = {
  "menu": MenuSvg,
  "close": CloseSvg,
  "clock": ClockSvg,
  "money": MoneySvg,
  "puzzle": PuzzleSvg,
  "trust": TrustSvg,
};

export default function Icon({name, size = 24, ...restProps}) {
  const SvgIcon = icons[name];
  return (
    <SvgIcon height={size} width={size} {...restProps}/>
  )
}