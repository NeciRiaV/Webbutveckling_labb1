fetch('Yrkeserfarenhet.json')
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
        var mainContainer = document.getElementById("erfarenhet");
        for (var i = 0; i < data.length; i++) {
            var div = document.createElement("div");
            div.innerHTML = '<h3>' + data[i].Företag + '<br><h5> ' + data[i].Arbete + ' <br><p>' + data[i].Period + '<br>' + data[i].Period2 +'<hr>';
            mainContainer.appendChild(div);
        }
    }