import { useState } from "react";
import { IWish } from "../interfaces/interfaces";

interface IAddWishProps {
  onAddWish: (wish: IWish) => void;
}

const AddWish = ({ onAddWish }: IAddWishProps) => {
  const [wish, setWish] = useState<string>("");
  const [priority, setPriority] = useState<IWish["priority"]>("none");

  const handleSubmit = () => {
    if (!wish || priority === "none") return;
    const newWish: IWish = { wish, priority };
    onAddWish(newWish);
    setWish("");
    setPriority("none");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex flex-col items-center justify-center gap-6"
    >
      <h2 className="text-2xl font-bold text-gray-500">
        Add a Wish to Your Wishlist
      </h2>
      <div className="flex items-center justify-center gap-4">
        <input
          type="text"
          name="wish"
          id="wish-input"
          placeholder="Enter a Wish..."
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          className="h-10 w-60 rounded-md border border-gray-200 p-2 text-base"
        />
        <select
          name="priority"
          id="priority-select"
          value={priority}
          onChange={(e) => setPriority(e.target.value as IWish["priority"])}
          className="h-10 w-60 rounded-md border border-gray-200 p-2 text-base"
        >
          <option value="none" disabled hidden>
            Select a Priority
          </option>
          <option value="low-priority">Low Priority</option>
          <option value="medium-priority">Medium Priority</option>
          <option value="high-priority">High Priority</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-124 rounded-md bg-green-600 py-2 font-bold text-white"
      >
        Add To Wishlist
      </button>
    </form>
  );
};

export default AddWish;
