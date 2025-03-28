
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Patch = {
  id: number;
  name: string;
  description: string;
  icon: JSX.Element;
};

interface PatchSelectorProps {
  patches: Patch[];
  selectedPatches: number[];
  onPatchToggle: (patchId: number) => void;
}

const PatchSelector = ({ patches, selectedPatches, onPatchToggle }: PatchSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <Collapsible 
        open={isOpen} 
        onOpenChange={setIsOpen}
        className="w-full space-y-2"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">Selected Patches ({selectedPatches.length}/4)</h3>
          <CollapsibleTrigger className="rounded-md border p-2 hover:bg-gray-100">
            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent>
          <div className="bg-gray-50 p-4 rounded-lg mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              {selectedPatches.length > 0 ? (
                selectedPatches.map(id => {
                  const patch = patches.find(p => p.id === id);
                  if (!patch) return null;
                  return (
                    <div key={patch.id} className="flex items-center gap-3 bg-white p-3 rounded-lg border shadow-sm">
                      <div className="p-1 rounded-full" style={{ backgroundColor: 'rgba(155, 126, 221, 0.1)' }}>
                        {patch.icon}
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold">{patch.name}</h4>
                        <p className="text-sm text-gray-600">{patch.description}</p>
                      </div>
                      <button 
                        onClick={() => onPatchToggle(patch.id)} 
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <span className="sr-only">Remove</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  );
                })
              ) : (
                <p className="text-gray-500 text-center py-2 col-span-2">No patches selected. Please select at least 1 patch.</p>
              )}
            </div>
            
            <h4 className="font-semibold mb-2">Add Patches:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {patches.filter(patch => !selectedPatches.includes(patch.id)).map(patch => (
                <div 
                  key={patch.id}
                  onClick={() => selectedPatches.length < 4 && onPatchToggle(patch.id)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 flex items-center gap-3
                    ${selectedPatches.length < 4 ? 'hover:border-primary hover:bg-primary/5' : 'opacity-50 cursor-not-allowed'}`}
                >
                  <div className="flex-shrink-0">
                    {patch.icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold">{patch.name}</h4>
                    <p className="text-sm text-gray-600">{patch.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default PatchSelector;
