import { useState } from "react";
import { IWish } from "../interfaces/interfaces";

interface IWishProps {
  wish: IWish;
  onDeleteWish: (id: string) => void; // Funktion zum Löschen eines Wishs abhängig von der Wish-Id
}

const SantaWish = ({ wish, onDeleteWish }: IWishProps) => {
  // State zur Speicherung von "done" für den Wish
  const [done, setDone] = useState(false);

  // Funktion um Hintergrundfarbe eines Wishs abhängig von der Priority zu setzen
  const getPriorityColor = (priority: string) => {
    if (priority === "low-priority") return "bg-green-300";
    if (priority === "medium-priority") return "bg-orange-300";
    return "bg-red-300";
  };

  return (
    <li key={wish.id} className="flex w-110 items-center gap-4">
      <input
        type="checkbox"
        name="wish-checkbox"
        id={wish.id}
        className="size-6"
        checked={done} // Ist true, wenn der Wunsch als erledigt markiert wurde
        onChange={() => setDone(!done)} // State hier togglen
      />
      <div className="flex h-10 w-full items-center">
        <p
          className={`flex h-full w-full items-center rounded-md px-2 text-lg ${getPriorityColor(
            wish.priority,
          )} ${done ? "text-gray-800 line-through" : ""}`}
        >
          {wish.wish}
        </p>
        <button
          onClick={() => onDeleteWish(wish.id)} // Löscht den Wunsch mit der jeweiligen Id
          className="h-full cursor-pointer rounded-md border border-red-500 px-4 py-2 text-red-500 transition delay-100 ease-in-out hover:bg-red-500 hover:text-white"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default SantaWish;
