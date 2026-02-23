import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Store = {
  questions: string[];
  scales: number[];
  setScale: (index: number, value: number) => void;
  setQuestion: (question: string, index: number) => void;
};

const useStep1 = create<Store>()(
  persist(
    (set) => ({
      questions: Array(1).fill(""),
      scales: Array(6).fill(0),
      setScale: (index, value) =>
        set((state) => {
          const scales = [...state.scales];
          scales[index] = value;
          return { scales };
        }),
      setQuestion: (question, index) =>
        set((state) => {
          const newQuestions = [...state.questions];
          newQuestions[index] = question;
          return { questions: newQuestions };
        }),
    }),
    {
      name: "step1-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useStep1;
