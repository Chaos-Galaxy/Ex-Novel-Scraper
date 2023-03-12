//--- Other Functs
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


//--- Functions
function log(vari){console.log(vari)}

function getText(selector) {
	return document.querySelector(selector).innerText
}

function getListText(selector, num){
	return document.querySelector(selector).childNodes[num].innerText
}

function getSrc (selector){
	return document.querySelector(selector).getAttribute('src')
}

function getLink (selector){
	return document.querySelector(selector).href
}

function getHtml(selector) {
	return document.querySelector(selector).innerHTML
}

//--- Code

var data = localStorage.data

if (data == undefined){data = ''}

var data = data + getHtml('div.chr-c')

localStorage.setItem('data', data)

window.location = getLink('a#next_chap')

//download('book.html', localStorage.data)