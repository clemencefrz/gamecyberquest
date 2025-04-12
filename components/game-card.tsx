"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import FormFieldInputs from "./form-field-inputs";
import { GamePage } from "@/types/model";
import { steps } from "@/data/steps";

type Props = { stepItem: GamePage; goToNextStep: () => void; step: number };

const GameCard: React.FC<Props> = ({ stepItem, goToNextStep, step }: Props) => {
  const { description, inputs, title } = stepItem;

  const [validInputs, setValidInputs] = useState<boolean[]>(
    Array(inputs.length).fill(false)
  );

  const handleValidationChange = (index: number, isValid: boolean) => {
    setValidInputs((prev) => {
      const updated = [...prev];
      updated[index] = isValid;
      return updated;
    });
  };

  const isFormValid = validInputs.every(Boolean);

  return (
    <Card className="w-full max-w-7xl">
      <CardHeader>
        <CardTitle>{`Étape ${step}/${steps.length - 2} : ${title}`}</CardTitle>
        <CardDescription className="flex flex-col gap-4 sm:py-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormFieldInputs
          inputs={inputs}
          handleValidationChange={handleValidationChange}
        />
      </CardContent>
      <CardFooter>
        <Button
          disabled={!isFormValid}
          onClick={goToNextStep}
          className="ml-auto w-full md:w-min"
        >{`Passer à l'étape suivante`}</Button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
