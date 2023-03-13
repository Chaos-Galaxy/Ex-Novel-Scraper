//--- Functions
function log(vari){console.log(vari)}
function getLink (selector){return document.querySelector(selector).href}
function getHtml(selector) {return document.querySelector(selector).innerHTML}

//--- Code
if (localStorage.enableDownload == 'yes'){

var data = localStorage.data
if (data == undefined){data = ''}

var data = data + getHtml('div.chr-c')

localStorage.setItem('data', data)

window.location = getLink('a#next_chap')
}