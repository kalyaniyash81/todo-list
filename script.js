let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');

btn.addEventListener('click', function() {
    let list = document.createElement('li');
    list.innerText = inp.value;

    let btndel = document.createElement('button');
    btndel.innerText = 'delete';
    btndel.classList.add("delete");
    list.appendChild(btndel);

    ul.appendChild(list);
    inp.value = "";
});

ul.addEventListener('click', function(event) {
    if (event.target.nodeName === "BUTTON") {
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("deleted");
    }
});
