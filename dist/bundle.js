(() => {
    'use strict';
    var e = {
            17: () => {
                window.application = {
                    blocks: {},
                    screens: {},
                    renderScreen: function (e) {
                        window.application.screens[''.concat(e)]();
                    },
                    renderBlock: function (e, a) {
                        window.application.blocks[''.concat(e)](a);
                    },
                    timers: [],
                };
            },
        },
        a = {};
    function t(n) {
        var s = a[n];
        if (void 0 !== s) return s.exports;
        var c = (a[n] = { exports: {} });
        return e[n](c, c.exports, t), c.exports;
    }
    (() => {
        t(17);
        const e = {
            card1: {
                name: '6_clubs',
                src: 'static/cards/6_clubs.png',
                card_upside: 'static/Upside.png',
            },
            card2: {
                name: '7_clubs',
                src: 'static/cards/7_clubs.png',
                card_upside: 'static/Upside.png',
            },
            card3: {
                name: '8_clubs',
                src: 'static/cards/8_clubs.png',
                card_upside: 'static/Upside.png',
            },
            card4: {
                name: '9_clubs',
                src: 'static/cards/9_clubs.png',
                card_upside: 'static/Upside.png',
            },
            card5: {
                name: '10_clubs',
                src: 'static/cards/10_clubs.png',
                card_upside: 'static/Upside.png',
            },
            card6: {
                name: 'J_clubs',
                src: 'static/cards/J_clubs.png',
                card_upside: 'static/Upside.png',
            },
            card7: {
                name: 'Q_clubs',
                src: 'static/cards/Q_clubs.png',
                card_upside: 'static/Upside.png',
            },
            card8: {
                name: 'K_clubs',
                src: 'static/cards/K_clubs.png',
                card_upside: 'static/Upside.png',
            },
            card9: {
                name: 'A_clubs',
                src: 'static/cards/A_clubs.png',
                card_upside: 'static/Upside.png',
            },
            card10: {
                name: '6_diamonds',
                src: 'static/cards/6_diamonds.png',
                card_upside: 'static/Upside.png',
            },
            card11: {
                name: '7_diamonds',
                src: 'static/cards/7_diamonds.png',
                card_upside: 'static/Upside.png',
            },
            card12: {
                name: '8_diamonds',
                src: 'static/cards/8_diamonds.png',
                card_upside: 'static/Upside.png',
            },
            card13: {
                name: '9_diamonds',
                src: 'static/cards/9_diamonds.png',
                card_upside: 'static/Upside.png',
            },
            card14: {
                name: '10_diamonds',
                src: 'static/cards/10_diamonds.png',
                card_upside: 'static/Upside.png',
            },
            card15: {
                name: 'J_diamonds',
                src: 'static/cards/J_diamonds.png',
                card_upside: 'static/Upside.png',
            },
            card16: {
                name: 'Q_diamonds',
                src: 'static/cards/Q_diamonds.png',
                card_upside: 'static/Upside.png',
            },
            card17: {
                name: 'K_diamonds',
                src: 'static/cards/K_diamonds.png',
                card_upside: 'static/Upside.png',
            },
            card18: {
                name: 'A_diamonds',
                src: 'static/cards/A_diamonds.png',
                card_upside: 'static/Upside.png',
            },
            card19: {
                name: '6_hearts',
                src: 'static/cards/6_hearts.png',
                card_upside: 'static/Upside.png',
            },
            card20: {
                name: '7_hearts',
                src: 'static/cards/7_hearts.png',
                card_upside: 'static/Upside.png',
            },
            card21: {
                name: '8_hearts',
                src: 'static/cards/8_hearts.png',
                card_upside: 'static/Upside.png',
            },
            card22: {
                name: '9_hearts',
                src: 'static/cards/9_hearts.png',
                card_upside: 'static/Upside.png',
            },
            card23: {
                name: '10_hearts',
                src: 'static/cards/10_hearts.png',
                card_upside: 'static/Upside.png',
            },
            card24: {
                name: 'J_hearts',
                src: 'static/cards/J_hearts.png',
                card_upside: 'static/Upside.png',
            },
            card25: {
                name: 'Q_hearts',
                src: 'static/cards/Q_hearts.png',
                card_upside: 'static/Upside.png',
            },
            card26: {
                name: 'K_hearts',
                src: 'static/cards/K_hearts.png',
                card_upside: 'static/Upside.png',
            },
            card27: {
                name: 'A_hearts',
                src: 'static/cards/A_hearts.png',
                card_upside: 'static/Upside.png',
            },
            card28: {
                name: '6_spades',
                src: 'static/cards/6_spades.png',
                card_upside: 'static/Upside.png',
            },
            card29: {
                name: '7_spades',
                src: 'static/cards/7_spades.png',
                card_upside: 'static/Upside.png',
            },
            card30: {
                name: '8_spades',
                src: 'static/cards/8_spades.png',
                card_upside: 'static/Upside.png',
            },
            card31: {
                name: '9_spades',
                src: 'static/cards/9_spades.png',
                card_upside: 'static/Upside.png',
            },
            card32: {
                name: '10_spades',
                src: 'static/cards/10_spades.png',
                card_upside: 'static/Upside.png',
            },
            card33: {
                name: 'J_spades',
                src: 'static/cards/J_spades.png',
                card_upside: 'static/Upside.png',
            },
            card34: {
                name: 'Q_spades',
                src: 'static/cards/Q_spades.png',
                card_upside: 'static/Upside.png',
            },
            card35: {
                name: 'K_spades',
                src: 'static/cards/K_spades.png',
                card_upside: 'static/Upside.png',
            },
            card36: {
                name: 'A_spades',
                src: 'static/cards/A_spades.png',
                card_upside: 'static/Upside.png',
            },
        };
        var a = document.querySelector('.app');
        function n() {
            a.innerHTML = '';
            var e = document.createElement('div');
            e.classList.add('game_screen', 'center'),
                a.appendChild(e),
                (window.application.blocks.game = d),
                window.application.renderBlock('game', e),
                (window.application.blocks.cardField = o),
                window.application.renderBlock('cardField', e);
        }
        function s() {
            a.innerHTML = '';
            var e = document.createElement('div');
            e.classList.add('end_of_game'),
                a.appendChild(e),
                (window.application.blocks.youLoose = r),
                window.application.renderBlock('youLoose', e);
        }
        function c() {
            a.innerHTML = '';
            var e = document.createElement('div');
            e.classList.add('end_of_game'),
                a.appendChild(e),
                (window.application.blocks.youWin = p),
                window.application.renderBlock('youWin', e);
        }
        function i(e) {
            var a = [],
                t = document.createElement('div');
            t.classList.add('choose_level_div'), a.push(t);
            var s = document.createElement('p');
            s.classList.add('choose_level_title'),
                t.appendChild(s),
                (s.textContent = 'Выбери сложность');
            var c = document.createElement('div');
            c.classList.add('choose_level_form'), t.appendChild(c);
            var i = document.createElement('button');
            i.classList.add('choose_level_button_easy', 'level_button'),
                c.appendChild(i),
                (i.textContent = '1');
            var d = document.createElement('button');
            d.classList.add('choose_level_button_medium', 'level_button'),
                c.appendChild(d),
                (d.textContent = '2');
            var o = document.createElement('button');
            o.classList.add('choose_level_button_hard', 'level_button'),
                c.appendChild(o),
                (o.textContent = '3');
            var r = document.createElement('button');
            r.classList.add('choose_level_button'),
                t.appendChild(r),
                (r.textContent = 'Старт'),
                a.forEach(function (a) {
                    e.appendChild(a);
                }),
                i.addEventListener('click', function (e) {
                    (window.application.level = 'easy'),
                        i.classList.add('level_button_click'),
                        d.classList.remove('level_button_click'),
                        o.classList.remove('level_button_click');
                }),
                d.addEventListener('click', function (e) {
                    (window.application.level = 'medium'),
                        d.classList.add('level_button_click'),
                        i.classList.remove('level_button_click'),
                        o.classList.remove('level_button_click');
                }),
                o.addEventListener('click', function (e) {
                    (window.application.level = 'hard'),
                        o.classList.add('level_button_click'),
                        i.classList.remove('level_button_click'),
                        d.classList.remove('level_button_click');
                }),
                r.addEventListener('click', function (e) {
                    e.preventDefault(),
                        (window.application.screens.game = n),
                        window.application.renderScreen('game');
                });
        }
        function d(e) {
            var a = document.createElement('div');
            a.classList.add('game_menu');
            var t = document.createElement('div');
            t.classList.add('game_timer_menu');
            var n = document.createElement('p');
            n.classList.add('game_time'),
                (n.textContent = 'min'),
                t.appendChild(n);
            var s = document.createElement('p');
            s.classList.add('game_time'),
                (s.textContent = 'sek'),
                t.appendChild(s);
            var c = document.createElement('p');
            c.classList.add('game_timer'), (c.textContent = '00:00');
            var i,
                d = 0,
                o = 0;
            function r() {
                ++d >= 60 && ((d = 0), o++),
                    (c.textContent =
                        (o > 9 ? o : '0' + o) + ':' + (d > 9 ? d : '0' + d)),
                    p();
            }
            function p() {
                i = setTimeout(r, 1e3);
            }
            setTimeout(function () {
                p();
            }, 5e3),
                (window.application.stopTimer = function () {
                    clearTimeout(i);
                    var e = (o > 9 ? o : '0' + o) + ':' + (d > 9 ? d : '0' + d);
                    return (d = 0), (o = 0), e;
                }),
                a.appendChild(c);
            var l = document.createElement('button');
            l.classList.add('game_button'),
                (l.textContent = 'Начать заново'),
                a.appendChild(l),
                e.appendChild(t),
                e.appendChild(a),
                l.addEventListener('click', function () {
                    location.reload();
                });
        }
        function o(a) {
            var t = document.createElement('div');
            t.classList.add('card_field'),
                (window.application.chosenCard = []),
                (window.application.winCounter = 0);
            var n = [];
            if ('easy' == window.application.level)
                for (var i = 0; i < 3; i++) {
                    var d = Math.floor(Math.random() * Object.values(e).length);
                    n.push(Object.values(e)[d]);
                }
            else if ('medium' == window.application.level)
                for (i = 0; i < 6; i++)
                    (d = Math.floor(Math.random() * Object.values(e).length)),
                        n.push(Object.values(e)[d]);
            else {
                if ('hard' != window.application.level) return;
                for (i = 0; i < 9; i++)
                    (d = Math.floor(Math.random() * Object.values(e).length)),
                        n.push(Object.values(e)[d]);
            }
            var o = n.concat(n);
            !(function (e) {
                for (var a, t = e.length - 1; t > 0; t--) {
                    var n = Math.floor(Math.random() * (t + 1));
                    (a = [e[n], e[t]]), (e[t] = a[0]), (e[n] = a[1]);
                }
            })(o),
                Object.entries(o).forEach(function (e) {
                    e[0];
                    var a = e[1],
                        n = document.createElement('img');
                    n.setAttribute('id', a.name),
                        n.setAttribute('src', a.src),
                        n.classList.add('card', 'card_hidden'),
                        t.appendChild(n),
                        setTimeout(function () {
                            n.setAttribute('src', a.card_upside);
                        }, 5e3),
                        n.addEventListener('click', function () {
                            n.setAttribute('src', a.src),
                                n.classList.add('card_animation'),
                                2 !== window.application.chosenCard.length &&
                                    window.application.chosenCard.push(n.id),
                                2 === window.application.chosenCard.length &&
                                    window.application.chosenCard[0] ===
                                        window.application.chosenCard[1] &&
                                    ((window.application.chosenCard = []),
                                    window.application.winCounter++),
                                2 === window.application.chosenCard.length &&
                                    window.application.chosenCard[0] !==
                                        window.application.chosenCard[1] &&
                                    ((window.application.chosenCard = []),
                                    (window.application.screens.youLoose = s),
                                    window.application.renderScreen('youLoose'),
                                    window.application.stopTimer()),
                                'easy' === window.application.level &&
                                    3 === window.application.winCounter &&
                                    ((window.application.screens.youWin = c),
                                    window.application.renderScreen('youWin'),
                                    window.application.stopTimer()),
                                'medium' === window.application.level &&
                                    6 === window.application.winCounter &&
                                    ((window.application.screens.youWin = c),
                                    window.application.renderScreen('youWin'),
                                    window.application.stopTimer()),
                                'hard' === window.application.level &&
                                    9 === window.application.winCounter &&
                                    ((window.application.screens.youWin = c),
                                    window.application.renderScreen('youWin'),
                                    window.application.stopTimer());
                        });
                }),
                a.appendChild(t);
        }
        function r(e) {
            var a = [],
                t = document.createElement('img');
            t.setAttribute('src', 'static/loose.png'),
                t.classList.add('loose_image'),
                a.push(t);
            var n = document.createElement('p');
            n.classList.add('you_loose_title'),
                (n.textContent = 'Вы проиграли!'),
                a.push(n);
            var s = document.createElement('p');
            s.classList.add('time_for_play'),
                (s.textContent = 'Затраченное время:'),
                a.push(s);
            var c = document.createElement('p');
            c.classList.add('time'),
                (c.textContent = window.application.stopTimer()),
                a.push(c);
            var i = document.createElement('button');
            i.classList.add('you_loose_button'),
                (i.textContent = 'Играть снова'),
                a.push(i),
                i.addEventListener('click', function () {
                    location.reload();
                }),
                a.forEach(function (a) {
                    e.appendChild(a);
                });
        }
        function p(e) {
            var a = [],
                t = document.createElement('img');
            t.setAttribute('src', 'static/win.png'),
                t.classList.add('win_image'),
                a.push(t);
            var n = document.createElement('p');
            n.classList.add('you_win_title'),
                (n.textContent = 'Вы выиграли!'),
                a.push(n);
            var s = document.createElement('p');
            s.classList.add('time_for_play'),
                (s.textContent = 'Затраченное время:'),
                a.push(s);
            var c = document.createElement('p');
            c.classList.add('time'),
                (c.textContent = window.application.stopTimer()),
                a.push(c);
            var i = document.createElement('button');
            i.classList.add('you_win_button'),
                (i.textContent = 'Играть снова'),
                a.push(i),
                i.addEventListener('click', function () {
                    location.reload();
                }),
                a.forEach(function (a) {
                    e.appendChild(a);
                });
        }
        (window.application.screens.chooseLevel = function () {
            var e = document.createElement('div');
            e.classList.add('choose_level_screen'),
                a.appendChild(e),
                (window.application.blocks.chooseLevel = i),
                window.application.renderBlock('chooseLevel', e);
        }),
            window.application.renderScreen('chooseLevel');
    })();
})();
//# sourceMappingURL=bundle.js.map