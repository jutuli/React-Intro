import { useState } from "react";
import { Language } from "../interfaces/interfaces";

const languages: { abbr: Language["abbr"]; name: string }[] = [
  { abbr: "en", name: "Englisch" },
  { abbr: "de", name: "Deutsch" },
  { abbr: "es", name: "Spanisch" },
  { abbr: "fr", name: "Französisch" },
  { abbr: "it", name: "Italienisch" },
  { abbr: "pt", name: "Portugiesisch" },
  { abbr: "ar", name: "Arabisch" },
  { abbr: "he", name: "Hebräisch" },
  { abbr: "nl", name: "Niederländisch" },
  { abbr: "no", name: "Norwegisch" },
  { abbr: "ru", name: "Russisch" },
  { abbr: "sv", name: "Schwedisch" },
  { abbr: "zh", name: "Chinesisch" },
];

interface SearchbarProps {
  onSearch: (searchTerm: string, language: Language) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSearch }) => {
  const [selectedLanguage, setSelectedLanguage] =
    useState<Language["abbr"]>("en");
  const [searchTerm, setSearchTerm] = useState("");

  // Submit-Handler verhindert Page Reload und bündelt beide States in einem einzelnen API-Aufruf über die onSearch-Funktion
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // onSearch ruft über App.tsx die handleSearch Funktion auf
    onSearch(searchTerm, { abbr: selectedLanguage });
  };
  return (
    <form onSubmit={handleSubmit} className="mx-20 flex w-1/2 gap-4">
      <input
        className="w-full rounded-lg border border-gray-400 p-2"
        type="text"
        placeholder="Type to search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        className="w-2/3 rounded-lg border border-gray-400 p-2"
        name="language-select"
        id="language"
        value={selectedLanguage}
        onChange={(e) =>
          // Type Assertion nötig, da select-Value immer string zurückgibt
          setSelectedLanguage(e.target.value as Language["abbr"])
        }
      >
        {/* Generierung der Sprachoptionen */}
        {languages.map((language) => (
          <option key={language.abbr} value={language.abbr}>
            {language.name}
          </option>
        ))}
      </select>
      <button
        className="w-1/3 cursor-pointer rounded-md bg-gray-800 font-bold text-white"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Searchbar;
