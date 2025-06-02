"use client";

import React from "react";
import { GameProvider, useGame } from "@/context/game-context";
import { steps } from "@/data/steps";
import { StartCard } from "@/components/start-card";
import EndCard from "@/components/end-card";
import GameCard from "@/components/game-card";

import FooterContent from "@/components/footer-content";
import { isValidGameStep } from "./utils";

const PageContent = () => {
  const { step, goToNextStep, handleResetAndReload } = useGame();

  if (step === 0) return <StartCard goToNextStep={goToNextStep} />;

  if (step === steps.length - 1)
    return <EndCard handleRestart={handleResetAndReload} />;

  const stepItem = steps[step];
  if (!isValidGameStep(stepItem)) {
    console.error("Invalid step number:", { step }, stepItem);
    return null;
  }

  return (
    <GameCard
      key={step}
      stepItem={stepItem}
      goToNextStep={goToNextStep}
      step={step}
    />
  );
};

export default function Page() {
  return (
    <GameProvider>
      <div className="font-[family-name:var(--font-geist-mono)] flex flex-col justify-center min-h-screen">
        <main className="flex justify-center items-center w-full p-4 sm:py-10">
          <PageContent />
        </main>
        <footer className="w-full">
          <FooterContent />
        </footer>
      </div>
    </GameProvider>
  );
}
