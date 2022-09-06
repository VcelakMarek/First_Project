var checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener('change', function() {
    const annually = document.querySelectorAll('.annually');
    const monthly = document.querySelectorAll('.monthly');
   
    if (this.checked) {
        for (let i = 0; i < annually.length; i++) {
            annually[i].style.display = 'none';
            monthly[i].style.display = 'block';
        }

    } else {
        for (let i = 0; i < annually.length; i++) {
            annually[i].style.display = 'block';      
            monthly[i].style.display = 'none';
        }
    }
});
