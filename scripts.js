var actionButton = document.getElementById('action-button');
var error = document.getElementById('error');
var field = document.getElementById('field');
var resultText = document.getElementById('result-text');
var resultPrice = document.getElementById('result-price');
var resultBlock = document.getElementById('result');
var customSignage = document.getElementById('custom-signage');

var priced = false;

function clickControl () {
    if (priced === false) {
        calculateCost();
    }

    else {
        priced = false;
        resultBlock.style.display = "none";
        field.style.display = "";
        actionButton.innerText = "SHOW COST";
        customSignage.value = "";
    }
}

function calculateCost() {

    if (customSignage.value.length > 4) {
    
        var cost = customSignage.value.length * 5;

        resultText.innerText = customSignage.value;
        resultPrice.innerText = "$" + cost;
        error.innerText = "";
        field.style.display = "none";
        resultBlock.style.display = "flex";
        actionButton.innerText = "START OVER";
        priced = true;
    }

    else {
        error.innerText = "5 character minimum!";
    }

}


actionButton.onclick = clickControl;

