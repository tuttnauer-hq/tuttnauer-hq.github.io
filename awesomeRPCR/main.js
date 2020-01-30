
document.getElementById('input-file').addEventListener('change', getFile)

var iterationCount = 1000;
var keySize = 128;
var encryptionKey;
var iv;
var salt;

var aesUtil = new AesUtil(keySize, iterationCount);

function getFile(event) {
    const input = event.target
    if ('files' in input && input.files.length > 0) {
        placeFileContent(
        document.getElementById('content-target'),
        input.files[0])
    }
}


function placeFileContent(target, file) {
  readFileContent(file).then(content => {
      debugger;
//      var encodedData = window.atob(content);
      encryptionKey = getParameterByName('key');
      salt = iv = content.slice(0, 32);
      content = content.slice(32);
      var plaintext =  aesUtil.decrypt(salt, iv, encryptionKey, content);
      target.value = JSON.stringify(JSON.parse(plaintext), null, "\t");
    }).catch(error => console.log(error))
}


function readFileContent(file) {
    const reader = new FileReader()
    return new Promise((resolve, reject) => {
            reader.onload = event => resolve(event.target.result)
            reader.onerror = error => reject(error)
            reader.readAsText(file)
        })
}


function download() {
    let fileName = document.getElementById('input-file').value;
    let  fileContent = document.getElementById('content-target').value;

    var element = document.createElement('a');
    var encodedData =  salt + aesUtil.encrypt(salt, iv, encryptionKey, fileContent);
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(encodedData));
    element.setAttribute('download', fileName);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

  function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

