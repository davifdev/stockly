import { PlusIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { getProduct } from "../data-access/get-products";
import { DataTable } from "../components/ui/data-table";
import { columns } from "./components/table-columns";

const ProductsPage = async () => {
  const products = await getProduct();
  console.log(products);
  return (
    <div className="p-8 space-y-5 w-full">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-primary text-sm font-semibold">Produtos</p>
          <h2 className="font-semibold text-2xl">Gestão de produtos</h2>
        </div>
        <Button>
          <PlusIcon /> Novo produto
        </Button>
      </div>
      <div className="bg-white rounded-md">
        <DataTable
          columns={columns}
          data={JSON.parse(JSON.stringify(products))}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
