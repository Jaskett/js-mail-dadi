const btn = document.getElementById('sub');
let user_points = document.getElementById('user_points');
let pc_points = document.getElementById('pc_points');

btn.addEventListener('click',
    function() {
        let pc_try = Math.ceil(Math.random() * 5) + 1;
        let user_try = Math.ceil(Math.random() * 5) + 1;

        user_points.innerHTML = `Il punteggio dell'utente è ${user_try}`;
        user_points.classList = 'pad-y';
        pc_points.innerHTML = `Il punteggio del PC é ${pc_try}`;
        pc_points.classList = 'pad-y';

        let result;

        if(pc_try > user_try) {
            result = "Hai perso!";
        } else if (user_try > pc_try) {
            result = "Hai vinto!";
        } else {
            result = "Pareggio!";
        }

        let risultato = document.getElementById('risultato');
        risultato.innerHTML = result;

        risultato.style.display = 'block';
        risultato.className = 'risultato';

        if(result == 'Hai vinto!') {
            risultato.style.backgroundColor = 'LightGreen';
        } else if(result == 'Hai perso!') {
            risultato.style.backgroundColor = "Red";
        } else {
            risultato.style.backgroundColor = "LightGrey";
        }

        console.log(result);
    }
);