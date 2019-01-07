var menuOffCavas = '' +
    '<div class="off-canvas-wrapper-inner" data-off-canvas-wrapper>' +
        '<div class="off-canvas position-left" id="offCanvasLeft" data-off-canvas>' +
          '<!-- left off-canvas markup -->' +
            '<button class="close-button" aria-label="Close menu" type="button" data-close>' +
                '<span aria-hidden="true">&times;</span>' +
            '</button>' +
            '<br />' +
            '<br />' +
            '<ul class="vertical menu">' +
              '<li><a href="#">One</a></li>' +
              '<li><a href="#">Two</a></li>' +
              '<li><a href="#">Three</a></li>' +
              '<li><a href="#">Four</a></li>' +
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
                '<span class="title-bar-title i18n-off-canvas-1">Kazapp - Java e Algoritmos</span>' +
              '</div>' +
              '<div class="title-bar-right" style="display: none">' +
                '<button class="menu-icon" type="button"></button>' +
              '</div>' +
            '</div>' +
        '</div>' +
      '</div>';
$(".off-canvas-wrapper").html(menuOffCavas);
