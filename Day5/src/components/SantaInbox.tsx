import { useState } from "react";
import { IWish } from "../interfaces/interfaces";

interface ISantaInboxProps {
  wishlist: IWish[];
  onDeleteWish: (index: number) => void;
}

const SantaInbox = ({ wishlist, onDeleteWish }: ISantaInboxProps) => {
  const [doneWishes, setDoneWishes] = useState<{ [key: number]: boolean }>({});

  const toggleDone = (index: number) => {
    setDoneWishes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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
            onChange={() => toggleDone(index)}
          />
          <div className="flex h-10 w-full items-center">
            <p
              className={`flex h-full w-full items-center rounded-md px-2 text-lg ${getPriorityColor(wish.priority)} ${doneWishes[index] && "text-gray-800 line-through"}`}
            >
              {wish.wish}
            </p>
            <button
              onClick={() => onDeleteWish(index)}
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
