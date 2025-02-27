import { Article } from "../interfaces/interfaces";

interface NewsArticleProps {
  article: Article;
}
const NewsArticle = ({ article }: NewsArticleProps) => {
  return (
    <li>
      <h2>{article.title}</h2>
      <img src={article.urlToImage ?? undefined} alt={article.title} />
      <p>{article.description}</p>
      <div>
        <p>Author: {article.author}</p>
        <p>Published: {article.publishedAt}</p>
        <p>Source: {article.source.name}</p>
      </div>
    </li>
  );
};

export default NewsArticle;
