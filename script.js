let input = document.querySelector('.input')
let btn = document.getElementById('btn')  
let ul = document.querySelector('.list')
let btn1 = document.getElementById('btn1') 


btn.addEventListener('click', () => {
    if(input.value.trim() === "") return; 
    let li = document.createElement('li')
    li.classList.add('note')
    li.innerHTML = `
        ${input.value}
        <div class="editDelete">
            <span>🖋️</span>
            <span>🗑️</span>
        </div>
    `
    ul.appendChild(li)
    input.value = "" 
})


btn1.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
