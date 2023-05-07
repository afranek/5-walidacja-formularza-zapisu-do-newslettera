let newsletterForm = document.getElementById('form');
let allAgreeChx = document.getElementById('all');



const validate = (event) => {

    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('1');
    let errors = document.getElementById('errors');

    errors.innerHTML = ''; //wypisze sie tylko raz error

    if (txtName.value.trim() === '') { //funkcja trim ucina biale znaki z lewej i prawej strony stringa
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imię i nazwisko!';
        errors.appendChild(liError);
    }
    if (txtEmail.value.trim() === '') { //funkcja trim ucina biale znaki z lewej i prawej strony stringa
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz Adres Email!';
        errors.appendChild(liError);
    }

    if (!txtEmail.value.includes('@')) { //dziala tylko przy input type="text"
        let liError = document.createElement('li');
        liError.innerText = 'Adres email musi zawierać @!';
        errors.appendChild(liError);
    }

    if (!agree1.checked) { 
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziłes Zgody 1';
        errors.appendChild(liError);
    }

    //warunek jesli wypelnilismy formularz nieprawidlowo blokujemy mozliwosc wysylania formularza, jesli jest ok to mozna wyslac
    if(errors.children.length > 0) {
        event.preventDefault(); //blokada wysylania formularza
    }
    
}

newsletterForm.addEventListener('submit',validate);

const allAgree = (event) => {

    let agree1 = document.getElementById('1');
    let agree2 = document.getElementById('2');

    console.log(event.target.checked); // sprawdzanie stanu checkboxa
    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;

}

allAgreeChx.addEventListener('change',allAgree);

