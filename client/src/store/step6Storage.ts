import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type step6Store = {
  questions: string[];
  setQuestion: (question: string, index: number) => void;
};

const useStep6 = create<step6Store>()(
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
      name: "step6-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useStep6;
