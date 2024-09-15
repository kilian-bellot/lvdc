export default function Section({title = "", children}) {
  return (
    <section className="flex flex-col items-center w-full text-justify mb-16">
      {title && <h2 className="text-2xl font-bold my-4 text-center">{title}</h2>}
      {children}
    </section>
  );
}
