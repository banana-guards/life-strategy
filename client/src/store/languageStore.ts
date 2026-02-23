import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface LanguageState {
  lang: string;
  setLanguage: (languageSelected: string) => void;
}

const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      lang: "en",
      setLanguage: (languageSelected) => set({ lang: languageSelected }),
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useLanguageStore;
