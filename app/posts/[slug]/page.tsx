import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "assets/posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <div className="pt-24 text-center">
        <h1 className="text-3xl text-white-300 underline ">{post.data.title}</h1>
        <p className="text-white-400 mt-2">{post.data.date}</p>
      </div>

      <article className="prose max-w-none dark:prose-invert prose-lg ">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
