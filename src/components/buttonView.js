gsap.registerPlugin(MorphSVGPlugin);

document.querySelectorAll('.button').forEach(button => {
    let div = button.querySelector('div'),
        path = button.querySelector('svg path'),
        letters = button.textContent.trim().split(''),
        dest = 2;

    div.innerHTML = '';

    function elements(letter, index, array) {

        let element = document.createElement('span'),
            part = (index >= array.length / 2) ? -1 : 1,
            position = (index >= array.length / 2) ? array.length / 2 - index + (array.length / 2 - 1) : index,
            move = position / (array.length / 2),
            rotate = 1 - move;

        element.innerHTML = !letter.trim() ? '&nbsp;' : letter;
        element.style.setProperty('--move', move);
        element.style.setProperty('--rotate', rotate);
        element.style.setProperty('--part', part);

        div.appendChild(element);

    }

    letters.forEach(elements);

    button.addEventListener('mouseenter', e => {
        if(!button.classList.contains('out')) {
            button.classList.add('in');
            gsap.to(path, {
                keyframes: [{
                    morphSVG: 'M0 12C0 12 60 ' + 8 + ' 100 ' + 8 + 'C140 ' + 8 + ' 200 12 200 12V56C200 56 140 ' + 52 + ' 100 ' + 52 + 'C60 ' + 52 + ' 0 56 0 56V12Z',
                    ease: 'power1.out',
                    duration: .265
                }, {
                    morphSVG: 'M0 12C0 12 60 ' + 12 + ' 100 ' + 12 + 'C140 ' + 12 + ' 200 12 200 12V56C200 56 140 ' + 56 + ' 100 ' + 56 + 'C60 ' + 56 + ' 0 56 0 56V12Z',
                    ease: 'elastic.out(1, .5)',
                    duration: .715
                }]
            });
        }
    });

    button.addEventListener('mouseleave', e => {
        if(button.classList.contains('in')) {
            button.classList.add('out');
            gsap.to(path, {
                keyframes: [{
                    morphSVG: 'M0 12C0 12 60 ' + 16 + ' 100 ' + 16 + 'C140 ' + 16 + ' 200 12 200 12V56C200 56 140 ' + 60 + ' 100 ' + 60 + 'C60 ' + 60 + ' 0 56 0 56V12Z',
                    ease: 'power1.out',
                    duration: .265
                }, {
                    morphSVG: 'M0 12C0 12 60 ' + 12 + ' 100 ' + 12 + 'C140 ' + 12 + ' 200 12 200 12V56C200 56 140 ' + 56 + ' 100 ' + 56 + 'C60 ' + 56 + ' 0 56 0 56V12Z',
                    ease: 'elastic.out(1, .5)',
                    duration: .715,
                    onComplete() {
                        button.classList.remove('in', 'out')
                    }
                }]
            });
        }
    });
});
