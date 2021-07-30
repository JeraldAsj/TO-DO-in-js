function list() {
    let values = document.getElementById("your-to-do").value
    if (values == '') {
        alert('you must write something');
    } else {

        let td = document.createElement('tr')
        let btn = document.createElement('button')
        let li = document.createElement('i')
        li.setAttribute('class', 'fa fa-trash-o fa-lg')
        td.setAttribute('id', 'tr')
        btn.setAttribute('onclick', 'delet(event)')
        btn.setAttribute('id', 'remove')
        btn.appendChild(li)
        td.appendChild(btn)
        td.append(values)

        document.getElementById("items").append(td)
        document.getElementById("your-to-do").value = ''
    }
}

function clearall() {
    document.getElementById("items").innerHTML = ''
}

function delet(ev) {
    let confirmAction = confirm("Are you want to delet this");
    if (confirmAction) {
        ev.target.parentNode.parentNode.remove()
        alert("Action successfully executed");
    } else {
        alert("Action canceled");
    }


}