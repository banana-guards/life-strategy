import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type step7Store = {
  questions: string[];
  setQuestion: (question: string, index: number) => void;
};

const useStep7 = create<step7Store>()(
  persist(
    (set) => ({
      questions: Array(4).fill(""),
      setQuestion: (question, index) =>
        set((state) => {
          const newQuestions = [...state.questions];
          newQuestions[index] = question;
          return { questions: newQuestions };
        }),
    }),
    {
      name: "step7-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useStep7;
