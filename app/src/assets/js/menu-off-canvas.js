var menuOffCavas = '' +
    '<div class="off-canvas-wrapper-inner" data-off-canvas-wrapper>' +
        '<div class="off-canvas position-left" id="offCanvasLeft" data-off-canvas>' +
          '<!-- left off-canvas markup -->' +
            '<button class="close-button" aria-label="Close menu" type="button" data-close>' +
                '<span aria-hidden="true">&times;</span>' +
            '</button>' +
            '<br />' +
            '<br />' +
            '<ul class="vertical menu" data-accordion-menu>' +
              '<li><a href="sobre.html"><i class="fi-info" style="font-size: 20px; color: #1779ba"></i> <span class="title-bar-title i18n-off-canvas-4">Sobre</span></a></li>' +
              '<li><a href="redes-sociais.html"><i class="fi-address-book" style="font-size: 20px; color: #1779ba"></i> <span class="title-bar-title i18n-off-canvas-4">Redes sociais</span></a></li>' +
              '<li><a href="loja.html"><span class="title-bar-title i18n-off-canvas-4"><i class="fi-shopping-bag" style="font-size: 20px; color: #1779ba"></i> Loja</span></a></li>' +
              '<li><a href="mailbox.html"><span class="title-bar-title i18n-off-canvas-4"><i class="fi-mail" style="font-size: 20px; color: #1779ba"></i> Mensagens</span></a></li>' +
              '<li><a href="sincronizar.html"><span class="title-bar-title i18n-off-canvas-4"><i class="fi-loop" style="font-size: 20px; color: #1779ba"></i> Sincronizar</span></a></li>' +
            '</ul>' +
        '</div>' +
        '<div class="off-canvas position-right" id="offCanvasRight" data-off-canvas data-position="right">' +
          '<!-- right off-canvas markup -->' +
        '</div>' +
        '<div class="off-canvas-content" data-off-canvas-content>' +
            '<div class="title-bar">' +
              '<div class="title-bar-left">' +
                '<!-- Fire Off-canvas -->' +
                '<button class="menu-icon" type="button" data-toggle="offCanvasLeft"></button>' +
                '<span class="title-bar-title i18n-off-canvas-5">Kazapp</span>' +
              '</div>' +
              '<div class="title-bar-right" style="display: block">' +
                '<button class="menu-icon" type="button" style="display: none"></button>' +
                '<a href="sincronizar.html" alt="Sincronizar"><i class="fi-loop" style="font-size: 20px; color: white"></i><span class="alert badge aviso-sincronizar">!</span></a>' +
                '&nbsp;&nbsp;&nbsp;' +
                '<a href="loja.html" alt="Loja"><i class="fi-shopping-bag" style="font-size: 20px; color: white"></i><span class="alert badge loja-alerta">!</span></a>' +
                '&nbsp;&nbsp;&nbsp;' +
                '<a href="mailbox.html" alt="Mensagens"><i class="fi-mail" style="font-size: 20px; color: white"></i><span class="alert badge mailbox-nao-lidas" style="display: none;">0</span></a>'+
                '&nbsp;&nbsp;&nbsp;' +
              '</div>' +
            '</div>' +
        '</div>' +
      '</div>';
$(".off-canvas-wrapper").html(menuOffCavas);
// exibir num. não lidas
if (localStorage['kazapp-mail']) {
    var kazappMail = JSON.parse(localStorage['kazapp-mail']);
    var mailNumNaoLidas = kazappMail.naoLidas;
    if (mailNumNaoLidas > 0) {
        $('.mailbox-nao-lidas').html(mailNumNaoLidas.toString());
        $('.mailbox-nao-lidas').css('display', 'inline-block');
    }
}
// exibir alerta na loja
var dataUltimoAcessoLoja = localStorage['kazapp-loja'];
if (dataUltimoAcessoLoja) {
  $('.loja-alerta').css('display', 'none');
  var dataAtual = new Date().getTime();
  if (dataAtual-parseInt(dataUltimoAcessoLoja,10) > (1000 * 60 * 60 * 24)) { //24 horas
      delete localStorage['kazapp-loja'];
  }
}
// exibir alerta de sincronização de id de usuário
if (localStorage['kazapp-aviso-sincronizar'] == 'false') {
     $('.aviso-sincronizar').css('display', 'none');
}
// atualiza o path das urls
if (window.location.pathname.indexOf('/aulas/') !== -1) {
    $('.off-canvas-wrapper-inner a').each(function() {
        var href = $(this).attr('href');
        $(this).attr('href', '../../' + href);
    });
}