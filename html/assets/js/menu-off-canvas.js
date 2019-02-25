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
              '<li style="display: none">' +
                '<a href="#0"><span class="title-bar-title i18n-off-canvas-1">Língua</span></a>' +
                '<ul class="menu vertical nested is-active">' +
                  '<li><a href="#0" onclick="I18nTraducao.definirLingua(\'en_GB\');"><img src="/html/assets/img/en_GB.png" style="width: 20px; height: 20px"> <span class="title-bar-title i18n-off-canvas-2">Inglês</span></a></li>' +
                  '<li><a href="#0" onclick="I18nTraducao.definirLingua(\'pt_BR\');"><img src="/html/assets/img/pt_BR.png" style="width: 20px; height: 20px"> <span class="title-bar-title i18n-off-canvas-3">Português</span></a></li>' +
                '</ul>' +
              '</li>' +
              '<li><a href="sobre.html"><i class="fi-info" style="font-size: 20px; color: #1779ba"></i> <span class="title-bar-title i18n-off-canvas-4">Sobre</span></a></li>' +
              '<li><a href="redes-sociais.html"><i class="fi-address-book" style="font-size: 20px; color: #1779ba"></i> <span class="title-bar-title i18n-off-canvas-4">Redes sociais</span></a></li>' +
              '<li><a href="loja.html"><span class="title-bar-title i18n-off-canvas-4"><i class="fi-shopping-bag" style="font-size: 20px; color: #1779ba"></i> Loja</span></a></li>' +
              '<li><a href="mailbox.html"><span class="title-bar-title i18n-off-canvas-4"><i class="fi-mail" style="font-size: 20px; color: #1779ba"></i> Mensagens</span></a></li>' +
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
                '<a href="#" data-toggle="offCanvasLeft" class="menu-flag-pt_BR" style="display: none"><img src="/html/assets/img/pt_BR.png" style="width: 20px; height: 20px" /></a>' +
                '<a href="#" data-toggle="offCanvasLeft" class="menu-flag-en_GB" style="display: none"><img src="/html/assets/img/en_GB.png" style="width: 20px; height: 20px" /></a>' +
                '<a href="loja.html" alt="Loja"><i class="fi-shopping-bag" style="font-size: 20px; color: white"></i><span class="alert badge loja-alerta">!</span></a>' +
                '&nbsp;&nbsp;&nbsp;' +
                '<a href="mailbox.html" alt="Mensagens"><i class="fi-mail" style="font-size: 20px; color: white"></i><span class="alert badge mailbox-nao-lidas" style="display: none;">0</span></a>'+
              '</div>' +
            '</div>' +
        '</div>' +
      '</div>';
$(".off-canvas-wrapper").html(menuOffCavas);
// exibir num. não lidas
if (localStorage['kazaap-mail']) {
    var kazaapMail = JSON.parse(localStorage['kazaap-mail']);
    var mailNumNaoLidas = kazaapMail.naoLidas;
    if (mailNumNaoLidas > 0) {
        $('.mailbox-nao-lidas').html(mailNumNaoLidas.toString());
        $('.mailbox-nao-lidas').css('display', 'inline-block');
    }
}
// exibir alerta na loja
var dataUltimoAcessoLoja = localStorage['kazaap-loja'];
if (dataUltimoAcessoLoja) {
  $('.loja-alerta').css('display', 'none');
  var dataAtual = new Date().getTime();
  if (dataAtual-parseInt(dataUltimoAcessoLoja,10) > (1000 * 60 * 60 * 24)) { //24 horas
      delete localStorage['kazaap-loja'];
  }
}
