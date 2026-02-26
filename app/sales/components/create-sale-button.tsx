"use client";

import { Button } from "@/app/components/ui/button";
import { Sheet, SheetTrigger } from "@/app/components/ui/sheet";
import { PlusIcon } from "lucide-react";
import UpsertSheetContent from "./upsert-sheet-content";
import { Product } from "@/app/generated/prisma/client";
import { ComboboxOption } from "@/app/components/ui/combobox";
import { useState } from "react";

interface CreateSaleButtonProps {
  products: Product[];
  productOptions: ComboboxOption[];
}

const CreateSaleButton = ({
  products,
  productOptions,
}: CreateSaleButtonProps) => {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  const onSuccess = () => {
    setSheetIsOpen(false);
  };

  return (
    <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
      <SheetTrigger>
        <Button>
          <PlusIcon />
          Adicionar Venda
        </Button>
      </SheetTrigger>
      <UpsertSheetContent
        products={products}
        productOptions={productOptions}
        onSuccess={onSuccess}
      />
    </Sheet>
  );
};

export default CreateSaleButton;
