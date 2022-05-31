    //Color palette for the square and navigation background
    let colors = ['aqua', 'lightskyblue', 'mediumaquamarine', 'aquamarine', 'cadetblue', 'cornflowerblue', 'lightseagreen', 'mediumturquoise', 'cyan', 'mediumslateblue', 'mediumspringgreen', 'darkcyan', 'darkseagreen', 'paleturquoise', 'darkturquoise', 'skyblue', 'mediumpurple', 'mediumorchid', 'orchid', 'plum'];
    
    //Color palette for the body background
    let bgColor = ['navy', 'teal', 'blue', 'purple', 'midnightblue', 'darkblue'];
    
    //Id to connect to Html
    let button = document.getElementById('påskägg1');

    button.addEventListener('click', function(){
        var randomColor = colors[Math.floor(Math.random()* colors.length)]
        var bRandomColor = bgColor[Math.floor(Math.random()* bgColor.length)]

        let rektangel = document.getElementById('rektangel');
        let navigation = document.getElementById('nav');
        let bodyBackground = document.getElementById('bbody');

        rektangel.style.background = randomColor;
        navigation.style.background = randomColor;
        bodyBackground.style.background = bRandomColor;
    })

