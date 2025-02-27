import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import { Language } from "./interfaces/interfaces";
import { useState } from "react";
import useNews from "./hooks/useNews";
import NewsList from "./components/NewsList";

function App() {
  const [searchParams, setSearchParams] = useState<{
    searchTerm: string;
    language: Language;
  }>({
    searchTerm: "",
    language: { abbr: "en" },
  });

  const { news } = useNews(searchParams);

  const handleSearch = (searchTerm: string, language: Language) => {
    setSearchParams({ searchTerm, language });
  };

  return (
    <>
      <Header />
      <Searchbar onSearch={handleSearch} />
      <NewsList news={news} />
    </>
  );
}

export default App;
