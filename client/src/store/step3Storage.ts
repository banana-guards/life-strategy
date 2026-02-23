import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type step3Store = {
  questions: string[];
  setQuestion: (question: string, index: number) => void;
};

const useStep3 = create<step3Store>()(
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
      name: "step3-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useStep3;
