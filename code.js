var curImg = 0;
var totalImg = 7;

function gotoNext(){
    curImg++;
    console.log("next image" + curImg);
    $("#progressbar").attr("aria-valuenow", curImg*(100/totalImg));
    $("#progressbar").css("width", curImg*(100/totalImg)+"%");
    $("#bg"+curImg).fadeIn(1000);
    if(curImg !== totalImg)
        setTimeout(gotoNext, 2000)
}

function part2(){
    $("#pt2").fadeIn(1000);
    setTimeout(function(){
        $(".final").fadeIn(1000);
    }, 1000);
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {lat: 51.917354, lng: 4.433469}
    });

    var polu = new google.maps.Polygon({
        paths: [
            {lat: 52.020958, lng: 3.952111},
            {lat: 52.020958, lng: 4.954895},
            {lat: 51.779387, lng: 4.954895},
            {lat: 51.779387, lng: 3.952111}
        ],
        strokeColor: '#ff0311',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#ff0311',
        fillOpacity: 0.35
    });
    polu.setMap(map);

    google.maps.event.addListener(polu, 'click', function (event) {
        curImg = 0;
        gotoNext();
    });
}