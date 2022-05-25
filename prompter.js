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
    i++;
    i = i % paras.length;
}
document.addEventListener('keyup', function(event){
    if (displaymode) {
        if(event.key == 'ArrowRight'){next();}
        if(event.keyCode == 27){changedisplay();output.innerHTML = '';}
    }
});
window.addEventListener('click', function(event){
    if (displaymode) {
        next();
    }
});
document.querySelector('button').addEventListener('click', e => {
    start();
});
