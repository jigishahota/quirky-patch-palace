
const PatchSelector = ({ patches, selectedPatches, onPatchToggle }: any) => {
  return (
    <div className="mb-6">
      <div className="w-full space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">Selected Patches ({selectedPatches.length}/4)</h3>
          <button 
            className="rounded-md border p-2 hover:bg-gray-100" 
            onclick="togglePatchSelector(this)"
            aria-label="Toggle patch selector"
          >
            <div className="h-4 w-4 transition-transform" id="patchSelectorIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
          </button>
        </div>
        
        <div className="hidden" id="patchSelectorContent">
          <div className="bg-gray-50 p-4 rounded-lg mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4" id="selectedPatchesContainer">
              {/* Selected patches will be inserted here dynamically */}
            </div>
            
            <h4 className="font-semibold mb-2">Add Patches:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3" id="availablePatchesContainer">
              {/* Available patches will be inserted here dynamically */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add this script to make it work with HTML/CSS only
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the patch selector functionality
  initPatchSelector();
});

function togglePatchSelector(button) {
  const content = document.getElementById('patchSelectorContent');
  const icon = document.getElementById('patchSelectorIcon');
  
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    icon.classList.add('transform', 'rotate-180');
  } else {
    content.classList.add('hidden');
    icon.classList.remove('transform', 'rotate-180');
  }
}

function initPatchSelector() {
  // This function would normally be called to initialize the patch selector
  // with the correct data and event handlers
  
  // For static HTML, you would pre-populate these containers
  const selectedContainer = document.getElementById('selectedPatchesContainer');
  const availableContainer = document.getElementById('availablePatchesContainer');
  
  // Example of how to create a selected patch element
  if (selectedContainer && selectedContainer.children.length === 0) {
    selectedContainer.innerHTML = `
      <p class="text-gray-500 text-center py-2 col-span-2">No patches selected. Please select at least 1 patch.</p>
    `;
  }
  
  // Example of how to create available patch elements
  if (availableContainer) {
    // This would be populated based on the patches data
    // For a static example:
    availableContainer.innerHTML = `
      <div class="p-3 rounded-lg border cursor-pointer transition-all duration-200 flex items-center gap-3 hover:border-primary hover:bg-primary/5">
        <div class="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        <div class="flex-grow">
          <h4 class="font-bold">Energy Boost</h4>
          <p class="text-sm text-gray-600">Gives you energy throughout the day</p>
        </div>
      </div>
      <div class="p-3 rounded-lg border cursor-pointer transition-all duration-200 flex items-center gap-3 hover:border-primary hover:bg-primary/5">
        <div class="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
        </div>
        <div class="flex-grow">
          <h4 class="font-bold">Sleep Better</h4>
          <p class="text-sm text-gray-600">Helps you fall asleep faster</p>
        </div>
      </div>
    `;
  }
}

export default PatchSelector;
