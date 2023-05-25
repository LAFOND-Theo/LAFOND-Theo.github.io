$(window).on("load", function () {
  var thatPD;
  class PageDefaultSetting {
      constructor() {
          thatPD = this;
          thatPD.init();
      }

      /* Cette méthode initialise différentes fonctionnalités de la page, telles qu'un carrousel et des gestionnaires d'événements, et effectue des modifications sur certains éléments de formulaire.
      Son rôle est de préparer la page pour l'interaction utilisateur. */
      init() {
          thatPD.windowScroll();
          $(window).scroll(thatPD.windowScroll);
          $(".center-btn-area li").on("click", thatPD.scrollToSection);
          $(".sticky-menu").on("click", thatPD.openNav);
      }

      /* Cette méthode réagit au défilement de la page par l'utilisateur, ajustant ainsi l'apparence de la barre de navigation en fonction de la position de défilement.
      Elle contrôle le comportement de la barre de navigation en fonction de l'action de défilement. */
      windowScroll() {
          if ($(window).scrollTop() > 100 && window.innerWidth > 768) {
              $(".top-nav-sec").addClass("fixed-nav");
              if ($(".top-nav-wrapper").hasClass("clicked")) {
                  thatPD.openNav.call($(".sticky-menu"));
              }
          } else if ($(window).scrollTop() == 0) {
              $(".top-nav-sec").removeClass("fixed-nav");
          }
      }

      /* Cette méthode est déclenchée lorsqu'un élément spécifique est cliqué dans une liste, effectuant une animation de défilement vers une section cible en ajustant la position de défilement de destination en fonction de la taille de la fenêtre et de la section cible.
      Son rôle est de faciliter la navigation de l'utilisateur vers différentes sections de la page. */
      scrollToSection() {
          var target = $(this).attr("data-target");
          var goTo;
          if (target == "landing") {
              goTo = 0
          } else {
              goTo = $("#" + target).first().offset().top;
              if (target == "presentation") {
                  goTo += 0;
              } else if (target == "competences") {
                  goTo += 0;
              } else if (target == "projets") {
                  goTo += 0;
              } else if (target == "parcours") {
                  goTo -= 0;
              } else if (target == "contact") {
                  goTo -= 0;
              }
          }
          if (window.innerWidth <= 768) {
              if (target == "presentation") {
                  goTo -= 80;
              } else if (target == "competences") {
                  goTo -= 20;
              } else if (target == "projets") {
                  goTo -= 80;
              } else if (target == "parcours") {
                  goTo -= 90;
              } else if (target == "contact") {
                goTo -= 90;
            }
          }
          $("body, html").stop().animate({
              scrollTop: goTo
          }, 1500);
          if ($(".top-nav-wrapper").hasClass("opened")) {
              $(".side-menu-burger i").trigger("click");
          }
      }

      /* Ouvre la Navbar lors d'un click sur l'icone du menu burger
      Son rôle est de fournir une fonctionnalité de barre de navigation ouvrable à l'utilisateur. */
      openNav() {
          if ($(".top-nav-sec.fixed-nav")) {
              $(this).parent().parent().parent().toggleClass("clicked");
              if ($(this).parent().parent().parent().hasClass("clicked")) {
                  $(this).children("i").removeClass("fa-bars").addClass("fa-times");
              } else {
                  $(this).children("i").removeClass("fa-times").addClass("fa-bars");
              }
          }
      }
  }
  new PageDefaultSetting();

  class SideMenuEffect {
    constructor() {
        this.init();
    }

    init() {
        $(".side-menu-burger i").on("click", this.sideMenuClicked);
    }

    sideMenuClicked() {
        $(".top-nav-wrapper").toggleClass("opened");
        if ($(".top-nav-wrapper").hasClass("opened")) {
            $(this).removeClass("fa-bars").addClass("fa-times");
            $(".top-nav-wrapper .top-nav .mobile-bottom-contact").css("transition", ".1s .4s");
        } else {
            $(this).removeClass("fa-times").addClass("fa-bars");
            $(".top-nav-wrapper .top-nav .mobile-bottom-contact").css("transition", ".1s");
        }
    }
}
new SideMenuEffect();

})