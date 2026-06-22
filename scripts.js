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



document.addEventListener('DOMContentLoaded', () =>
{
    const view_titanic = document.getElementById('hidden-titanic-b');
    view_titanic.addEventListener("click", unhideTitanic)

    const unview_titanic = document.getElementById('hidden-titanic-a');
    unview_titanic.addEventListener("click", hideTitanic);

    const view_legal = document.getElementById('hidden-legally-blonde-b');
    view_legal.addEventListener("click", unhideLegally)

    const unview_legal = document.getElementById('hidden-legally-blonde-a');
    unview_legal.addEventListener("click", hideLegally);

    const view_heathers = document.getElementById('hidden-heathers-b');
    view_heathers.addEventListener("click", unhideHeathers)

    const unview_heathers = document.getElementById('hidden-heathers-a');
    unview_heathers.addEventListener("click", hideHeathers);
});

