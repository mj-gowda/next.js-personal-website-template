
import "../../styles/globals.css"

export default function blogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="pt-10">
        {children}
    </div>
  )
}
