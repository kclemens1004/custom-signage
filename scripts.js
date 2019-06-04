function calculateCost() {
    var titleText = document.getElementById('title-text');
    var customSignage = document.getElementById('custom-signage');
    var cost = customSignage.value.length * 5;
    titleText.innerText = "$ " + cost;
    console.log(cost);
}

var actionButton = document.getElementById('action-button');
actionButton.onclick = calculateCost;

