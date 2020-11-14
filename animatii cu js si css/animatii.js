function expand() {
    let hamburger = document.getElementById('hamburger');
    let theDiv = document.getElementById('theDiv');
    let frametime = 1;
    let pos = 0;
    let interval = setInterval(frame, frametime);
    function frame() {
        if (pos == 300) {
            clearInterval(interval);
        } else {
            hamburger.style.opacity = 0;
            theDiv.style.opacity = 1;
            theDiv.style.width = pos * 0.2 + 'px';
            theDiv.style.height = pos + 'px'; 
             pos++;

        }
    }
}