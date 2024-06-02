"use client";

import { Button } from "@/components/ui/button";
import { useTagParams } from "@/hooks/tag-params";
import { getTagLabel, mainTags } from "@/lib/tag";
import Link from "next/link";
import Filter from "./filter";

export default function SideBar() {
  const { addTagToSearchParmas } = useTagParams();

  return (
    <div className="hidden md:block w-64 border-r space-y-6 p-4">
      <div className="flex flex-col">
        {mainTags.map((tagId) => (
          <Button variant="ghost" className="justify-start" key={tagId} asChild>
            <Link href={`/?tags=${addTagToSearchParmas(tagId)}`}>
              {getTagLabel(tagId)}
            </Link>
          </Button>
        ))}
      </div>

      <Filter />
    </div>
  );
}
