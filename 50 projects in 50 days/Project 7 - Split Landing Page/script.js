const left = document.querySelector('.left')
const right = document.querySelector('.right')
const conatiner = document.querySelector('.container')

left.addEventListener('mouseenter', () => conatiner.classList.add('hover-left'))
left.addEventListener('mouseleave', () => conatiner.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => conatiner.classList.add('hover-right'))
right.addEventListener('mouseleave', () => conatiner.classList.remove('hover-right'))