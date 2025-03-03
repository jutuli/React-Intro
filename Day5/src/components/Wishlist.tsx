import AddWish from "./AddWish";
import SantaInbox from "./SantaInbox";
import { IWish } from "../interfaces/interfaces";
import { useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<IWish[]>([]);

  const handleAddWish = (newWish: IWish) => {
    setWishlist((prev) => [...prev, newWish]);
  };

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
