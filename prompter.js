let paras = [];
let displaymode = false;
let i = 0;
let output = document.querySelector("output");
const changedisplay = () => {
    displaymode = !displaymode;
    document.body.className = displaymode ? 'prompter' : '';
}
const start = () => {
    let script = document.querySelector('textarea').value;
    paras = script.split("\n");
    paras = paras.filter(paras => paras.length > 0);
    changedisplay();
    i = 0;
}
const navigate = (step) => {
    i += step;
    i = Math.max(i,0);
    i = i % paras.length;
    output.innerHTML = `${paras[i]}`;
}
const end = () => {
    changedisplay();
    output.innerHTML = '';
}
document.addEventListener('keyup', function (event) {
    if (displaymode) {
        if (event.key == 'ArrowRight') {
            navigate(1);
        }
        if (event.key == 'ArrowLeft') {
            navigate(-1);
        }
        if (event.key == 'Escape') {
            end();
        }
    }
});
window.addEventListener('click', function (event) {
    if (displaymode) {
        if (event.target.nodeName == 'BUTTON' && event.target.className == 'close') {
            end();
        } else {
            navigate(0);
        }
    }
});
document.querySelector('button').addEventListener('click', e => {
    start();
});