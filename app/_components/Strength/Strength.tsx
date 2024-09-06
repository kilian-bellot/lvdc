import "./Section.scss";

export default function Section({title, className, children}) {
  return (
    <section className="mb-16">
      <h1 className="text-2xl my-4">{title}</h1>
      {children}
    </section>
  );
}
