import React from "react";

import { ArticleCard } from "@/atoms";

const Blog = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
      {data.map((props, index) => (
        <ArticleCard key={index} {...props} />
      ))}
    </div>
  );
};

export default Blog;
