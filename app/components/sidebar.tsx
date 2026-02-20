import { LayoutGridIcon, PackageIcon, ShoppingBasketIcon } from "lucide-react";
import SidebarButton from "./sidebar-button";

const Sidebar = () => {
  return (
    <div className="bg-white w-full max-w-72 h-screen">
      <div className="px-8 py-6">
        <h1 className="text-primary font-bold text-2xl uppercase">Stockly</h1>
      </div>
      <div className="space-y-2 px-4 flex flex-col">
        <SidebarButton href="/">
          <LayoutGridIcon />
          Dashboard
        </SidebarButton>
        <SidebarButton href="/products">
          <PackageIcon />
          Produtos
        </SidebarButton>
        <SidebarButton href="/sales">
          <ShoppingBasketIcon />
          Vendas
        </SidebarButton>
      </div>
    </div>
  );
};

export default Sidebar;
