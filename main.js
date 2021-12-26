const input = document.querySelector('input');
const result = document.querySelector('.result');



input.addEventListener('input', function () {
    const  str = input.value;
    const strWoSpace = str.replace(/ /g, '');
    input.value = strWoSpace
    const count0fStr = str.length;
    result.innerHTML = count0fStr;
})

input.addEventListener('click', function (){
    input.value = '';
    result.innerHTML = '';
})