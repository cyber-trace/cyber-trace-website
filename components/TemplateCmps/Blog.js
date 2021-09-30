import { ArticleCard } from "@/atoms";
import React from "react";
import info from "constants/Blog-info.json";

const Blog = () => {
  return (
    <div>
      {info.map((props, index) => (
        <ArticleCard key={index} {...props} />
      ))}
    </div>
  );
};

export default Blog;
