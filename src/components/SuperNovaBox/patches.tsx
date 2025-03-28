
import { Zap, Moon, Coffee, Brain } from "lucide-react";

export type Patch = {
  id: number;
  name: string;
  description: string;
  icon: JSX.Element;
};

export const patches: Patch[] = [
  {
    id: 1,
    name: "B12 Boost",
    description: "Keeps you energized all day long",
    icon: <Zap className="h-8 w-8 text-[#9B7EDD]" />
  },
  {
    id: 2,
    name: "Dream Catcher",
    description: "Fall asleep faster and sleep deeper",
    icon: <Moon className="h-8 w-8 text-secondary" />
  },
  {
    id: 3,
    name: "Caffeine Kick",
    description: "Clean energy without the jitters",
    icon: <Coffee className="h-8 w-8 text-accent" />
  },
  {
    id: 4,
    name: "Focus Formula",
    description: "Enhance mental clarity and concentration",
    icon: <Brain className="h-8 w-8 text-[#64B5F6]" />
  }
];
