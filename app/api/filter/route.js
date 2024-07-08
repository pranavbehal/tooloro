import { getSoftwareData } from "@/lib/getSoftwareData";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const tags = searchParams.get("tags")?.split(",") || [];
  const search = searchParams.get("search") || "";

  const data = await getSoftwareData({
    tags,
    search,
    sortBy: "created_at",
    sortOrder: "desc",
  });

  return Response.json(data);
}
