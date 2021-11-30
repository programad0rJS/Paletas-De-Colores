const Color = document.querySelector('#Color');
const Salida = document.querySelector('#Salida');



const setColor = () => {
    const Josue = Color.value;

    Salida.textContent = Josue



}



Color.addEventListener('input', setColor)