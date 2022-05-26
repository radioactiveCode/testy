
//alert("strona została załadowana");

function klikD()
{
    //alert("wywołanie funkcji DODAJ");
    const kafelek = document.createElement('div');
    kafelek.setAttribute("class","guzik");
    const wstawka = document.getElementById("kontener");
    wstawka.appendChild(kafelek);
}

function klikU()
{
    //alert("wywołanie funkcji USUŃ");
    //const kafelek = document.createElement('div');
    //kafelek.setAttribute("class","guzik");
    const kasuj = document.getElementById("kontener");
    kasuj.removeChild(kasuj.lastElementChild);
}
		
var elemD=document.getElementById("pasek");
var elemU=document.getElementById("pasek1");

elemD.addEventListener('click', klikD);
elemU.addEventListener('click', klikU);

       