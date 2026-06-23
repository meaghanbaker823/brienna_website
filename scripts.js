// for the view more/view less for on the stage and off the stage
document.addEventListener('click', (event) =>{
    // click the view more button
    if (event.target && event.target.id.endsWith('-b')){
        const hiddenId = event.target.id.slice(0, -2) + '-c';
        const hidden = document.getElementById(hiddenId);

        if (hidden) {
            event.target.style.display = 'none';
            hidden.style.display = 'flex';
        }
    }
    // click the show less button
    if (event.target && event.target.id.endsWith('-a')){
        const base = event.target.id.slice(0, -2);
        const hidden = document.getElementById(base + '-c');
        const moreButton = document.getElementById(base + '-b');

        if (hidden && moreButton){
            hidden.style.display = 'none';
            moreButton.style.display = 'flex';
        }
    }
});

