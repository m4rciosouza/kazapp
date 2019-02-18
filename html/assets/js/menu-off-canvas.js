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
              '<li><a href="sobre.html"><span class="title-bar-title i18n-off-canvas-4">Sobre</span></a></li>' +
              '<li><a href="redes-sociais.html"><span class="title-bar-title i18n-off-canvas-4">Redes sociais</span></a></li>' +
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
              '<div class="title-bar-right" style="display: none">' +
                '<button class="menu-icon" type="button" style="display: none"></button>' +
                '<a href="#" data-toggle="offCanvasLeft" class="menu-flag-pt_BR"><img src="/html/assets/img/pt_BR.png" style="width: 20px; height: 20px">' +
                '<a href="#" data-toggle="offCanvasLeft" class="menu-flag-en_GB" style="display: none"><img src="/html/assets/img/en_GB.png" style="width: 20px; height: 20px">' +
              '</div>' +
            '</div>' +
        '</div>' +
      '</div>';
$(".off-canvas-wrapper").html(menuOffCavas);
