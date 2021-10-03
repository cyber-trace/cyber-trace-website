import React from "react";

import { ArticleCard } from "@/atoms";

const Blog = ({ data }) => {
  return (
    <div className="flex flex-col justify-start items-center">
      {data.map((props, index) => (
        <ArticleCard key={index} {...props} />
      ))}
    </div>
  );
};

export default Blog;
