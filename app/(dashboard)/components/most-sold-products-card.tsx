import { getMostSoldProducts } from "@/app/data-access/dashboard/get-most-sold-products";
import MostSoldProductItem from "./most-sold-products-item";

const MostSoldProductsCard = async () => {
  const mostSoldProducts = await getMostSoldProducts();
  return (
    <div className="flex flex-col h-full bg-white overflow-hidden p-6 rounded-xl">
      <p className="text-lg font-semibold text-slate-900 mb-6">
        Produtos mais vendidos
      </p>
      <div className="overflow-y-auto space-y-6">
        {mostSoldProducts.map((product) => (
          <MostSoldProductItem product={product} key={product.productId} />
        ))}
      </div>
    </div>
  );
};

export default MostSoldProductsCard;
