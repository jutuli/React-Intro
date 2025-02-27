import { useEffect, useState } from "react";
import { NewsResponse, Language } from "../interfaces/interfaces";

interface useNewsProps {
  searchTerm: string;
  language: Language;
}

const useNews = ({ searchTerm, language }: useNewsProps) => {
  const [news, setNews] = useState<null | NewsResponse>(null);
  const apiKey: string = import.meta.env.VITE_NEWS_API_KEY || "";

  // useEffect wird ausgeführt, wenn sich der Suchbegriff oder die Sprache ändert
  useEffect(() => {
    if (!searchTerm) return;
    fetch(
      `https://newsapi.org/v2/everything?q=${searchTerm}&language=${language.abbr}&apiKey=${apiKey}`,
    )
      .then((response) => {
        // Wenn die Antwort vom Server nicht erfolgreich ist, wird Fehlermeldung geworfen
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data: NewsResponse) => {
        // Daten in den State setzen
        setNews(data);
      })
      .catch((error) => console.log(error));
    // useEffect wird bei Änderung der Abhängigkeiten searchTerm, language, apiKey ausgeführt
  }, [searchTerm, language, apiKey]);

  return { news };
};

export default useNews;
