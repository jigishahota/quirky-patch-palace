
import { useState } from "react";
import { Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4">Choose Your 4 Patches</h3>
      <div className="bg-gray-50 p-6 rounded-lg">
        <Tabs defaultValue="patches" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="patches">Select Patches</TabsTrigger>
            <TabsTrigger value="selected">Your Selection ({selectedPatches.length}/4)</TabsTrigger>
          </TabsList>
          <TabsContent value="patches">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {patches.map(patch => (
                <div 
                  key={patch.id}
                  onClick={() => onPatchToggle(patch.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 flex items-center gap-3
                    ${selectedPatches.includes(patch.id) 
                      ? 'border-primary bg-primary/5' 
                      : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="flex-shrink-0">
                    {patch.icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold">{patch.name}</h4>
                    <p className="text-sm text-gray-600">{patch.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    {selectedPatches.includes(patch.id) && (
                      <div className="bg-primary text-white rounded-full p-1">
                        <Check className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="selected">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedPatches.length > 0 ? (
                selectedPatches.map(id => {
                  const patch = patches.find(p => p.id === id);
                  if (!patch) return null;
                  return (
                    <div key={patch.id} className="flex items-center gap-3 bg-white p-4 rounded-lg border shadow-sm">
                      <div className="p-2 rounded-full" style={{ backgroundColor: 'rgba(155, 126, 221, 0.1)' }}>
                        {patch.icon}
                      </div>
                      <div>
                        <h4 className="font-bold">{patch.name}</h4>
                        <p className="text-sm text-gray-600">{patch.description}</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-gray-500 text-center py-4 col-span-2">No patches selected. Please select at least 1 patch.</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PatchSelector;
