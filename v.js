let btnRed = document.querySelector('#btn-red');
let btnGreen = document.querySelector('#btn-green');
let btnBlue = document.querySelector('#btn-blue');
let dropdown = document.querySelector('select');


btnRed.addEventListener('click', () => {
    document.body.style.background = 'red';
})

btnGreen.addEventListener('click', () => {
    document.body.style.background = 'green';
})

btnBlue.addEventListener('click', () => {
    document.body.style.background = 'blue';
})

dropdown.addEventListener('change', function () {
    const color = this.value;

     switch (color) {
        case 'red':
            document.body.style.background = 'red';
            break;
        case 'green':
            document.body.style.background = 'green';
            break;
        case 'blue':
            document.body.style.background = 'blue';
            break;
        default:
            document.body.style.background = 'white';
    } 

    if(color === 'default'){
        document.body.style.background = 'white';
    }else {
        document.body.style.background = color;
    }
})