import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderSubtitle,
  HeaderTitle,
} from "../components/header";
import { DataTable } from "../components/ui/data-table";
import { getSales } from "../data-access/get-sale";
import CreateProductButton from "../products/components/create-product-button";
import { columns } from "./components/table-columns";

const SalesPage = async () => {
  const sales = await getSales();
  return (
    <div className="p-8 space-y-5 w-full">
      <HeaderContainer>
        <HeaderLeft>
          <HeaderSubtitle>Vendas</HeaderSubtitle>
          <HeaderTitle>Gestão de vendas</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <CreateProductButton />
        </HeaderRight>
      </HeaderContainer>
      <div className="bg-white rounded-md">
        <DataTable columns={columns} data={JSON.parse(JSON.stringify(sales))} />
      </div>
    </div>
  );
};

export default SalesPage;
