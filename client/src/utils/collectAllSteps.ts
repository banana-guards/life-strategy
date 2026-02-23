import useStep1 from "../store/step1Storage";
import useStep2 from "../store/step2Storage";
import useStep3 from "../store/step3Storage";
import useStep4 from "../store/step4Storage";
import useStep5 from "../store/step5Storage";
import useStep6 from "../store/step6Storage";
import useStep7 from "../store/step7Storage";

export const collectAllSteps = () => {
  const step1 = useStep1.getState();
  const step2 = useStep2.getState();
  const step3 = useStep3.getState();
  const step4 = useStep4.getState();
  const step5 = useStep5.getState();
  const step6 = useStep6.getState();
  const step7 = useStep7.getState();

  return {
    step1: {
      questions: step1.questions,
      scales: step1.scales,
    },
    step2: {
      goal: step2.goal,
      questions: step2.questions,
    },
    step3: {
      questions: step3.questions,
    },
    step4: {
      ImportantPerson: step4.ImportantPerson,
      Family: step4.Family,
      Friendship: step4.Friendship,
      PhysicalHealth: step4.PhysicalHealth,
      Spirituality: step4.Spirituality,
      Community: step4.Community,
      SocialParticipation: step4.SocialParticipation,
      Work: step4.Work,
      Education: step4.Education,
      Finances: step4.Finances,
      Hobbies: step4.Hobbies,
      OnlineEntertainment: step4.OnlineEntertainment,
      OfflineEntertainment: step4.OfflineEntertainment,
      PhysiologicalNeeds: step4.PhysiologicalNeeds,
      ActivitiesOfDailyLiving: step4.ActivitiesOfDailyLiving,
    },
    step5: {
      questions: step5.questions,
    },
    step6: {
      questions: step6.questions,
    },
    step7: {
      questions: step7.questions,
    },
  };
};
