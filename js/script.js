// $(document).ready(function () {
//   $("#pikaexe").click(pikarun());
//  });

function pikarun() {
  "use strict"

  console.log("Is this working?");

  let data = 'https://i.imgur.com/g99m5gz.gif'

  var shock = document.createElement('div')
  var img = new Image()
  img.src = data
  img.style.width = '450px'
  img.style.height = '350px'
  img.style.transition = '4s all'
  img.style.position = 'fixed'
  img.style.left = '-400px'
  img.style.bottom = '0px'
  img.style.zIndex = 999999

  document.body.appendChild(img)

  window.setTimeout(function () {
    img.style.left = 'calc(100% + 1000px)'
  }, 50)

  window.setTimeout(function () {
    img.parentNode.removeChild(img)
  }, 4300)


  // let pikaRun = function () {
  //
  //   var shock = document.createElement('div')
  //   var img = new Image()
  //   img.src = data
  //   img.style.width = '450px'
  //   img.style.height = '350px'
  //   img.style.transition = '4s all'
  //   img.style.position = 'fixed'
  //   img.style.left = '-400px'
  //   img.style.bottom = '0px'
  //   img.style.zIndex = 999999
  //
  //   document.body.appendChild(img)
  //
  //   // window.setTimeout(function(){
  //   //   img.style.left = 'calc(50% - 200px)'
  //   // },50)
  //
  //   window.setTimeout(function () {
  //     img.style.left = 'calc(100% + 1000px)'
  //   }, 50)
  //
  //   window.setTimeout(function () {
  //     img.parentNode.removeChild(img)
  //   }, 4300)
  //
  // }
  //
  // // let record = function (e) {
  // //
  // //   if (e.which === key[ck]) {
  // //     ck++
  // //   } else {
  // //     ck = 0
  // //   }
  // //
  // //   if (ck >= max) {
  // //     pikaRun()
  // //     ck = 0
  // //   }
  // //
  // // }
  //
  // let init = function (data) {
  //   $("#pika").addEventListener('click', pikaRun)
  // }
  //
  // let data = 'https://i.imgur.com/g99m5gz.gif'
  //
  // init(data)
}
