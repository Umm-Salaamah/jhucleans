
// Add this function to handle the change in value for the new sections
function changeValue(id, delta) {
  const input = document.getElementById(id);
  const value = parseInt(input.value) + delta;
  if (value >= 0) {
    input.value = value;
  }
}
document.addEventListener('DOMContentLoaded', function() {
  const propertyTypeInputs = document.querySelectorAll('input[name="propertyType"]');
  const cleaningTypeInputs = document.querySelectorAll('input[name="cleaningType"]');
  const linenHireInputs = document.querySelectorAll('input[name="linenHire"]');
  
  propertyTypeInputs.forEach(input => {
    input.addEventListener('change', function() {
      const bedroomsBathrooms = document.getElementById('bedroomsBathrooms');
      if (this.value === 'Studio') {
        bedroomsBathrooms.style.display = 'none';
      } else {
        bedroomsBathrooms.style.display = 'block';
      }
    });
  });
  
  cleaningTypeInputs.forEach(input => {
    input.addEventListener('change', function() {
      const midStayFrequency = document.getElementById('midStayFrequency');
      if (this.value === 'Mid-Stay Cleaning') {
        midStayFrequency.style.display = 'block';
      } else {
        midStayFrequency.style.display = 'none';
      }
    });
  });
  
  linenHireInputs.forEach(input => {
    input.addEventListener('change', function() {
      const linenDetails = document.getElementById('linenDetails');
      if (this.value === 'Yes') {
        linenDetails.style.display = 'block';
      } else {
        linenDetails.style.display = 'none';
      }
    });
  });
});

function changeValue(id, delta) {
  const input = document.getElementById(id);
  const value = parseInt(input.value) + delta;
  if (value >= 0) {
    input.value = value;
  }
}

//if/else
        document.addEventListener('DOMContentLoaded', function() {
  const consumablesInputs = document.querySelectorAll('input[name="consumables"]');
  
  consumablesInputs.forEach(input => {
    input.addEventListener('change', function() {
      const consumablesDetails = document.getElementById('consumablesDetails');
      if (this.value === 'Yes') {
        consumablesDetails.style.display = 'block';
      } else {
        consumablesDetails.style.display = 'none';
      }
    });
  });
});