
function showContent(section, button) {
   
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section) => {
        section.classList.remove('active');
    });


    const activeSection = document.getElementById(section);
    if (activeSection) {
        activeSection.classList.add('active');
    }

   
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach((btn) => {
        btn.classList.remove('active');
    });

    button.classList.add('active');
}
