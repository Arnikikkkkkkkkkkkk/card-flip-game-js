const { it } = require("@jest/globals");

it('should draw the difficulty selection screen', () => {
    const gameMenuButton = document.querySelector('.game_button');

    gameMenuButton.addEventListener('click', () => {
        location.reload();
    });

    assert.equal()
});