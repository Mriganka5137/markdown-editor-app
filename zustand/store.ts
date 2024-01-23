import { create } from "zustand";

interface StoreDataInterface {
  name: string;
  markdown: string;
  setMarkdown: (markdown: string) => void;
  setName: (name: string) => void;
}

export const useMarkdown = create<StoreDataInterface>((set) => ({
  name: "Untitled.md",
  markdown: "",
  setMarkdown: (markdown: string) => set({ markdown }),
  setName: (name: string) => set({ name }),
}));
