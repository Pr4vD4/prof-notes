import anime from 'animejs/lib/anime.es.js';

import touch_position from "touch-position";

export class Game {
    constructor(gameElement) {

        this.gameElement = gameElement
        this.position = touch_position()

        this.levelMap = [5, 6, 0, 1, 2, 3, 4]
        this.level = [null, null, null, null, null, null, null]

        this.createGrid()
        this.createClef()
        this.createNotes()

        this.success = false
    }

    createGrid() {
        let yStart = this.gameElement.querySelector('#line-1').getBoundingClientRect().top
        let clefContainer = this.gameElement.querySelector('.clef-container')

        for (let i = 0; i < 13; i++) {
            for (let j = 0; j < 7; j++) {

                let noteContainer = document.createElement('div')
                noteContainer.dataset.note = String((i) % 7)
                noteContainer.dataset.pos = String(j)
                noteContainer.classList.add('note-container', 'drag-container')
                noteContainer.style.left = `calc((90%/7) * ${j} + 10%)`
                noteContainer.style.top = `calc(${yStart}px + (2.5vh / 2 * 3) - (2.5vh * ${i}))`

                this.gameElement.append(noteContainer)
            }
        }
        clefContainer.style.top = `calc(${yStart}px - (2.5vh * ${4}))`

    }

    addEvents = (obj) => {

        let dragItems = this.gameElement.querySelectorAll('.drag-item')
        let position = touch_position()


        dragItems.forEach((dragItem) => {

            dragItem.addEventListener('touchmove', this.drag)
            dragItem.addEventListener('touchend', (event) => {this.checkContainerCollision(event, obj)} )

        })

    }

    drag = (event) => {

        if (this.position[0] + event.target.getBoundingClientRect().width / 2 < window.innerWidth &&
            this.position[0] - event.target.getBoundingClientRect().width / 2 > 0 &&
            this.position[1] - event.target.getBoundingClientRect().height / 2 > 0 &&
            this.position[1] + event.target.getBoundingClientRect().height / 2 < window.innerHeight
        ) {

            anime({
                targets: event.target,
                translateX: `calc(${this.position[0] - event.target.getBoundingClientRect().width / 2}px )`,
                translateY: `calc(${this.position[1] - event.target.getBoundingClientRect().height / 2}px )`,
                easing: 'linear',
                duration: 20,
                update: () => {

                }
            })
        }

    }

    checkContainerCollision = (event, obj) => {

        let container = document.elementsFromPoint(this.position[0], this.position[1]).filter((dom) => {
            return dom.classList.contains('drag-container')
        })[0]
        if (container) {
            this.fixToContainer(event.target, container)
        } else {
            try {
                this.levelDeleteNote(container, event.target)
            } catch (e) {

            }

        }

        if (equalsCheck(this.level, this.levelMap)) {
            obj.success = true
        }

    }

    fixToContainer = (item, container) => {

        const position = container.getBoundingClientRect()

        if (item.classList.contains('clef')) {
            anime({
                targets: item,
                translateX: position.x + 'px',
                translateY: `${position.y - item.getBoundingClientRect().height / 2}px`
            })
        } else {
            this.levelAppend(container, item)
            anime({
                targets: item,
                translateX: position.x + position.width / 2 - item.getBoundingClientRect().width / 2 + 'px',
                translateY: position.y + 'px'
            })
        }

        console.log(this.level.toString())

    }

    levelAppend = (container, item) => {
        if (item.dataset.currentPos !== container.dataset.pos) {
            this.levelDeleteNote(container, item)
        }
        item.dataset.currentNote = container.dataset.note
        item.dataset.currentPos = container.dataset.pos
        this.level[container.dataset.pos] = container.dataset.note
    }

    levelDeleteNote = (container, item) => {
        this.level[+item.dataset.currentPos] = null
    }

    createClef() {
        let clef = document.createElement('div')
        clef.classList.add('drag-item', 'clef')
        this.gameElement.append(clef)
    }

    createNotes() {
        for (let i = 0; i < 7; i++) {
            let note = document.createElement('div')
            note.classList.add('drag-item', 'note')
            this.gameElement.append(note)
        }

    }

}

function equalsCheck(a, b) {
    return a.toString() === b.toString()

}