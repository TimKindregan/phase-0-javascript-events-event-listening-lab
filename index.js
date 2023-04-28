function addingEventListener() {
    const input = document.getElementById('button')

    function clickAlert () {
        alert("I was clicked! Hehe");
    }

    input.addEventListener('click', clickAlert);
}
