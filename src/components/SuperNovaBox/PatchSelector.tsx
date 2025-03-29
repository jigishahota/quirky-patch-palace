
import { useState } from 'react';

const PatchSelector = ({ patches, selectedPatches, onPatchToggle }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePatchSelector = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-6">
      <div className="w-full space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">Selected Patches ({selectedPatches.length}/4)</h3>
          <button 
            className="rounded-md border p-2 hover:bg-gray-100" 
            onClick={togglePatchSelector}
            aria-label="Toggle patch selector"
          >
            <div className={`h-4 w-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
          </button>
        </div>
        
        <div className={isOpen ? '' : 'hidden'}>
          <div className="bg-gray-50 p-4 rounded-lg mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              {selectedPatches.length === 0 ? (
                <p className="text-gray-500 text-center py-2 col-span-2">No patches selected. Please select at least 1 patch.</p>
              ) : (
                selectedPatches.map((patchId: number) => {
                  const patch = patches.find((p: any) => p.id === patchId);
                  if (!patch) return null;
                  return (
                    <div key={patch.id} className="p-3 rounded-lg border bg-white flex items-center gap-3">
                      <div className="flex-shrink-0">
                        {patch.icon}
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold">{patch.name}</h4>
                        <p className="text-sm text-gray-600">{patch.description}</p>
                      </div>
                      <button 
                        onClick={() => onPatchToggle(patch.id)}
                        className="text-gray-500 hover:text-red-500"
                        aria-label={`Remove ${patch.name}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6 6 18"/>
                          <path d="m6 6 12 12"/>
                        </svg>
                      </button>
                    </div>
                  );
                })
              )}
            </div>
            
            <h4 className="font-semibold mb-2">Add Patches:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {patches
                .filter((patch: any) => !selectedPatches.includes(patch.id))
                .map((patch: any) => (
                  <div 
                    key={patch.id} 
                    className="p-3 rounded-lg border cursor-pointer transition-all duration-200 flex items-center gap-3 hover:border-primary hover:bg-primary/5"
                    onClick={() => onPatchToggle(patch.id)}
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
        </div>
      </div>
    </div>
  );
};

export default PatchSelector;
