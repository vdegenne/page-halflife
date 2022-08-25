let seconds = 0;
let focus = true;
const interval = setInterval(function () {
  if (focus) {
    seconds++;
    div.textContent = `${seconds}s`
    if (seconds > 60 * 5) {
      div.style.backgroundColor = 'red'
    }
  }
  else {}
}, 1000)

const div = document.createElement('div')
div.setAttribute('style', 'background-color:black;left:0;position:fixed;bottom:0;font-size:10px')
div.addEventListener('click', function (e) {
  const left = parseInt(div.style.left)
  if (isNaN(left)) {
    div.style.left = '0'
    div.style.right = 'initial'
  }
  else {
    div.style.left = 'initial'
    div.style.right = '0'
  }
})
div.addEventListener('contextmenu', function (e) {
  e.preventDefault()
  div.remove()
  clearInterval(interval)
})
document.body.appendChild(div)


window.addEventListener('blur', function (e) {
  focus = false
})
window.addEventListener('focus', function (e) {
  focus = true
})