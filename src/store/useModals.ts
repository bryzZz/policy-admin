import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const usePolicyModal = create<ModalState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
