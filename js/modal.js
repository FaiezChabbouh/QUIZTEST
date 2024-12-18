
document.addEventListener('DOMContentLoaded', () => {
    
    const hireMeBtn = document.getElementById('hire-me-btn');
    const modal = document.getElementById('hire-me-modal');
    const closeBtn = document.getElementById('close-btn');

    if (hireMeBtn && modal && closeBtn) {
       
        hireMeBtn.addEventListener('click', () => {
            modal.classList.add('show'); 
        });

        
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show'); // 
        });

       
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('show'); 
            }
        });

       
        document.getElementById('hire-me-form').addEventListener('submit', (e) => {
            e.preventDefault(); 
            alert('Your request has been submitted!');
            modal.classList.remove('show'); 
        });
    } else {
        console.error('Some elements are missing in the DOM. Please verify the HTML structure.');
    }
});
