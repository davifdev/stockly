import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderSubtitle,
  HeaderTitle,
} from "../components/header";
import { ComboboxOption } from "../components/ui/combobox";
import { DataTable } from "../components/ui/data-table";
import { getProduct } from "../data-access/get-products";
import { getSales } from "../data-access/get-sale";
import CreateSaleButton from "./components/create-sale-button";
import { columns } from "./components/table-columns";

const SalesPage = async () => {
  const sales = await getSales();
  const products = await getProduct();
  const productOptions: ComboboxOption[] = products.map((product) => {
    return { value: product.id, label: product.name };
  });
  const tableData = sales.map((sale) => ({
    ...sale,
    products,
    productOptions,
  }));

  return (
    <div className="p-8 space-y-5 w-full">
      <HeaderContainer>
        <HeaderLeft>
          <HeaderSubtitle>Vendas</HeaderSubtitle>
          <HeaderTitle>Gestão de vendas</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <CreateSaleButton
            productOptions={productOptions}
            products={JSON.parse(JSON.stringify(products))}
          />
        </HeaderRight>
      </HeaderContainer>
      <div className="bg-white rounded-md">
        <DataTable
          columns={columns}
          data={JSON.parse(JSON.stringify(tableData))}
        />
      </div>
    </div>
  );
};

export default SalesPage;
