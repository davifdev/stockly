import { db } from "@/app/lib/prisma";

export const GET = async () => {
  const products = await db.product.findMany({});
  const randomNumber = Math.random();
  if (!products) {
    return Response.json({ error: "No products found" }, { status: 404 });
  }

  return Response.json({ products, randomNumber }, { status: 200 });
};

export const POST = async (request: Request) => {
  const body = await request.json();
  const { name, price, stock } = body;

  if (!name || !price || !stock) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  await db.product.create({
    data: {
      name,
      price,
      stock,
    },
  });

  return Response.json(
    { message: "Product created successfully" },
    { status: 201 },
  );
};
