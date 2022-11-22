function chooseLevelScreen() {
    const chooseLevel = document.createElement('div');
    chooseLevel.classList.add('choose_level_screen');
    app.appendChild(chooseLevel);

    window.application.blocks['chooseLevel'] = chooseLevelBlock;
    window.application.renderBlock('chooseLevel', chooseLevel);
};



// chooseLevelStage.forEach(element => {
//     element.addEventListener("click", function (event) {
//         document.querySelectorAll('.level-button').forEach(element => {
//             element.classList.remove('level-button');
//         });
//         chosenLevelNumber = element.textContent;
//         element.classList.toggle('level-button');
//     });
// });

window.application.screens['chooseLevel'] = chooseLevelScreen;
window.application.renderScreen('chooseLevel');

function gameScreen() {
    app.innerHTML = '';
    const game = document.createElement('div');
    game.classList.add('game_screen', 'center');
    app.appendChild(game);

    window.application.blocks['game'] = gameBlock;
    window.application.renderBlock('game', game);


};