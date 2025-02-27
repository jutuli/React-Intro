import { NewsResponse } from "../interfaces/interfaces";
import NewsArticle from "./NewsArticle";

interface NewsListProps {
  news: NewsResponse | null;
}

const NewsList = ({ news }: NewsListProps) => {
  if (!news) return null;
  return (
    <ul>
      {news.articles.map((article) => (
        <NewsArticle key={article.url} article={article} />
      ))}
      ;
    </ul>
  );
};

export default NewsList;
