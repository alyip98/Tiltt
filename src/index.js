function handleOrientation(event) {
    const {absolute, alpha, beta, gamma} = event;
    const string = `absolute: ${absolute}<br/>
    alpha: ${alpha}<br/>
    beta: ${beta}<br/>
    gamma: ${gamma}<br/>
    `;
    document.body.innerHTML = string;
}

window.addEventListener("deviceorientation", handleOrientation, true);
