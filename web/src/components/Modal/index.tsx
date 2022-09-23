import { ToggleGroup } from "@radix-ui/react-toggle-group";
import { CaretDown, Check, GameController } from "phosphor-react";
import { Input } from "../Form/Input";
import * as Dialog from "@radix-ui/react-dialog";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Select } from "@radix-ui/react-select";
import { ReactElement } from "react";

interface ModalProps {
  title: string;
  children: ReactElement;
}
export function Modal({ title, children }: ModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl font-black">{title}</Dialog.Title>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
