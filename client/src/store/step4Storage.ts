import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { areaLifeKeys } from "../types/areaLifeKeys";

type step4Store = {
  ImportantPerson: string;
  Family: string;
  Friendship: string;
  PhysicalHealth: string;
  Spirituality: string;
  Community: string;
  SocialParticipation: string;
  Work: string;
  Education: string;
  Finances: string;
  Hobbies: string;
  OnlineEntertainment: string;
  OfflineEntertainment: string;
  PhysiologicalNeeds: string;
  ActivitiesOfDailyLiving: string;

  setField: (field: areaLifeKeys, value: string) => void;
};

const useStep4 = create<step4Store>()(
  persist(
    (set) => ({
      ImportantPerson: "",
      Family: "",
      Friendship: "",
      PhysicalHealth: "",
      Spirituality: "",
      Community: "",
      SocialParticipation: "",
      Work: "",
      Education: "",
      Finances: "",
      Hobbies: "",
      OnlineEntertainment: "",
      OfflineEntertainment: "",
      PhysiologicalNeeds: "",
      ActivitiesOfDailyLiving: "",

      setField: (field, value) =>
        set((state) => ({
          ...state,
          [field]: value,
        })),
    }),
    {
      name: "step4-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useStep4;
