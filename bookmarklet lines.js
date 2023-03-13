//--- Download Novel
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);}

download(document.querySelector('a.novel-title').innerText + '.html', localStorage.data)

//--- Start Download
if (localStorage.enableDownload == 'no'){
localStorage.setItem('enableDownload', 'yes')
}

else {
localStorage.setItem('enableDownload', 'no')
}

//--- Clear Data
localStorage.setItem('data', '')