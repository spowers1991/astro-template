import type { Post } from "@/lib/sanity/types/Post";
import type { PortableTextBlock } from "@portabletext/types";

export interface Movie extends Omit<Post, "_type" | "publishedAt" | "body"> {
  _type: "movie";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  externalId: number;
  name: string;
  overview: PortableTextBlock[];
  popularity: number;

  poster: {
    _type: "image";
    asset: {
      _ref?: string;
      _type: "reference";
      _id?: string;
      url?: string;
    };
  };

  releaseDate: string;

  castMembers: Array<{
    _key: string;
    characterName?: string;
    person: {
      name: string;
      image?: {
        asset?: {
          url?: string;
        };
      };
    };
  }>;

  crewMembers: Array<{
    _key: string;
    job?: string;
    person: {
      name: string;
      image?: {
        asset?: {
          url?: string;
        };
      };
    };
  }>;
}
