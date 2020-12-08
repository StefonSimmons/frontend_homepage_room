
const shopNowNav = document.querySelectorAll('.shop-now-nav')

shopNowNav.forEach(nav => {
  const activeArrow = nav.querySelector('.shop-now-arrow-active')
  const arrow = nav.querySelector('.shop-now-arrow')

  nav.addEventListener('mousedown', () => {
    activeArrow.classList.add('active')
  })
  nav.addEventListener('mouseup', () => {
    activeArrow.classList.remove('active')
  })
  nav.addEventListener('mousedown', () => {
    arrow.classList.add('inactive');
  })
  nav.addEventListener('mouseup', () => {
    arrow.classList.remove('inactive');
  })
})