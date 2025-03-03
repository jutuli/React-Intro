export interface IWish {
  id: string;
  wish: string;
  priority: "low-priority" | "medium-priority" | "high-priority" | "none";
}
