let currentX = 0;
let currentY = 0;
let tgX = 0;
let tgY = 0;

document.addEventListener('DOMContentLoaded', (e) => {
    const interactiveBubble = document.querySelector('.interactive')

    function move() {
        currentX += (tgX - currentX) / 20
        currentY += (tgY - currentY) / 20

        interactiveBubble.style.transform = 'translate(' + Math.round(currentX) + 'px, ' + Math.round(currentY) + 'px)'

        requestAnimationFrame((e) => {
            move()
        })
    }
    
    window.addEventListener('mousemove', (e) => {
        tgX = e.clientX
        tgY = e.clientY
        console.log(tgX)
    })

    move()
})