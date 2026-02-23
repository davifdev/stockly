import { db } from "@/app/lib/prisma";
import { NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } },
) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");
  console.log(query);
  const { id } = params;
  const product = await db.product.findUnique({
    where: { id },
  });

  if (!product) {
    return Response.json({ error: "Product not found" }, { status: 404 });
  }

  return Response.json({ product }, { status: 200 });
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const { id } = params;
  await db.product.delete({
    where: { id },
  });
  return Response.json(
    { message: "Product deleted successfully" },
    { status: 200 },
  );
};
