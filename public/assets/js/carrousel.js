// function esVisible(elem){
//     /* Ventana de Visualización*/
//     var posTopView = $(window).scrollTop();
//     var posButView = posTopView + $(window).height();
//     /* Elemento a validar*/
//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();
//     /* Comparamos los dos valores tanto del elemento como de la ventana*/
//     return ((elemBottom < posButView && elemBottom > posTopView) || (elemTop >posTopView && elemTop< posButView));
// }

// $("button").on("click", function() {
//   var ele = document.getElementById('holamundo');
//   console.log(esVisible(ele));
// });

// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("myP").className = "test";
//   } else {
//     document.getElementById("myP").className = "";
//   }
// }

let html = `<div class="icon-cards__content add_animation">
<div class="icon-cards__item d-flex align-items-center justify-content-center" id="card_frontend">
  <div class="card__father">
    <div class="card">
      <div class="card__front" style="background-image: url(assets/img/habilities/frontend.jpg);">
        <div class="bg"></div>
        <div class="body__card_front">
          <img src="assets/img/logo/tap_red.png" id="tap_1" alt="">
          <h1></h1>
        </div>
      </div>
      <div class="card__back">
        <div class="body__card_back">
          <h1>Desarrollo movil & Frontend.</h1>

          <div class="galeria">
            <div class="card-block">
              <p class="text-center-tooltip">
                <span class="mytooltip tooltip-effect-1">

                  <img src="assets/img/habilities/flutter.png" class="tooltip-item" alt="">
                  <span class="tooltip-content clearfix">
                    <img src="assets/img/habilities/flutter.png">
                    <span class="tooltip-text">Manejo avanzado de desarrollo multiplataforma con
                      <strong>Flutter.</strong></span>
                  </span>
                </span>
              </p>

            </div>

            <div class="card-block">
              <p class="text-center-tooltip">
                <span class="mytooltip tooltip-effect-1">
                  <img src="assets/img/habilities/java.png" class="tooltip-item" alt="">
                  <span class="tooltip-content clearfix">
                    <img src="assets/img/habilities/java.png">
                    <span class="tooltip-text">Manejo intermedio de desarrollo nativo con
                      <strong>Java.</strong></span>
                  </span>
                </span>
              </p>

            </div>

            <div class="card-block">
              <p class="text-center-tooltip">
                <span class="mytooltip tooltip-effect-1">
                  <img src="assets/img/habilities/html.png" class="tooltip-item" alt="">
                  <span class="tooltip-content clearfix">
                    <img src="assets/img/habilities/html.png">
                    <span class="tooltip-text">Manejo basico de <strong>HTML-5.</strong></span>
                  </span>
                </span>
              </p>

            </div>
            <div class="card-block">
              <p class="text-center-tooltip">
                <span class="mytooltip tooltip-effect-1">
                  <img src="assets/img/habilities/css.png" class="tooltip-item" alt="">
                  <span class="tooltip-content clearfix">
                    <img src="assets/img/habilities/css.png">
                    <span class="tooltip-text">Manejo basico de <strong>CSS</strong> y
                      <strong>Bootstrap.</strong></span>
                  </span>
                </span>
              </p>

            </div>
            <div class="card-block">
              <p class="text-center-tooltip">
                <span class="mytooltip tooltip-effect-1">
                  <img src="assets/img/habilities/swift.png" class="tooltip-item" alt="">
                  <span class="tooltip-content clearfix">
                    <img src="assets/img/habilities/swift.png">
                    <span class="tooltip-text">Estructuración de aplicaciones basicas con
                      <strong>Swift.</strong></span>
                  </span>
                </span>
              </p>

            </div>

            <div class="card-block">
              <p class="text-center-tooltip">
                <span class="mytooltip tooltip-effect-1">
                  <img src="assets/img/habilities/ionic.png" class="tooltip-item" alt="">
                  <span class="tooltip-content clearfix">
                    <img src="assets/img/habilities/ionic.png">
                    <span class="tooltip-text">Manejo intermedio de desarrollo hibrido con
                      <strong>Ionic.</strong></span>
                  </span>
                </span>
              </p>

            </div>
          </div>
        </div>
        <div class="card-footer">
          <small class="text-muted">Para mas información poner el cursor sobre la imagen.</small>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="icon-cards__item d-flex align-items-center justify-content-center" id="card_backend">
  <div class="card__father">
    <div class="card">
      <div class="card__front" style="background-image: url(assets/img/habilities/backend.jpg);">
        <div class="bg"></div>
        <div class="body__card_front">
          <img src="assets/img/logo/tap_red.png" id="tap_2" alt="">
          <h1></h1>
        </div>
      </div>
      <div class="card__back">
        <div class="body__card_back">
          <h1>Desarrollo web & Backend.</h1>

          <div class="galeria">
            <div class="card-block">
              <p class="text-center-tooltip">
                <span class="mytooltip tooltip-effect-1">
                  <img src="assets/img/habilities/node.png" class="tooltip-item" alt="">
                  <span class="tooltip-content clearfix">
                    <img src="assets/img/habilities/node.png">
                    <span class="tooltip-text">Manejo basico de <strong>NodeJs.</strong></span>
                  </span>
                </span>
              </p>
            </div>

            <div class="card-block">
              <p class="text-center-tooltip">
                <span class="mytooltip tooltip-effect-1">
                  <img src="assets/img/habilities/php.png" class="tooltip-item" alt="">
                  <span class="tooltip-content clearfix">
                    <img src="assets/img/habilities/php.png">
                    <span class="tooltip-text">Manejo basico intermedio de <strong>php</strong> y framework
                      como
                      <strong>Laravel.</strong></span>
                  </span>
                </span>
              </p>
            </div>

            <div class="card-block">
              <p class="text-center-tooltip">
                <span class="mytooltip tooltip-effect-1">
                  <img src="assets/img/habilities/python.png" class="tooltip-item" alt="">
                  <span class="tooltip-content clearfix">
                    <img src="assets/img/habilities/python.png">
                    <span class="tooltip-text">Manejo basico de desarrollo web con
                      <strong>Python.</strong></span>
                  </span>
                </span>
              </p>
            </div>

            <div class="card-block">
              <p class="text-center-tooltip">
                <span class="mytooltip tooltip-effect-1">
                  <img src="assets/img/habilities/GraphQL.png" class="tooltip-item" alt="">
                  <span class="tooltip-content clearfix">
                    <img src="assets/img/habilities/GraphQL.png">
                    <span class="tooltip-text">Manejo basico de <strong>GraphQl.</strong></span>
                  </span>
                </span>
              </p>
            </div>

          </div>

        </div>
        <div class="card-footer">
          <small class="text-muted">Para mas información el curso sobre la imagen.</small>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="icon-cards__item d-flex align-items-center justify-content-center" id="card_database">
  <div class="card__father">
    <div class="card">
      <div class="card__front" style="background-image: url(assets/img/habilities/base_datos.jpg);">
        <div class="bg"></div>
        <div class="body__card_front">
          <img src="assets/img/logo/tap_red.png" id="tap_3" alt="">
          <h1></h1>
        </div>
      </div>
      <div class="card__back">
        <div class="body__card_back">
          <h1>Base de datos & Otros.</h1>
          <div class="galeria">
            <div class="card-block">
              <p class="text-center-tooltip">
                <span class="mytooltip tooltip-effect-1">
                  <img src="assets/img/habilities/relacional.png" class="tooltip-item" alt="">
                  <span class="tooltip-content clearfix">
                    <img src="assets/img/habilities/relacional.png">
                    <span class="tooltip-text">Manejo basico de bases de datos relacionales como:
                      <strong>Mysql</strong> ,<strong>SqlLite</strong> y <strong>Postgresql.</strong></span>
                  </span>
                </span>
              </p>
            </div>

            <div class="card-block">
              <p class="text-center-tooltip">
                <span class="mytooltip tooltip-effect-1">
                  <img src="assets/img/habilities/no-relacion.png" class="tooltip-item" alt="">
                  <span class="tooltip-content clearfix">
                    <img src="assets/img/habilities/no-relacion.png">
                    <span class="tooltip-text">Manejo basico de bases de datos <strong>no</strong>
                      relacionales como <strong>MongoDb.</strong> </span>
                  </span>
                </span>
              </p>
            </div>

            <div class="card-block">
              <p class="text-center-tooltip">
                <span class="mytooltip tooltip-effect-1">
                  <img src="assets/img/habilities/firebase.png" class="tooltip-item" alt="">
                  <span class="tooltip-content clearfix">
                    <img src="assets/img/habilities/firebase.png">
                    <span class="tooltip-text">Manejo basico de la herramienta de desarrollo
                      <strong>Firebase.</strong></span>
                  </span>
                </span>
              </p>
            </div>

          </div>

        </div>
        <div class="card-footer">
          <small class="text-muted">Para mas información el curso sobre la imagen.</small>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;
$(".check_from").on("click", function () {
    console.log("check .check_from ",$("#habilities_carrousel"))

});

$(".check_back").on("click", function () {
    console.log("check .check_back")

});
$(".check_db").on("click", function () {
    console.log("check .check_db")

});

// card_frontend
// card_backend
// card_database