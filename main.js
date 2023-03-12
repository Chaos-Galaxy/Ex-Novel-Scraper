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

function getHtml(selector) {
	return document.querySelector(selector).innerHTML
}

//--- Get Novel Data

novel_title = getText('h3.title')
novel_cover = 'https://novelfull.com' + getSrc('div.book img')

novel_author = getListText('ul.info', 1)
novel_genre = getListText('ul.info', 2)

log(novel_title)
log(novel_cover)
log(novel_author)
log(novel_genre)

//--- Download Chapter