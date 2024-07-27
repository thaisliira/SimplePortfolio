// FORMULARIO
function validar(){
    var telemovel=document.formulario.telemovel.value;
        if (isNaN(telemovel)){
            alert("O número inserido não está correto.");
            return false;
        }
        if (telemovel.length!==9){
            alert("O número de telemovel deverá conter 9 digitos.");
            return false;
        }
        if (!telemovel.startsWith(9)) {
            alert("Telemovel não começa com 9.");
            return false;
        }

         
        
    var email=document.formulario.email.value;
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(String(email).toLowerCase())) {
            alert("Email Invalido.");
            return false;
        }
        alert("Obrigado pelo preechimento do formulário. Todos os campos foram preechidos corretamente.")
        return true;}


    
    
// MENU
$('.expandHome').mouseover(function() {
    $('.sub-home').css({
          'display': 'block'
      }); 
  });
  $('.subnavbtn').mouseover(function() {
    $('.sub-home').css({
          'display': 'none'
      }); 
  });
  
  $('#trapezoid').mouseleave(function() {
    $('#trapezoid').css({
          'margin-top': '-53px'
      }); 
      $('.sub-home').css({
          'display': 'none'
      }); 
  }).mouseenter(function() {
    $('#trapezoid').css({
          'margin-top': '0px'
      }); 
  });

  //MAPA
        var fixedLocation = L.latLng(41.1612456002841, -8.599288376273325); 
        var map = L.map('map').setView(fixedLocation, 13);

        var marker = L.marker(fixedLocation).addTo(map);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        function calculateRoute() {
            var destination = document.getElementById("destination").value;
            var url = 'https://nominatim.openstreetmap.org/search?format=json&q=' + destination;

            fetch(url)
                .then(function (response) {
                    return response.json();
                })
                .then(function (json) {
                    var lat = json[0].lat;
                    var lon = json[0].lon;

                    var routeUrl = 'https://www.openstreetmap.org/directions?engine=graphhopper_car&route=' +
                        fixedLocation.lat + ',' + fixedLocation.lng +
                        ';' + lat + ',' + lon;
                    window.open(routeUrl, '_blank');
                });
        }