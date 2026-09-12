// 1. Target your layout elements
const targetImage = document.getElementById('target-image');
const floatingTextElement = document.querySelector('.box-text-wrapper h3');
const boxSectionParent = document.querySelector('.box-section'); // Parent container for layout tracking

// 2. Set up image configuration paths
const viewImages = {
  'directory-btn': 'img/gmap1.png',
  'schedule-btn': 'img/schedule2.png',
  'aboutus-btn': 'img/me.jpg'
};

// 3. Set up dynamic wording configurations
const viewTexts = {
  'directory-btn': 'Just north of the mall,<br> just across the ravine',
  'schedule-btn': 'Walk-In<br>Schedule',
  'aboutus-btn': 'Greeting! My name is Clint. <br>I opened XO Haircuts in<br> 2015. After many years of<br> success cutting peoples hair.'
};

// 4. Select your three navigation item link tags
const navButtons = document.querySelectorAll('#directory-btn a, #schedule-btn a, #aboutus-btn a');

navButtons.forEach(link => {
  link.addEventListener('click', function(event) {
    // Intercept standard page change actions
    event.preventDefault(); 
    
    // Extract parent list item block context
    const parentId = this.parentElement.id;
    const newImagePath = viewImages[parentId];
    const newTextLayout = viewTexts[parentId];
    
    // Swap the main graphic asset
    if (newImagePath) {
      targetImage.src = newImagePath;
      targetImage.alt = this.textContent + ' View';
    }
    
    // Update heading label string content
    if (newTextLayout) {
      floatingTextElement.innerHTML = newTextLayout;
    }
    
    // Trigger your CSS block's side shift, shadows, and crisp charcoal borders
    boxSectionParent.classList.add('directory-layout-active');
  });
});
