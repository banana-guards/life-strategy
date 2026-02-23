export interface ReportStepsDto {
  step1: Step1;
  step2: Step2;
  step3: Step;
  step4: Step4;
  step5: Step;
  step6: Step6;
  step7: Step;
}

export interface Step1 {
  questions: string[];
  scales: number[];
}

export interface Step2 {
  goal: string;
  questions: string[];
}

export interface Step {
  questions: string[];
}

export interface Step4 {
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
}

export interface Step6 {
  questions: Array<null | string>;
}
