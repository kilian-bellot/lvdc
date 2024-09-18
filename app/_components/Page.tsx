export default function Page({className = "", children}) {
  return (
    <main className={`px-2 sm:px-4 ${className}`}>
      {children}
    </main>
  )
};