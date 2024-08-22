// Keyboard event handler
document.addEventListener('keydown', function(event) {
    //(event.key === ' ') && successAttemp();

    const key = event.key.toLowerCase();

    switch (key) {
        case 'q':
            setBuff('quas');
            break;
        case 'w':
            setBuff('wex');
            break;
        case 'e':
            setBuff('exort');
            break;
        case 'r':
            ultiBuff();
            break;
        case 'd':
            castSpell(1);
            break;
        case 'f':
            castSpell(2);
            break;
    }
});
