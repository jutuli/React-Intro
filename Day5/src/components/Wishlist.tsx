import AddWish from "./AddWish";
import SantaInbox from "./SantaInbox";
import { IWish } from "../interfaces/interfaces";
import { useState } from "react";

const Wishlist = () => {
  // State für die wishlist (Array von IWish)
  const [wishlist, setWishlist] = useState<IWish[]>([]);

  // Funktion, um einen Wunsch zur Liste hinzuzufügen
  const handleAddWish = (newWish: IWish) => {
    setWishlist((prev) => [...prev, newWish]);
  };

  // Funktion, um einen Wunsch von der Liste zu entfernen (abhängig vom Index)
  const handleDeleteWish = (index: number) => {
    setWishlist((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <AddWish onAddWish={handleAddWish} />
      <SantaInbox wishlist={wishlist} onDeleteWish={handleDeleteWish} />
    </>
  );
};

export default Wishlist;
