export enum AppStage {
  INTRO = 0,
  LANDING = 1,
  STANZA_1 = 2,
  STANZA_2 = 3,
  STANZA_3 = 4,
  STANZA_4 = 5,
  CONCLUSION = 6
}

export interface NavProps {
  currentStage: AppStage;
  setStage: (stage: AppStage) => void;
}

export interface ScreenProps {
  onNext: () => void;
  isActive: boolean;
}