import { Tag } from "@/app/types/tag";

export const photos: {
  imageURL: string;
  href: string;
  title: string;
  tags: Tag[];
}[] = [
  {
    imageURL:
      "https://service-cdn.coconala.com/crop/460/380/service_images/original/45b37aa5-3622787.png",
    href: "https://www.irasutoya.com/",
    title: "Pixabay",
    tags: [{ id: "xxx", label: "ライセンス表記不要" }],
  },
  {
    imageURL:
      "https://service-cdn.coconala.com/crop/460/380/service_images/original/45b37aa5-3622787.png",
    href: "https://www.irasutoya.com/",
    title: "Unsplash",
    tags: [{ id: "xxx", label: "ライセンス表記不要" }],
  },
  // {
  //   imageURL:
  //     "",
  //   href: "",
  //   title: "",
  //   tags: [{ id: "", label: "" }],
  // },
];