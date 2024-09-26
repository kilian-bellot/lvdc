export default function Section({title = "", className = "", children}) {
  return (
    <section className="w-full text-justify mb-8 sm:mb-16 last:mb-0">
      {title && <h2 className="text-2xl font-bold my-4 text-center">{title}</h2>}
      {className
        ? <div className={className}>{children}</div>
        : <>{children}</>
      }
    </section>
  );
}
