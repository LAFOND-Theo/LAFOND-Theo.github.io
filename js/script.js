$(window).on("load", function () {
    var navbar;
    class PageDefaultSetting {
        constructor() {
            navbar = this;
            // navbar.singleBoardImage = $("");
            navbar.init();
        }

        /* Cette méthode initialise différentes fonctionnalités de la page, telles qu'un carrousel et des gestionnaires d'événements, et effectue des modifications sur certains éléments de formulaire.
        Son rôle est de préparer la page pour l'interaction utilisateur. */
        init() {
            // navbar.windowResize();
            // $(window).resize(navbar.windowResize);
            navbar.windowScroll();
            $(window).scroll(navbar.windowScroll);
            $(".navbar-centre li").on("click", navbar.scrollToSection);
            $(".menu-lateral").on("click", navbar.openNav);
        }

        // /* Cette méthode réagit au redimensionnement de la fenêtre du navigateur par l'utilisateur, ajustant la taille des images individuelles dans la section "three-board-section" et modifiant le contenu d'un élément en fonction de la taille de la fenêtre.
        // Son rôle est de s'assurer que les éléments s'adaptent correctement aux différentes tailles d'écran. */
        // windowResize() {
        //     navbar.singleBoardImage.css("height", navbar.singleBoardImage.first().innerWidth());
        //     if (window.innerWidth < 991) {
        //         if($(".top-nav-sec.fixed-nav")){
        //             $(".top-nav-sec").removeClass("fixed-nav");
        //         }
        //     }
        // }

        /* Cette méthode réagit au défilement de la page par l'utilisateur, ajustant ainsi l'apparence de la barre de navigation en fonction de la position de défilement.
        Elle contrôle le comportement de la barre de navigation en fonction de l'action de défilement. */
        windowScroll() {
            if ($(window).scrollTop() > 60 && window.innerWidth > 990) {
                $(".navbar-sec").addClass("fixed-nav");
                if ($(".navbar-container").hasClass("clicked")) {
                    navbar.openNav.call($(".menu-lateral"));
                }
            } else if ($(window).scrollTop() == 0) {
                $(".navbar-sec").removeClass("fixed-nav");
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
                if (target == "accueil") {
                    goTo += 0;
                } else if (target == "competences") {
                    goTo += 0;
                } else if (target == "projets") {
                    goTo += 0;
                } else if (target == "parcours") {
                    goTo -= 150;
                } else if (target == "veille") {
                    goTo -= 0;
                } else if (target == "contact") {
                    goTo -= 0;
                }
            }
            if (window.innerWidth <= 768) {
                if (target == "accueil") {
                    goTo -= 80;
                } else if (target == "competences") {
                    goTo -= 20;
                } else if (target == "projets") {
                    goTo -= 80;
                } else if (target == "parcours") {
                    goTo -= 90;
                } else if (target == "veille") {
                    goTo -= 90;
                } else if (target == "contact") {
                    goTo -= 90;
                }
            }
            $("body, html").stop().animate({
                scrollTop: goTo
            }, 1500);
            if ($(".navbar-container").hasClass("opened")) {
                $(".menu-lateral-mobile-burger i").trigger("click");
            }
        }

        /* Ouvre la Navbar lors d'un click sur l'icone du menu burger
        Son rôle est de fournir une fonctionnalité de barre de navigation ouvrable à l'utilisateur. */
        openNav() {
            if ($(".navbar-sec.fixed-nav")) {
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
            $(".menu-lateral-mobile-burger i").on("click", this.sideMenuClicked);
        }

        sideMenuClicked() {
            $(".navbar-container").toggleClass("opened");
            if ($(".navbar-container").hasClass("opened")) {
                $(this).removeClass("fa-bars").addClass("fa-times");
                $(".navbar-container .navbar .mobile-bottom-contact").css("transition", ".1s .4s");
            } else {
                $(this).removeClass("fa-times").addClass("fa-bars");
                $(".navbar-container .navbar .mobile-bottom-contact").css("transition", ".1s");
            }
        }
    }
new SideMenuEffect();
})