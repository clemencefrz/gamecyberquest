import { steps } from "@/data/steps";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
  useCallback,
} from "react";

const stepNumberArray = Array.from({ length: steps.length }, (_, i) => i);

type GameContextType = {
  step: (typeof stepNumberArray)[number];
  goToNextStep: () => void;
  handleResetAndReload: () => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [step, setStep] = useState<number>(stepNumberArray[0]);

  // Load the step from localStorage when the component mounts
  // Avoid error "window is undefined" in SSR
  useEffect(() => {
    const stepLocalStorage = window.localStorage.getItem("step");
    const storedStep = stepLocalStorage ? parseInt(stepLocalStorage) : 0;

    if (storedStep < steps.length) {
      setStep(storedStep);
    }
  }, []);

  const goToNextStep = useCallback(() => {
    const nextStep = step + 1;
    if (nextStep < steps.length) {
      window.localStorage.setItem("step", nextStep.toString());
      setStep(nextStep);
      return;
    } else {
      return;
    }
  }, [step]);

  const handleReset = () => {
    window.localStorage.removeItem("step");
    window.localStorage.removeItem("startTime");
    window.localStorage.removeItem("userName");
  };

  const handleResetAndReload = () => {
    handleReset();
    window.location.reload();
  };

  return (
    <GameContext.Provider
      value={{
        step,
        goToNextStep,
        handleResetAndReload,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame should be used inside the contexte");
  }
  return context;
};
