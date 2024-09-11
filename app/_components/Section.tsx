export default function Section({title = "", children}) {
  return (
    <section className="flex flex-col items-center w-full text-center mb-16">
      {title && <h2 className="text-2xl font-bold my-4">{title}</h2>}
      <div className={"text-justify"}>
        {children}
      </div>
    </section>
  );
}
