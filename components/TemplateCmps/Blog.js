import { ArticleCard } from "@/atoms";
import React from "react";

const Blog = () => {
  return (
    <div>
      <ArticleCard
        title="Article 1"
        text="Article of the year,Article of the year,Article of the year,Article of the year,Article of the year,Article of the year .."
        author="Author"
        time="6"
        img="/image.jpg"
      />
      <ArticleCard
        title="Article 1"
        text="Article of the year,Article of the year,Article of the year,Article of the year,Article of the year,Article of the year .."
        author="Author"
        time="6"
        img="/image.jpg"
      />{" "}
      <ArticleCard
        title="Article 1"
        text="Article of the year,Article of the year,Article of the year,Article of the year,Article of the year,Article of the year .."
        author="Author"
        time="6"
        img="/image.jpg"
      />
    </div>
  );
};

export default Blog;
