import { getCachedProducts } from "../data-access/get-products";
import { DataTable } from "../components/ui/data-table";
import { columns } from "./components/table-columns";
import CreateProductButton from "./components/create-product-button";
import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderSubtitle,
  HeaderTitle,
} from "../components/header";

const ProductsPage = async () => {
  const products = await getCachedProducts();

  return (
    <div className="p-8 space-y-5 w-full">
      <div className="flex justify-between items-center">
        <HeaderContainer>
          <HeaderLeft>
            <HeaderSubtitle>Produtos</HeaderSubtitle>
            <HeaderTitle>Gestão de produtos</HeaderTitle>
          </HeaderLeft>
          <HeaderRight>
            <CreateProductButton />
          </HeaderRight>
        </HeaderContainer>
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
