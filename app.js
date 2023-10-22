var inputDate = document.querySelector("#input-Date");
var inputMonth = document.querySelector("#input-Month");
var btnGetResult = document.querySelector("#btn-GetResult");
var txtOutput = document.querySelector("#txt-Output");

var serverURL = "https://newsapi.org/v2/everything"

function getRequestedURL(toMonth, toDate) {

    return serverURL + "?q=tesla&" + "to=2023-" + toMonth + "-" + toDate + "&sortBy=publishedAt&apiKey=8bf005cd0af64bd19a181db9334d4743"
}


function clickEventListener() {
    var toDate = inputDate.value;
    var toMonth = inputMonth.value;

    if(toMonth == 9) {
        if (toDate >= 20 && toDate <= 30) {
            fetch(getRequestedURL(toMonth, toDate))
                .then(response => response.json())
                .then(json => {

                    var outputText = "Total Articles Found: " + json.articles.length + "\n\n";
                    // Loop through all articles and add them to the outputText
                    json.articles.forEach((article, index) => {
                        outputText += "Article No: " + (index + 1) + "." + "\n\n Title: " + article.title + "\n\n";
                        outputText += "   Description: " + article.description + "\n\n";
                        outputText += "   Published At: " + article.publishedAt + "\n\n";
                        outputText += "   URL: " + article.url + "\n\n\n\n";
                    });

                    // Set the entire outputText in txtOutput
                    txtOutput.innerText = outputText;
                })
                .catch(error => alert("Server is down!! Sorry, you can try again later..."));
        } else {
            txtOutput.innerText = "Data is not found for this date. For the month of september we have articles from  2023-09-20 to 2023-09-30"
        }
    } else if (toMonth == 10) {
        if (toDate >= 1 && toDate <= 21) {
            fetch(getRequestedURL(toMonth, toDate))
                .then(response => response.json())
                .then(json => {

                    var outputText = "Total Articles Found: " + json.articles.length + "\n\n";
                    // Loop through all articles and add them to the outputText
                    json.articles.forEach((article, index) => {
                        outputText += "Article No: " + (index + 1) + "." + "\n\n Title: " + article.title + "\n\n";
                        outputText += "   Description: " + article.description + "\n\n";
                        outputText += "   Published At: " + article.publishedAt + "\n\n";
                        outputText += "   URL: " + article.url + "\n\n\n\n";
                    });

                    // Set the entire outputText in txtOutput
                    txtOutput.innerText = outputText;
                })
                .catch(error => alert("Server is down!! Sorry, you can try again later..."));
        } else {
            txtOutput.innerText = "Data is not found for this date. For the month of october we have articles from  2023-10-01 to the day before today"
        }

    } else {
        txtOutput.innerText = "Data is not found for this Month. Articles available from (2023-09-20 to the day before today"
    }
}



btnGetResult.addEventListener("click", clickEventListener);