
import "../../../styles/globals.css";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
        <div>
            <div className="mx-auto  max-w-4xl px-3">
                {children}
            </div>
        </div>
  )
}
