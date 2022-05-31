fetch('Utbildning.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
    function appendData(data) {
        var mainContainer = document.getElementById("utbildning");
        for (var i = 0; i < data.length; i++) {
            var div = document.createElement("div");
            div.innerHTML = '<h3>' + data[i].Skolning + '<br><h5> ' + data[i].Plats + ' <br>' + data[i].Period + '<hr>';
            mainContainer.appendChild(div);
            }
        }