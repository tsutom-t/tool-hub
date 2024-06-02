import { Item } from "@/app/types/item";

export const allItems: Item[] = [
  {
    imageURL:
      "https://service-cdn.coconala.com/crop/460/380/service_images/original/45b37aa5-3622787.png",
    href: "https://www.irasutoya.com/",
    title: "イラストや",
    tags: ["no-license-required", "illust"],
  },
  {
    imageURL:
      "https://service-cdn.coconala.com/crop/460/380/service_images/original/45b37aa5-3622787.png",
    href: "https://www.irasutoya.com/",
    title: "Pixabay",
    tags: ["no-license-required", "photo", "illust", "video"],
  },
  {
    imageURL:
      "https://service-cdn.coconala.com/crop/460/380/service_images/original/45b37aa5-3622787.png",
    href: "https://www.irasutoya.com/",
    title: "Unsplash",
    tags: ["no-license-required", "free", "photo", "public-domain"],
  },
] as const;
