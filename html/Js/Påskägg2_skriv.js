
window.onload = function(){
    var påsk = document.getElementById('påsk');
    var modalWrapper = document.querySelector('.modalWrapper');
    //Skapar en variabel som håller knappkoden för 1.
    var firstNumber = 49;
    
    //Funktionen som visar upp popup rutan som annars är gömd
    function showModal() {
        modalWrapper.classList.remove("hide");
    }
    //Funktionen som gömmer undan poprutan igen.
    function hideModal(){
        modalWrapper.classList.add("hide");
    }

    window.onkeydown= function(gfg){
        //Functionen startar när kombinationen av shift och 1 har tryckts ner.
        if(gfg.keyCode === firstNumber && gfg.shiftKey){
            showModal();

            modalWrapper.addEventListener("click", function(e){
                if(e.target === modalWrapper){
                    hideModal();
                }
            });
        };
    };
};  