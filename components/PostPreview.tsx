import Link from "next/link";
import { PostMetadata } from "./PostMetadata";


const formatDate = (dateString:string) => {
  const date = new Date(dateString);
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${monthNames[monthIndex]} ${day}, ${year}`;
};


const PostPreview = (props: PostMetadata) => {
  const formattedDate = formatDate(props.date);

  return (
    <div
      className="transition ease-in-out delay-150 hover:scale-105 duration-500 border border-slate-300 p-2 rounded-md shadow-sm
    bg-white"
    >
      <p className="text-xs text-slate-600">{formattedDate}</p>

      <Link href={`/posts/${props.slug}`}>
        <h2 className=" text-violet-600 hover:underline mb-3 text-lg">{props.title}</h2>
      </Link>
      <p className="text-slate-700 text-sm">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;