import { Item } from "@/app/types/item";

export const allItems: Item[] = [
  {
    id: "irasutoya",
    href: "https://www.irasutoya.com/",
    title: "イラストや",
    tags: ["no-license-required", "illust", "free"],
  },
  {
    id: "pixabay",
    href: "https://pixabay.com/ja/",
    title: "Pixabay",
    tags: ["no-license-required", "photo", "illust", "video", "free"],
  },
  {
    id: "vectorshelf",
    href: "https://vectorshelf.com/",
    title: "ベクターシェルフ",
    tags: ["free", "illust"],
  },
] as const;
