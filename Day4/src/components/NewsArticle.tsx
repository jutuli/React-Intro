import { Article } from "../interfaces/interfaces";

interface NewsArticleProps {
  article: Article;
}
const NewsArticle = ({ article }: NewsArticleProps) => {
  return (
    <li className="mx-20 flex flex-col gap-4 border-b-1 py-10">
      <h2 className="text-2xl font-bold">{article.title}</h2>
      <img
        className="h-60 w-100 object-cover"
        src={article.urlToImage ?? undefined}
        alt={article.title}
      />
      <p>{article.description}</p>
      <div className="text-sm">
        <p>Author: {article.author}</p>
        <p>Published: {article.publishedAt}</p>
        <p>Source: {article.source.name}</p>
      </div>
    </li>
  );
};

export default NewsArticle;
