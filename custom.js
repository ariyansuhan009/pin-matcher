// 1. Use Common Function

//Empty Value
function emptyValue(id){
    document.getElementById(id).value = '';
}

// Empty Text
function emptyText(id){
    document.getElementById(id).innerText = '';
}

// Display None
function displayNone(id){
    document.getElementById(id).style.display = "none";
}

// Display Block
function displayBlock(id){
    document.getElementById(id).style.display = "block";
}


// 2. Genarate Random Number
function randomNumFun(){
    var randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('generateNum').value = randomNumber;

    emptyValue('inputPin');
    displayNone('matched');
    displayNone('unmatched');
    displayNone('tryContent');
}

// 3. Input Number Value
function btnKey(id){
    let preValue = document.getElementById('inputPin').value;
    let key = document.getElementById(id).innerHTML;
    document.getElementById('inputPin').value = preValue + key;
}


// 4. Clean / Clear Input Text
function clean(){
    document.getElementById('inputPin').value = '';
}

// 5. Clean Last Value / Backspace Button

function cleanLast(){
    var inputResult = document.getElementById('inputPin').value;
    var removeValue = inputResult.slice(0, inputResult.length - 1);
    document.getElementById('inputPin').value = removeValue;
}

// 6. Submit Button (Pin Maching)

function submitBtn(){
    var randomNum = document.getElementById('generateNum').value;
    var typeNum = document.getElementById('inputPin').value;
     
    // 7. Pin matching Condition
    if(randomNum == typeNum){
        displayBlock('matched');
        displayNone('unmatched');
        displayNone('tryContent');
    }else{
        displayBlock('unmatched');
        displayNone('matched');
        tryLeft('tryLeft');
        displayBlock('tryContent');
    }
}

// 8. Pin Match Error
function tryLeft(id){
    var tryAgain = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML -= 1;
    if(tryAgain == '1'){
        disableBtn('submit');
    } 
}

// 9 try Left Expired -Submit Button Disable
function disableBtn(id){
    let button = document.getElementById(id);
    button.style.cursor = 'not-allowed';
    button.setAttribute('disabled', 'true');
    button.tittle = "Please Reload Page";
}