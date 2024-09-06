export default function Section({title, children}) {
  return (
    <section className="mb-16">
      <h1 className="text-2xl font-bold my-4">{title}</h1>
      {children}
    </section>
  );
}
