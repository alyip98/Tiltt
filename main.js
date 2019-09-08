function handleOrientation(event) {
    const {absolute, alpha, beta, gamma} = event;
    const string = `
    time: ${Date()}<br/>
    absolute: ${absolute}<br/>
    alpha: ${alpha}<br/>
    beta: ${beta}<br/>
    gamma: ${gamma}<br/>
    `;
    document.body.innerHTML = string;
}

function init() {
    window.addEventListener("devicemotion", console.log, false);
    window.addEventListener("deviceorientation", console.log, true);

}

window.addEventListener("load", init);
