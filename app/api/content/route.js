const posts = [
  {
    title: "Example App",
    slug: "example",
    description:
      "An example app to show how this page will look when real apps are added",
  },
  {
    title: "Lorem Ipsum",
    slug: "lorem-ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
];

import { NextResponse } from "next/server";
export async function GET() {
  console.log(posts);
  return NextResponse.json(posts);
}
