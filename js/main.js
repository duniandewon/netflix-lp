const tabItems = document.querySelectorAll('.tab-item'),
    tabContentItems = document.querySelectorAll('.tab-content-item');


// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));

// select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    // add border to active tab
    this.classList.add('tab-border');
    // Grab content item from DOM
    const tabContentItems = document.querySelector(`#${this.id}-content`);
    // add show class
    tabContentItems.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}