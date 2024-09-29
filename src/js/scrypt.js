function redirecionarWhatsApp() {
    var numeroWhatsApp = "5581997666251";

    // Mensagem pré-definida
    var mensagem = "Olá, gostaria de mais informações!";

    // Codifica a mensagem para ser usada na URL
    var mensagemCodificada = encodeURIComponent(mensagem);

    // Monta a URL de redirecionamento para o WhatsApp
    var urlWhatsApp = "https://wa.me/" + numeroWhatsApp + "?text=" + mensagemCodificada;

    // Redireciona o usuário
    window.location.href = urlWhatsApp;
}

function gtag_report_conversion(url) {
    var callback = function () {
        if (typeof(url) != 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-16717290137/xAyNCKaVwdcZEJm1tqM-', 'event_callback': callback 
    });
    return false;
}

function whatsappConversion (){
    redirecionarWhatsApp();
    gtag_report_conversion();
}