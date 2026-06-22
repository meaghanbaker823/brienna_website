// off the stage
function unhideWellspring(){
    const div1 = document.getElementById('hidden-wellspring-c');
    const button = document.getElementById('hidden-wellspring-b');
    button.style.display = 'none';
    div1.style.display = 'flex';

}

function hideWellspring(){
    const div1 = document.getElementById('hidden-wellspring-c');
    const button = document.getElementById('hidden-wellspring-b');
    button.style.display = 'flex';
    div1.style.display = 'none';
}

function unhideOther(){
    const div1 = document.getElementById('hidden-other-c');
    const button = document.getElementById('hidden-other-b');
    button.style.display = 'none';
    div1.style.display = 'flex';

}

function hideOther(){
    const div1 = document.getElementById('hidden-other-c');
    const button = document.getElementById('hidden-other-b');
    button.style.display = 'flex';
    div1.style.display = 'none';
}

function unhideAmbassador(){
    const div1 = document.getElementById('hidden-ambassador-c');
    const button = document.getElementById('hidden-ambassador-b');
    button.style.display = 'none';
    div1.style.display = 'flex';

}

function hideAmbassador(){
    const div1 = document.getElementById('hidden-ambassador-c');
    const button = document.getElementById('hidden-ambassador-b');
    button.style.display = 'flex';
    div1.style.display = 'none';
}

function unhideBarback(){
    const div1 = document.getElementById('hidden-barback-c');
    const button = document.getElementById('hidden-barback-b');
    button.style.display = 'none';
    div1.style.display = 'flex';

}

function hideBarback(){
    const div1 = document.getElementById('hidden-barback-c');
    const button = document.getElementById('hidden-barback-b');
    button.style.display = 'flex';
    div1.style.display = 'none';
}



// On the stage
function unhideTitanic(){
    const div1 = document.getElementById('hidden-titanic-c');
    const button = document.getElementById('hidden-titanic-b');
    button.style.display = 'none';
    div1.style.display = 'flex';

}

function hideTitanic(){
    const div1 = document.getElementById('hidden-titanic-c');
    const button = document.getElementById('hidden-titanic-b');
    button.style.display = 'flex';
    div1.style.display = 'none';
}

function unhideLegally(){
    const div1 = document.getElementById('hidden-legally-blonde-c');
    const button = document.getElementById('hidden-legally-blonde-b');
    button.style.display = 'none';
    div1.style.display = 'flex';

}

function hideLegally(){
    const div1 = document.getElementById('hidden-legally-blonde-c');
    const button = document.getElementById('hidden-legally-blonde-b');
    button.style.display = 'flex';
    div1.style.display = 'none';
}

function unhideLightning(){
    const div1 = document.getElementById('hidden-lightning-c');
    const button = document.getElementById('hidden-lightning-b');
    button.style.display = 'none';
    div1.style.display = 'flex';

}

function hideLightning(){
    const div1 = document.getElementById('hidden-lightning-c');
    const button = document.getElementById('hidden-lightning-b');
    button.style.display = 'flex';
    div1.style.display = 'none';
}

function unhideHeathers(){
    const div1 = document.getElementById('hidden-heathers-c');
    const button = document.getElementById('hidden-heathers-b');
    button.style.display = 'none';
    div1.style.display = 'flex';

}

function hideHeathers(){
    const div1 = document.getElementById('hidden-heathers-c');
    const button = document.getElementById('hidden-heathers-b');
    button.style.display = 'flex';
    div1.style.display = 'none';
}

function unhideCarrie(){
    const div1 = document.getElementById('hidden-carrie-c');
    const button = document.getElementById('hidden-carrie-b');
    button.style.display = 'none';
    div1.style.display = 'flex';

}

function hideCarrie(){
    const div1 = document.getElementById('hidden-carrie-c');
    const button = document.getElementById('hidden-carrie-b');
    button.style.display = 'flex';
    div1.style.display = 'none';
}

function unhideSpelling(){
    const div1 = document.getElementById('hidden-spelling-c');
    const button = document.getElementById('hidden-spelling-b');
    button.style.display = 'none';
    div1.style.display = 'flex';

}

function hideSpelling(){
    const div1 = document.getElementById('hidden-spelling-c');
    const button = document.getElementById('hidden-spelling-b');
    button.style.display = 'flex';
    div1.style.display = 'none';
}



document.addEventListener('DOMContentLoaded', () =>
{
    //off the stage
    const view_wellspring = document.getElementById('hidden-wellspring-b');
    view_wellspring.addEventListener("click", unhideWellspring)

    const unview_wellspring = document.getElementById('hidden-wellspring-a');
    unview_wellspring.addEventListener("click", hideWellspring);

    const view_other = document.getElementById('hidden-other-b');
    view_other.addEventListener("click", unhideOther)

    const unview_other = document.getElementById('hidden-other-a');
    unview_other.addEventListener("click", hideOther);

    const view_ambassador = document.getElementById('hidden-ambassador-b');
    view_ambassador.addEventListener("click", unhideAmbassador)

    const unview_ambassador = document.getElementById('hidden-ambassador-a');
    unview_ambassador.addEventListener("click", hideAmbassador);

    const view_barback = document.getElementById('hidden-barback-b');
    view_barback.addEventListener("click", unhideBarback)

    const unview_barback = document.getElementById('hidden-barback-a');
    unview_barback.addEventListener("click", hideBarback);

    // on the stage
    const view_titanic = document.getElementById('hidden-titanic-b');
    view_titanic.addEventListener("click", unhideTitanic)

    const unview_titanic = document.getElementById('hidden-titanic-a');
    unview_titanic.addEventListener("click", hideTitanic);

    const view_legal = document.getElementById('hidden-legally-blonde-b');
    view_legal.addEventListener("click", unhideLegally)

    const unview_legal = document.getElementById('hidden-legally-blonde-a');
    unview_legal.addEventListener("click", hideLegally);

    const view_lightning = document.getElementById('hidden-lightning-b');
    view_lightning.addEventListener("click", unhideLightning)

    const unview_lightning = document.getElementById('hidden-lightning-a');
    unview_lightning.addEventListener("click", hideLightning);

    const view_heathers = document.getElementById('hidden-heathers-b');
    view_heathers.addEventListener("click", unhideHeathers)

    const unview_heathers = document.getElementById('hidden-heathers-a');
    unview_heathers.addEventListener("click", hideHeathers);

    const view_carrie = document.getElementById('hidden-carrie-b');
    view_carrie.addEventListener("click", unhideCarrie)

    const unview_carrie = document.getElementById('hidden-carrie-a');
    unview_carrie.addEventListener("click", hideCarrie);

    const view_spelling = document.getElementById('hidden-spelling-b');
    view_spelling.addEventListener("click", unhideSpelling)

    const unview_spelling = document.getElementById('hidden-spelling-a');
    unview_spelling.addEventListener("click", hideSpelling);

});

