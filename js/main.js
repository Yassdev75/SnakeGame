var child1 = document.getElementById('child');

function lowOpacity() {
    var child = child1;
    child.classList.toggle("low-opacity");
    setTimeout(function() {
        child.classList.toggle("display-none");
    }, 500);
};

function updateCount() {
    let x = document.getElementById('testo');
    for (let i = 3; i > -1; i--) {
        console.log(i);
        let a = i;
        return a
    }
    x.innerHTML = a;
}
updateCount();