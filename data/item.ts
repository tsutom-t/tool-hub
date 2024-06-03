import { Item } from "@/app/types/item";

export const allItems: Item[] = [
  {
    id: "illust",
    href: "https://www.irasutoya.com/",
    title: "イラストや",
    tags: ["no-license-required", "illust"],
  },
  {
    id: "illust",
    href: "https://www.irasutoya.com/",
    title: "Pixabay",
    tags: ["no-license-required", "photo", "illust", "video"],
  },
  {
    id: "illust",
    href: "https://www.irasutoya.com/",
    title: "Unsplash",
    tags: ["no-license-required", "free", "photo", "public-domain"],
  },
] as const;
