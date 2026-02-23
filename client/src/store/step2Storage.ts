import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type step2Store = {
  questions: string[];
  goal: string;
  setGoal: (goal: string) => void;
  setQuestion: (question: string, index: number) => void;
};

const useStep2 = create<step2Store>()(
  persist(
    (set) => ({
      questions: Array(5).fill(""),
      goal: "",
      setGoal: (goal) => set({ goal }),
      setQuestion: (question, index) =>
        set((state) => {
          const newQuestions = [...state.questions];
          newQuestions[index] = question;
          return { questions: newQuestions };
        }),
    }),
    {
      name: "step2-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useStep2;
