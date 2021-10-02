import React from "react";

import { ArticleCard } from "@/atoms";

const Blog = ({ data }) => {
  return (
    <div>
      {data.map((props, index) => (
        <ArticleCard key={index} {...props} />
      ))}
    </div>
  );
};

export default Blog;
