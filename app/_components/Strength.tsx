import Icon from "@app/_components/Icon";

export default function Strength({title, icon, children}) {
  return (
    <li className="relative flex flex-col items-center mb-4 lg:mb-0">
      <Icon name={icon} size={48}/>
      <h2 className="text-lg my-4 text-secondary font-bold uppercase">{title}</h2>
      <p className="text-center">
        {children}
      </p>
    </li>
  );
}
