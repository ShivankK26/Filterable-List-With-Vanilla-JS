let searchInput = document.getElementById('searchInput');
let fruitList = document.querySelectorAll('.list-group > *');


searchInput.onkeyup = (e) => {
    let search = e.target.value.toLowerCase()
    for(let i of fruitList){
        let item = i.innerHTML.toLowerCase()
        if (item.indexOf(search) === -1)
        {
            i.classList.add('hide')
        } else {
            i.classList.remove('hide')
        }
    }
};