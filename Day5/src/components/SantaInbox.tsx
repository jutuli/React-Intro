import { useState } from "react";
import { IWish } from "../interfaces/interfaces";

interface ISantaInboxProps {
  wishlist: IWish[];
  onDeleteWish: (index: number) => void; // Funktion zum Löschen eines Wishs
}

const SantaInbox = ({ wishlist, onDeleteWish }: ISantaInboxProps) => {
  // State zur Speicherung von "done" für einzelne Wishes (Key: Index, Value: true/false)
  const [doneWishes, setDoneWishes] = useState<{ [key: number]: boolean }>({});

  // Funktion um done zu togglen bei einzelnen Wishes (Index)
  const toggleDone = (index: number) => {
    setDoneWishes((prev) => ({
      ...prev, // vorherige Werte beibehalten
      [index]: !prev[index], // wenn konkreter Index, dann diesen auf das Gegenteil des aktuellen Werts (true/false) setzen
    }));
  };

  // Funktion um Hintergrundfarbe eines Wishs abhängig von der Priority zu setzen
  const getPriorityColor = (priority: string) => {
    if (priority === "low-priority") return "bg-green-300";
    if (priority === "medium-priority") return "bg-orange-300";
    return "bg-red-300";
  };

  return (
    <ul className="my-10 flex flex-col items-center justify-center gap-4">
      {wishlist.map((wish, index) => (
        <li key={index} className="flex w-110 items-center gap-4">
          <input
            type="checkbox"
            name="wish-checkbox"
            id="checkbox-wish"
            className="size-6"
            onChange={() => toggleDone(index)} //onChange wird toggleDone mit dem Index des jeweiligen Wishs aufgerufen
          />
          <div className="flex h-10 w-full items-center">
            <p
              className={`flex h-full w-full items-center rounded-md px-2 text-lg ${getPriorityColor(wish.priority)} ${doneWishes[index] && "text-gray-800 line-through"}`}
            >
              {wish.wish}
            </p>
            <button
              onClick={() => onDeleteWish(index)} // onClick wird Wish mit dem Index gelöscht (über Parent-Component)
              className="h-full cursor-pointer rounded-md border border-red-500 px-4 py-2 text-red-500 transition delay-100 ease-in-out hover:bg-red-500 hover:text-white"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SantaInbox;
