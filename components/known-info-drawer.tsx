"use client";

import { useMemo, useState } from "react";
import { Button } from "./ui/button";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { UserRound } from "lucide-react";
import { useGame } from "@/context/game-context";
import { isValidGameStep } from "@/app/utils";
import { steps } from "@/data/steps";

export default function KnownInfoDrawer() {
  const [open, setOpen] = useState(false);
  const { step } = useGame();

  const knownInfos = useMemo(() => {
    const validSteps = steps.slice(1, step);

    const infos = validSteps
      .filter((s) => isValidGameStep(s))
      .map((s) => s.inputs.map((input) => input))
      .flat();

    return infos.length ? infos : null;
  }, [step]);

  // Display the drawer only during active game steps (exclude start and end)
  if (!isValidGameStep(steps[step])) return null;

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="right">
      <DrawerTrigger asChild>
        <Button variant="secondary">
          <UserRound className="mr-2 h-4 w-4" />
          Infos connues
        </Button>
      </DrawerTrigger>

      <DrawerContent className="h-full max-w-xs rounded-none border-l border-gray-200 bg-white p-4">
        <DrawerHeader>
          <DrawerTitle>
            <UserRound />
            Infos connues sur Tom
          </DrawerTitle>
          <DrawerDescription>
            Toutes les informations que vous avez déjà récoltées.
          </DrawerDescription>
          <div className="flex flex-col gap-1">
            {knownInfos
              ? knownInfos.map((info, key) => (
                  <span
                    key={key}
                  >{`${info.shortLabel} : ${info.validResponses[0]}`}</span>
                ))
              : "Pas d'infos pour l'instant."}
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
