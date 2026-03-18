
function hideAllCards() {
  let allCards = document.querySelectorAll('.recipe-card');
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].style.display = 'none';
  }
}

function showAll() {
  let allCards = document.querySelectorAll('.recipe-card');
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].style.display = 'block';
  }
}

function showStarters() {
  hideAllCards(); 
  
  let starters = document.querySelectorAll('.starters');
  for (let i = 0; i < starters.length; i++) {
    starters[i].style.display = 'block';
  }
}

function showMain() {
  hideAllCards(); 
  
  let mains = document.querySelectorAll('.main');
  for (let i = 0; i < mains.length; i++) {
    mains[i].style.display = 'block';
  }
}

function showSnacks() {
  hideAllCards(); 
  
  let snacks = document.querySelectorAll('.snacks');
  for (let i = 0; i < snacks.length; i++) {
    snacks[i].style.display = 'block';
  }
}

function showDinner() {
  hideAllCards(); 
  
  let dinners = document.querySelectorAll('.dinner');
  for (let i = 0; i < dinners.length; i++) {
    dinners[i].style.display = 'block';
  }
}

function showDesserts() {
  hideAllCards(); 
  
  let desserts = document.querySelectorAll('.desserts');
  for (let i = 0; i < desserts.length; i++) {
    desserts[i].style.display = 'block';
  }
}

let healthyToggle = document.getElementById("healthyToggle");

healthyToggle.addEventListener("change", function() {
  let nutritionBoxes = document.querySelectorAll('.nutrition-box');

  for (let i = 0; i < nutritionBoxes.length; i++) {
    if (healthyToggle.checked === true) {
      nutritionBoxes[i].style.display = 'block';
    } else {
      nutritionBoxes[i].style.display = 'none';
    }
  }
});

function toggleInstructions(boxId) {
  let instructionBox = document.getElementById(boxId);

  if (instructionBox.style.display === 'block') {
    instructionBox.style.display = 'none';
  } else {
    instructionBox.style.display = 'block';
  }
}