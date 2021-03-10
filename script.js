let close = document.querySelectorAll('.icon-close');
const buttons = document.querySelectorAll(".btn");
let alert = document.querySelectorAll('.alert')

let alertSuccess = document.querySelector('#alertSuccess')
let alertInfo = document.querySelector('#alertInfo')
let alertWarning = document.querySelector('#alertWarning')
let alertError = document.querySelector('#alertError')


//funcion para ucultar los alerts
const alertHide = (item) => {
    item.classList.remove('show')
    item.classList.add('hide')
}

//funcion para mostrar los alerts
const alertShow = (item) => {
    item.classList.add('show')
    item.classList.remove('hide')
    item.classList.add('showAlert')
    //los alerts le ocultaran automaticamente despues de 5s
    setTimeout(() => {
        item.classList.remove('show')
        item.classList.add('hide')
    }, 5000);
}

//obtenemos los id de los botones
const alerts = (e) => {
    switch (e.target.id) {
        case "success":
            alertShow(alertSuccess)
            break;
        case "info":
            alertShow(alertInfo)
            break;
        case "warning":
            alertShow(alertWarning)
            break;
        case "error":
            alertShow(alertError)
            break;
    }
}

//obtenemos los id de los botones close
const iconAlerts = (event) => {
    switch (event.target.id) {
        case "closeS":
            alertHide(alertSuccess)
            break;
        case "closeI":
            alertHide(alertInfo)
            break;
        case "closeW":
            alertHide(alertWarning)
            break;
        case "closeE":
            alertHide(alertError)
            break;
    }
}
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        //efecto waves
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripple = document.createElement("span");
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        btn.appendChild(ripple);
        setTimeout(function() {
            ripple.remove();
        }, 600);
        alerts;
    })
    //mostrar los alerts
    btn.addEventListener('click', alerts);
});

//cerrar los alerts
close.forEach((close) => {
    close.addEventListener('click', iconAlerts);
})