import { IWish } from "../interfaces/interfaces";
import SantaWish from "./SantaWish";

interface ISantaInboxProps {
  wishlist: IWish[];
  onDeleteWish: (id: string) => void; // Funktion zum Löschen eines Wishs
}

const SantaInbox = ({ wishlist, onDeleteWish }: ISantaInboxProps) => {
  return (
    <ul className="my-10 flex flex-col items-center justify-center gap-4">
      {wishlist.map((wish) => (
        <SantaWish key={wish.id} wish={wish} onDeleteWish={onDeleteWish} />
      ))}
    </ul>
  );
};

export default SantaInbox;
