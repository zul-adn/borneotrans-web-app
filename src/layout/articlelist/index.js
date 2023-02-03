import React from "react";
import { CardArticles } from "../../components";

export default function Index(props) {
  const { articles } = props;

  return (
    <div className={`max-w-5xl mx-auto mt-10`}>
      <div
        className={`grid m-auto grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-2`}>
        {articles.data.map((article, index) => {
          return (
            <CardArticles
              key={`article-${index}`}
              title={article.title}
              article={article.article}
              image={article.img}
              createAt={article.createdAt}
            />
          );
        })}
      </div>
    </div>
  );
}
