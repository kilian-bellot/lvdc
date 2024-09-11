import Icon from "@app/_components/Icon";

export default function Strength({title, icon, children}) {
  return (
    <li className="relative flex flex-col items-center mb-4 md:mb-16">
      <Icon name={icon} size={48} className={"fill-primary"}/>
      <h2 className="text-lg my-4 text-secondary font-bold uppercase">{title}</h2>
      <p className="text-center">
        {children}
      </p>
    </li>
  );
}
