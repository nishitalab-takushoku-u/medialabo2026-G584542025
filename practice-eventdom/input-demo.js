function greeting() {
    let i = document.querySelector('input[name="shimei"]');
    let name = i.value;
    let p =document.querySelector('p#message');
    p.textContent = 'こんにちは'+name+'さん';
}
let b = document.querySelector('button[id="print"]');
 b.addEventListener('click', greeting);