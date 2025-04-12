"use client";

import { Button } from "./ui/button";
import { BookMarked, RotateCcw } from "lucide-react";
import { useGame } from "@/context/game-context";
import KnownInfoDrawer from "./known-info-drawer";

export default function FooterContent() {
  const { handleResetAndReload, step } = useGame();

  return (
    <div className="rounded-md flex flex-wrap gap-6 items-center justify-center px-4 w-full h-full">
      {step !== 0 && (
        <Button variant="secondary" onClick={handleResetAndReload}>
          <RotateCcw className="mr-2 h-4 w-4" />
          <span className="hidden md:block">Recommencer</span>
        </Button>
      )}
      <Button
        variant="secondary"
        onClick={() =>
          window.open(
            "https://troubled-trollius-231.notion.site/Protection-num-rique-1c7ae4a6665e801fa652f71ab2b1fbc6",
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        <BookMarked className="h-4 w-4 mr-2" />
        Le guide
      </Button>

      <KnownInfoDrawer />
    </div>
  );
}
