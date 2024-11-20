
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

    const prices = {
        singleBeds: 18,
        doubleBeds: 19,
        kingBeds: 20,
        superKingBeds: 22,
        duvetSingle: 7,
        duvetDouble: 7,
        duvetKing: 7,
        duvetSuperKing: 7,
        pillows: 5,
        pillowProtector: 3,
        mattressSingle: 7,
        mattressDouble: 7,
        mattressKing: 8,
        mattressSuperKing: 8,
        blankets: 5,
        kitchenTowels: 1,
        bathMats: 2,
        bathrobeSlippers: 7
    };

    function calculateTotal() {
      let total = 0;
      for (const id in prices) {
          const input = document.getElementById(id);
          if (input) {
              total += (parseInt(input.value, 10) || 0) * prices[id];
          }
      }
      document.getElementById('totalCost').innerText = total.toFixed(2);
      document.getElementById('total_cost').value = total.toFixed(2);
      console.log('Total cost calculated:', total.toFixed(2));  // Debug statement
  }
  
  document.querySelectorAll('input, select').forEach(element => {
      element.addEventListener('input', calculateTotal);
  });
  
  calculateTotal();
  
  function changeValue(id, delta) {
      const input = document.getElementById(id);
      let value = parseInt(input.value, 10);
      value = isNaN(value) ? 0 : value;
      value += delta;
      if (value < 0) value = 0;
      input.value = value;
      calculateTotal();
  }

    function changeValue(id, delta) {
        const input = document.getElementById(id);
        let value = parseInt(input.value, 10);
        value = isNaN(value) ? 0 : value;
        value += delta;
        if (value < 0) value = 0;
        input.value = value;
        calculateTotal();
    }

    
    document.addEventListener('DOMContentLoaded', function() {
      const faqCards = document.querySelectorAll('.faq-card');
      
      faqCards.forEach(card => {
          const trigger = card.querySelector('.faq-trigger');
          const content = card.querySelector('.faq-content');
          
          trigger.addEventListener('click', () => {
              const isActive = card.classList.contains('active');
              
              // Close all cards
              faqCards.forEach(otherCard => {
                  otherCard.classList.remove('active');
                  otherCard.querySelector('.faq-content').style.maxHeight = '0px';
              });
              
              // If the clicked card wasn't active, open it
              if (!isActive) {
                  card.classList.add('active');
                  content.style.maxHeight = content.scrollHeight + 'px';
              }
          });
      });
  });
  
