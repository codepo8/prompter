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
const next = () => {
    output.innerHTML = `${paras[i]}`;
    // output.innerHTML = `${paras[i]} <span>(${i + 1}/${paras.length})</span>`;
    i++;
    i = i % paras.length;
}
document.addEventListener('keyup', function (event) {
    if (displaymode) {
        if (event.key == 'ArrowRight') {
            next();
        }
        if (event.key == 'Escape') {
            changedisplay();
            output.innerHTML = '';
        }
    }
});
window.addEventListener('click', function (event) {
    if (displaymode) {
        next();
    }
});
document.querySelector('button').addEventListener('click', e => {
    start();
});
