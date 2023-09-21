
import "../../styles/globals.css"

export default function projectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="pt-12">
      {children}
    </div>
  )
}
