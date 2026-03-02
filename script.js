function findLaptop() {

    var budget = parseInt(document.getElementById("budget").value);
    var ram = parseInt(document.getElementById("ram").value);
    var storage = parseInt(document.getElementById("storage").value);
    var processor = parseInt(document.getElementById("processor").value);

    var laptops = [
        {name:"HP Pavilion", price:55000, ram:8, storage:512, processor:7},
        {name:"Dell Inspiron", price:60000, ram:16, storage:512, processor:8},
        {name:"Lenovo IdeaPad", price:50000, ram:8, storage:256, processor:6},
        {name:"Acer Aspire", price:70000, ram:16, storage:512, processor:9},
        {name:"MacBook Air", price:90000, ram:8, storage:256, processor:9},
        {name:"HP Victus", price:75000, ram:16, storage:512, processor:9}
    ];

    var results = [];

    for(var i = 0; i < laptops.length; i++) {

        var score = 0;

        // Budget match (closer price = higher score)
        var priceDifference = Math.abs(laptops[i].price - budget);
        score += 100 - (priceDifference / 1000);

        // RAM match
        if(laptops[i].ram == ram) {
            score += 50;
        }

        // Storage match
        if(laptops[i].storage == storage) {
            score += 30;
        }

        // Processor importance
        score += laptops[i].processor * 10;

        laptops[i].score = score;

        // Only consider laptops near budget
        if(laptops[i].price <= budget + 20000) {
            results.push(laptops[i]);
        }
    }

    // Sort manually (simple bubble style logic)
    for(var j = 0; j < results.length; j++) {
        for(var k = j+1; k < results.length; k++) {
            if(results[j].score < results[k].score) {
                var temp = results[j];
                results[j] = results[k];
                results[k] = temp;
            }
        }
    }

    var resultDiv = document.getElementById("output");
    resultDiv.innerHTML = "<h2>Top Recommendations</h2>";

    for(var m = 0; m < 3 && m < results.length; m++) {
        resultDiv.innerHTML +=
        "<div class='result'>" +
        "<h3>" + results[m].name + "</h3>" +
        "<p>Price: ₹" + results[m].price + "</p>" +
        "<p>RAM: " + results[m].ram + " GB</p>" +
        "<p>Storage: " + results[m].storage + " GB</p>" +
        "<p>Processor Score: " + results[m].processor + "</p>" +
        "<p><b>Match Score: " + results[m].score.toFixed(2) + "</b></p>" +
        "</div>";
    }

    if(results.length == 0) {
        resultDiv.innerHTML = "<p>No laptops found within your budget range.</p>";
    }
}