//Evitar repetição botão bem-vindo
$(function() {
    closeOverlay();

    setTimeout(function() {$('#overlay').hide()}, 1000);
    $('.navigation-links a').click(function(e){
        var target = $(this);
        $('#overlay').show()
        e.preventDefault();
        openOverlay();
        setTimeout(function(){
            console.log(target)
            window.location.href = target.attr('href');
        },1000,target);
    })
    });

    function closeOverlay(){
        document.getElementById('overlay').style.left = "120%";
        }
    function openOverlay(){
        document.getElementById('overlay').style.left = "-20%";
    }

    
    //RSS
    function carregar() {
        var url = 'https://news.google.com/rss?hl=pt-PT&gl=PT&ceid=PT:pt-150';
        $.ajax({
            url:"https://api.rss2json.com/v1/api.json?rss_url=" + url,
            type: 'GET',
            success: function (data) {
                $('#box-image').hide();
                $('#box').show();
                objeto_json = eval(data);
                    var frase = "";
                    for (i = 0; i < 3; i++) {
                        frase += "Título: <b>" + objeto_json.items[i].title + "</b><br/>";
                        frase += objeto_json.items[i].description + "<br/>";
                    }
                    var i=0;
                    while(i<2){
                        frase += "Título: <b>" + objeto_json.items[i].title + "</b><br/>";
                        frase += objeto_json.items[i].description + "<br/>";
                        i++;
                    }
                
                    $("#box").html(frase);
                    },
            
                error: function (xhr, status) {
                    alert('Ocorreu um erro.');
                }
                       
            });
        }
             
    
        // MENU DE NAVEGAÇÃO
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

     // Galeria
     function openModal() {
        document.getElementById("myModal").style.display = "block";
      }
      
      function closeModal() {
        document.getElementById("myModal").style.display = "none";
      }
      
      var slideIndex = 1;
      showSlides(slideIndex);
      
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
      }

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
            alert("O email é inválido.");
            return false;
        }
        alert("Obrigado pelo preechimento do formulário. Todos os campos foram preechidos corretamente.")
        return true;}
    

    //orçamento
    function calcularorcamento(){
        let orcamentoTotal = 0;
        let precoTipopagina = 0;
        precoTipopagina = +document.getElementById('tipopagina').value;
        document.getElementById('valor-tipopagina').value = precoTipopagina ;

        const form = document.getElementById("checkboxGroup");
        let contar = 0;
        let somaPaginas = 0;
        for (let i = 0; i < form.elements.length; i++) {
            const element = form.elements[i];
            if (element.type === "checkbox" && element.checked) {
                contar++;
                somaPaginas += parseInt(element.value);
            }
        }

        const prazo = +document.getElementById('prazo').value;
		let desconto = 1;
		if (prazo > 0){
			switch (prazo){
				case 1:
					desconto *=.95;
					break;
				case 2:
					desconto *= .9;
					break;
				case 3:
                    desconto *= .85;
					break;
				default:
                    desconto*= .8;
					break;
			}
		}

        const result = document.getElementById("resultado");
        orcamentoTotal = (precoTipopagina + somaPaginas) * desconto;
        result.innerHTML = `Número de páginas selecionadas: ${contar}. Valor total da soma a adicionar ao orçamento: ${orcamentoTotal}.`;
    }
      

    
    