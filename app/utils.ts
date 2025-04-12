import { steps } from "@/data/steps";
import { GamePage, Steps } from "@/types/model";

export const isValidGameStep = (
  stepItem: Steps[number]
): stepItem is GamePage => {
  const index = steps.findIndex((item) => item === stepItem);
  return index > 0 && index < steps.length - 1;
};
