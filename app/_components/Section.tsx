export default function Section({title = "", children}) {
  return (
    <section className="flex flex-col items-center w-full text-center text-justify mb-16">
      {title && <h2 className="text-2xl font-bold my-4">{title}</h2>}
      {children}
    </section>
  );
}
