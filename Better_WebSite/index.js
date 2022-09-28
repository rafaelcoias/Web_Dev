window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            if (reveals[i].classList.contains("odd")){
                reveals[i].classList.add('active_odd');
            }
            else if (reveals[i].classList.contains("even")){
                reveals[i].classList.add('active_even');
            }
            else {
                reveals[i].classList.add('active');
            }
        }
        else {
            if (reveals[i].classList.contains("odd")){
                reveals[i].classList.remove('active_odd');
            }
            else if (reveals[i].classList.contains("even")){
                reveals[i].classList.remove('active_even');
            }
            else {
                reveals[i].classList.remove('active');
            }
        }
    }
   
}