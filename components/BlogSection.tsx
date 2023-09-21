import React from "react";
import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";
import { PostMetadata } from "./PostMetadata";

const groupBlogsByYear = (postMetadata:PostMetadata[]) => {
    const groupedBlogs:{[year:number]:PostMetadata[]} = {};
  
  // Sort the posts by publication date, assuming each post has a 'date' property.
    const sortedPosts = postMetadata.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());


    sortedPosts.forEach((post:PostMetadata) => {
    const year = new Date(post.date).getFullYear();
    
    if (!groupedBlogs[year]) {
      groupedBlogs[year] = [];
    }
    
    groupedBlogs[year].push(post);
  });
  // Sort each year's posts in descending order by publication date
  for (const year in groupedBlogs) {
    groupedBlogs[year] = groupedBlogs[year].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }
  
  return groupedBlogs;
};

const BlogSection = () => {
  const postMetadata = getPostMetadata();
  const groupedBlogs = groupBlogsByYear(postMetadata);

  // Sort the years in descending order
  const sortedYears = Object.keys(groupedBlogs).sort((a, b) => parseInt(b, 10) - parseInt(a, 10));

  // Iterate over the sorted years and render the grouped blogs
  const blogSections = sortedYears.map((year) => (
    <div key={year}>
      <h2 className="text-2xl font-bold">{year}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {groupedBlogs[parseInt(year, 10)].map((post) => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </div>
    </div>
  ));

  return (
    <section id="blogs" className="md:pb-12">
      <h1 className="my-10 text-center font-bold text-4xl">
        Blog
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>
      <div className="md:pt-8">
        <div className="flex flex-col space-y-16">{blogSections}</div>
      </div>
    </section>
  );
};

export default BlogSection;
