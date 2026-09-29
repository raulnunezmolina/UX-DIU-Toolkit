
/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */
/*          [DIU] UX Toolkit v1.0 2019     */
/*******************************************/

angular.module("angular", [])
    .controller("controller", ["$scope", function($scope) {

        // Datos del grupo
        $scope.Grupo_ID = "DIU1.TU_GRUPO";
        $scope.Curso = "2026/27";
        $scope.Github_ID = "https://github.com/tu-usuario/UX-DIU-Toolkit";

        $scope.PersonaIndex = 0;

        $scope.Personas = [
            {
                /*************************************/
                /**** PRIMERA PERSONA              ***/
                /*************************************/

                Id: 0,
                Name: "Carlos Martínez",
                Photo: "empresario.jpg",
                Quote: "Me encanta disfrutar del mar y navegar",

                Age: 38,
                Occupation: "Empresario",
                Family: "Casado y con dos hijos",
                Location: "Granada",

                Character: "Le gusta navegar, viajar y pasar tiempo con su familia",

                PersonalityTraits: [
                    { Name: "Introvertido/reservado Vs Extrovertido/activo", Value: 4 },
                    { Name: "Realista/práctico Vs Intuición/imaginativo", Value: 3 },
                    { Name: "Racional/analítico Vs Emocional/impulsivo", Value: 4 },
                    { Name: "Flemático/apático Vs Colérico/visceral", Value: 3 }
                ],

                Goals: [
                    "Alquilar una plaza para su barco en el puerto",
                    "Alquilar un barco para salir a navegar con su familia",
                    "Reservar restaurantes cerca del mar",
                    "Encontrar una web donde pueda gestionar sus reservas fácilmente"
                ],

                Frustrations: [
                    "Tiene dificultades para encontrar amarres disponibles",
                    "Le resulta complicado comparar precios de alquiler de barcos",
                    "No le gusta tener que llamar por teléfono para hacer reservas",
                    "Quiere encontrar toda la información del puerto en una sola web"
                ],

                Bio: "Carlos tiene 38 años y vive en Granada. Es empresario y le gusta pasar sus vacaciones y fines de semana en la costa con su familia. Le encanta navegar y está interesado en alquilar una plaza para su barco en un puerto deportivo. También suele alquilar barcos para realizar excursiones con su familia. Le gusta reservar restaurantes cerca del mar y busca una web sencilla donde pueda consultar precios, disponibilidad y realizar todas sus reservas.",

                Tech: [
                    { Name: "TIC/Internet", Value: 4 },
                    { Name: "Móvil", Value: 5 },
                    { Name: "RRSS", Value: 3 },
                    { Name: "Software", Value: 4 }
                ],

                Contextos: "Organiza sus vacaciones y escapadas con antelación. Busca un puerto donde pueda reservar servicios de forma rápida y segura, sin tener que desplazarse ni realizar llamadas.",

                PreferredChannels: [
                    { Name: "Publicidad Tradicional", Value: 2 },
                    { Name: "Online & Social Media", Value: 5 },
                    { Name: "Recomendaciones & sugerencias", Value: 4 },
                    { Name: "Persona de confianza (amigos, boca a boca)", Value: 4 }
                ]
            },

            {
                /*************************************/
                /**** SEGUNDA PERSONA             ***/
                /*************************************/

                Id: 1,
                Name: "Laura Fernández",
                Photo: "mujer.jpg",
                Quote: "Quiero tenerlo todo organizado antes de llegar al puerto",

                Age: 29,
                Occupation: "Diseñadora gráfica",
                Family: "Soltera, vive con su pareja",
                Location: "Málaga",

                Character: "Activa, organizada y aficionada a la pesca",

                PersonalityTraits: [
                    { Name: "Introvertido/reservado Vs Extrovertido/activo", Value: 4 },
                    { Name: "Realista/práctico Vs Intuición/imaginativo", Value: 4 },
                    { Name: "Racional/analítico Vs Emocional/impulsivo", Value: 3 },
                    { Name: "Flemático/apático Vs Colérico/visceral", Value: 2 }
                ],

                Goals: [
                    "Reservar una plaza de aparcamiento cerca del puerto",
                    "Alquilar un barco para salir a pescar con amigos",
                    "Comprar cañas, cebos y accesorios de pesca",
                    "Reservar mesa en un restaurante del puerto",
                    "Consultar los servicios y horarios desde el móvil"
                ],

                Frustrations: [
                    "Le cuesta encontrar aparcamiento disponible en temporada alta",
                    "No sabe qué barcos puede alquilar ni cuánto cuestan",
                    "Tiene que visitar varias tiendas para encontrar material de pesca",
                    "Le es incómodo reservar diferentes servicios en distintas páginas"
                ],

                Bio: "Laura tiene 29 años y vive en Málaga. Trabaja como diseñadora gráfica y le encanta pasar sus días libres cerca del mar. Suele ir al puerto con su pareja y sus amigos para pescar, comer en restaurantes y disfrutar de excursiones en barco. No tiene barco propio, por lo que está interesada en alquilar uno de vez en cuando. También necesita encontrar aparcamiento y suele comprar material de pesca. Utiliza principalmente el móvil para organizar sus planes y prefiere realizar todas las reservas desde una misma web.",

                Tech: [
                    { Name: "TIC/Internet", Value: 5 },
                    { Name: "Móvil", Value: 5 },
                    { Name: "RRSS", Value: 5 },
                    { Name: "Software", Value: 4 }
                ],

                Contextos: "Suele visitar el puerto durante los fines de semana y las vacaciones. Consulta desde el móvil los precios, la disponibilidad y las opiniones antes de reservar. Busca una web visual, rápida y fácil de utilizar.",

                PreferredChannels: [
                    { Name: "Publicidad Tradicional", Value: 2 },
                    { Name: "Online & Social Media", Value: 5 },
                    { Name: "Recomendaciones & sugerencias", Value: 4 },
                    { Name: "Persona de confianza (amigos, boca a boca)", Value: 3 }
                ]
            }
        ];

        $scope.model = $scope.Personas[0];

    }]);
