import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type step5Store = {
  questions: string[];
  setQuestion: (question: string, index: number) => void;
};

const useStep5 = create<step5Store>()(
  persist(
    (set) => ({
      questions: Array(1).fill(""),
      setQuestion: (question, index) =>
        set((state) => {
          const newQuestions = [...state.questions];
          newQuestions[index] = question;
          return { questions: newQuestions };
        }),
    }),
    {
      name: "step5-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useStep5;
