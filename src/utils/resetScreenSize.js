const screenSize = {
  screen:{
    width:1920,
    height:1080,
    scale:20
  }//大屏设计宽高
}

let init = () => {
  console.log(window.innerHeight + ',' + window.innerWidth)
  let _el = document.getElementById('indexPage')

  let pageH = window.innerHeight
  let pageW = window.innerWidth
  console.log('pageH:' + pageH)
  console.log('pageW:' + pageW)
  let isWider = (pageW / screenSize.screen.width) > (pageH / screenSize.screen.height)
  console.log(isWider)
  if (isWider) {
    _el.style.height = window.innerHeight + 'px'// '100%';
    _el.style.width = screenSize.screen.width * pageH / screenSize.screen.height + 'px'
    _el.style.top = '0px'
    _el.style.left = (window.innerWidth - pageH * screenSize.screen.width / screenSize.screen.height) * 0.5 + 'px'
    console.log(_el.style.width + ',' + _el.style.height)
  } else {
    _el.style.width = window.innerWidth + 'px'// '100%';
    _el.style.height = screenSize.screen.height * pageW / screenSize.screen.width + 'px'
    _el.style.top = 0.5 * (window.innerHeight - pageW * screenSize.screen.height / screenSize.screen.width) + 'px'
    _el.style.left = '0px'
    console.log('_el.style.width' + _el.style.width)
    console.log('_el.style.height' + _el.style.height)
  }
  console.log('pageW / screenSize.screen.width' + pageW / screenSize.screen.width)
  console.log((_el.clientWidth / screenSize.screen.scale) + 'px')
  document.documentElement.style.fontSize = (_el.clientWidth / screenSize.screen.scale) + 'px'
}

export function pageResize () {
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  window.addEventListener(resizeEvt, init, false)
  document.documentElement.addEventListener('DOMContentLoaded', init, false)
  init()
}
