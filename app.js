let a = 0;

function recursVariable() {
    if (a < 10) {
        a += 2;
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = a;
        recursVariable();
    }
}

recursVariable();