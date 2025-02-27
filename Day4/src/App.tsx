import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import { Language } from "./interfaces/interfaces";
import { useState } from "react";
import useNews from "./hooks/useNews";
import NewsList from "./components/NewsList";

function App() {
  // aktuellen Suchbegriff + Sprache speichern
  const [searchParams, setSearchParams] = useState<{
    searchTerm: string;
    language: Language;
  }>({
    searchTerm: "",
    language: { abbr: "en" },
  });

  // useNews aufrufen mit Suchbegriff + Sprache & als news-Objekt speichern
  const { news } = useNews(searchParams);

  // updaten der SearchParams sobald ein neuer Suchbegriff eingegeben/neue Sprache ausgewählt wird
  const handleSearch = (searchTerm: string, language: Language) => {
    setSearchParams({ searchTerm, language });
  };

  return (
    <>
      <Header />
      {/* wür übergeben handleSearch an Searchbar */}
      <Searchbar onSearch={handleSearch} />
      <NewsList news={news} />
    </>
  );
}

export default App;
