import { create } from "zustand";

interface StoreDataInterface {
  id: string;
  name: string;
  markdown: string;
  setMarkdown: (markdown: string) => void;
  setName: (name: string) => void;
  setID: (id: string) => void;
}

export const useMarkdown = create<StoreDataInterface>((set) => ({
  id: "",
  name: "Untitled.md",
  markdown: "",
  setMarkdown: (markdown: string) => set({ markdown }),
  setName: (name: string) => set({ name }),
  setID: (id: string) => set({ id }),
}));
