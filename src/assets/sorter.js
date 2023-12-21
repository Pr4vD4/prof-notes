import touch_position from "touch-position";
import anime from 'animejs/lib/anime.es.js';


export class SorterGame {
    constructor(sorter) {
        this.success = false

        this.unsortedSharp = 0
        this.sharp = new Set()

        this.unsortedflat = 0
        this.flat= new Set()

        this.unsortedNatural = 0
        this.natural = new Set()

        this.count(sorter)
    }

    count(sorter) {
        this.unsortedSharp = sorter.querySelectorAll('.sharp').length
        this.unsortedflat = sorter.querySelectorAll('.flat').length
        this.unsortedNatural = sorter.querySelectorAll('.natural').length

    }


}

export function startDragNDrop(sorterGame) {
    let position = touch_position()
    let dragItems = document.querySelectorAll('.drag-item')


    dragItems.forEach((dragItem) => {

        let maxX = window.innerWidth - dragItem.getBoundingClientRect().width - 100
        let maxY = window.innerHeight - dragItem.getBoundingClientRect().height - 100

        dragItem.style.transform = `translateX(${randrange(100, maxX)}px) translateY(${randrange(100, maxY)}px)`
        dragItem.addEventListener('touchmove', drag)
        dragItem.addEventListener('touchend', checkContainerCollision)

        let dragContainer = document.querySelector('#' + dragItem.dataset.target)
        let dragContainerPositions = dragContainer.getBoundingClientRect()

        let dragItemPosition = dragItem.getBoundingClientRect()

        if (dragItemPosition.x >= dragContainerPositions.x &&
            dragItemPosition.x < dragContainerPositions.x + dragContainerPositions.width &&
            dragItemPosition.y + dragItemPosition.height / 2 > dragContainerPositions.y &&
            dragItemPosition.y + dragItemPosition.height / 2 < dragContainerPositions.y + dragContainerPositions.height
        ) {
            collisionTarget(dragItem, sorterGame)
        }

    })

    console.log(sorterGame)
    function drag(event) {

        if (position[0] + event.target.getBoundingClientRect().width / 2 < window.innerWidth &&
            position[0] - event.target.getBoundingClientRect().width / 2 > 0 &&
            position[1] - event.target.getBoundingClientRect().height / 2 > 0 &&
            position[1] + event.target.getBoundingClientRect().height / 2 < window.innerHeight
        ) {
            anime({
                targets: event.target,
                translateX: position[0] - event.target.getBoundingClientRect().width / 2 + 'px',
                translateY: position[1] - event.target.getBoundingClientRect().height / 2 + 'px',
                easing: 'linear',
                duration: 20,
                update: () => {

                }
            })
        }

    }

    function checkContainerCollision(event) {

        let dragContainer = document.querySelector('#' + event.target.dataset.target)
        let dragContainerPositions = dragContainer.getBoundingClientRect()

        let dragItemPosition = event.target.getBoundingClientRect()

        if (dragItemPosition.x >= dragContainerPositions.x &&
            dragItemPosition.x < dragContainerPositions.x + dragContainerPositions.width &&
            dragItemPosition.y + dragItemPosition.height / 2 > dragContainerPositions.y &&
            dragItemPosition.y + dragItemPosition.height / 2 < dragContainerPositions.y + dragContainerPositions.height
        ) {

            collisionTarget(event.target, sorterGame)
            fixToContainer(event.target)
            console.log(sorterGame)

        } else {
            sorterGame[event.target.dataset.target].delete(event.target)
            console.log(sorterGame)
        }

        if (sorterGame.sharp.size === sorterGame.unsortedSharp &&
            sorterGame.flat.size === sorterGame.unsortedflat &&
            sorterGame.natural.size === sorterGame.unsortedNatural
        ) {
            console.log('congratulations')
            sorterGame.success = true
        }


    }

}

function randrange(min, max) {
    return Math.random() * (max - min) + min;
}

function collisionTarget(item, sorterGame) {
    sorterGame[item.dataset.target].add(item)
}

function fixToContainer(item) {
    if (item.classList.contains('img')) {
        const container = document.querySelector('#'+item.dataset.target)
        const position = container.getBoundingClientRect()

        anime({
            targets: item,
            translateX: '10vw',
            translateY: position.y+'px'
        })

    }

}