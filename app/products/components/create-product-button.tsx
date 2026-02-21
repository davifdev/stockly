"use client";

import { Button } from "@/app/components/ui/button";
import { Dialog, DialogTrigger } from "@/app/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import UpsertDialogContent from "./upsert-dialog-content";
import { useState } from "react";

const CreateProductButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon /> Novo produto
        </Button>
      </DialogTrigger>
      <UpsertDialogContent dialogClose={() => setDialogIsOpen(false)} />
    </Dialog>
  );
};

export default CreateProductButton;
