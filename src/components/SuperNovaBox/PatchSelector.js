
// Mock data to represent patches
const patches = [
  {
    id: 1,
    name: "B12 Boost",
    description: "Keeps you energized all day long",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9B7EDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>'
  },
  {
    id: 2,
    name: "Dream Catcher",
    description: "Fall asleep faster and sleep deeper",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(169, 100%, 42%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>'
  },
  {
    id: 3,
    name: "Caffeine Kick",
    description: "Clean energy without the jitters",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(346, 89%, 64%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>'
  },
  {
    id: 4,
    name: "Focus Formula",
    description: "Enhance mental clarity and concentration",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#64B5F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2Z"/></svg>'
  }
];

document.addEventListener('DOMContentLoaded', function() {
  let selectedPatches = [];
  const toggleButton = document.getElementById('toggle-patch-selector');
  const toggleIcon = document.getElementById('toggle-icon');
  const content = document.getElementById('patch-selector-content');
  const selectedPatchesContainer = document.getElementById('selected-patches-container');
  const availablePatchesContainer = document.getElementById('available-patches-container');
  const selectedCountElement = document.getElementById('selected-count');
  const noPatchesMessage = document.getElementById('no-patches-message');

  // Toggle patch selector visibility
  toggleButton.addEventListener('click', function() {
    content.classList.toggle('hidden');
    toggleIcon.classList.toggle('transform');
    toggleIcon.classList.toggle('rotate-180');
  });

  // Function to update the UI
  function updateUI() {
    // Update selected count
    selectedCountElement.textContent = selectedPatches.length;
    
    // Clear containers
    selectedPatchesContainer.innerHTML = '';
    availablePatchesContainer.innerHTML = '';

    // Show/hide no patches message
    if (selectedPatches.length === 0) {
      selectedPatchesContainer.appendChild(noPatchesMessage);
    } else {
      // Add selected patches to the container
      selectedPatches.forEach(patchId => {
        const patch = patches.find(p => p.id === patchId);
        if (!patch) return;

        const patchElement = document.createElement('div');
        patchElement.className = 'p-3 rounded-lg border bg-white flex items-center gap-3';
        patchElement.innerHTML = `
          <div class="flex-shrink-0">
            ${patch.icon}
          </div>
          <div class="flex-grow">
            <h4 class="font-bold">${patch.name}</h4>
            <p class="text-sm text-gray-600">${patch.description}</p>
          </div>
          <button 
            class="text-gray-500 hover:text-red-500"
            aria-label="Remove ${patch.name}"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          </button>
        `;

        // Add event listener to remove button
        const removeButton = patchElement.querySelector('button');
        removeButton.addEventListener('click', function() {
          togglePatch(patch.id);
        });

        selectedPatchesContainer.appendChild(patchElement);
      });
    }

    // Add available patches to the container
    patches.filter(patch => !selectedPatches.includes(patch.id)).forEach(patch => {
      const patchElement = document.createElement('div');
      patchElement.className = 'p-3 rounded-lg border cursor-pointer transition-all duration-200 flex items-center gap-3 hover:border-primary hover:bg-primary/5';
      patchElement.innerHTML = `
        <div class="flex-shrink-0">
          ${patch.icon}
        </div>
        <div class="flex-grow">
          <h4 class="font-bold">${patch.name}</h4>
          <p class="text-sm text-gray-600">${patch.description}</p>
        </div>
      `;

      patchElement.addEventListener('click', function() {
        togglePatch(patch.id);
      });

      availablePatchesContainer.appendChild(patchElement);
    });
  }

  // Function to toggle patch selection
  function togglePatch(patchId) {
    const index = selectedPatches.indexOf(patchId);
    if (index === -1) {
      // If we already have 4 patches selected, don't add more
      if (selectedPatches.length >= 4) return;
      selectedPatches.push(patchId);
    } else {
      selectedPatches.splice(index, 1);
    }
    updateUI();
  }

  // Initialize UI
  updateUI();
});
