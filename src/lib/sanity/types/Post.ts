import type { PortableTextBlock } from "@portabletext/types";

export interface Post {
	_id: string;
	_type: "post";
	title: string;
	name: string;
	slug: { current: string };
	publishedAt: string;
	overview: PortableTextBlock[];
	poster: {
        _type: "image";
        asset: {
        _ref?: string;
        _type: "reference";
        _id?: string;
        url?: string;
        };
    };
	body: PortableTextBlock[];
}
