/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                      
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/

angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        // Recuerda cambiar estos datos por los de tu grupo real
        $scope.Grupo_ID ="DIU1.TU_GRUPO";
        $scope.Curso ="2026/27";
        $scope.Github_ID ="https://github.com/tu-usuario/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                /*************************************/
                /**** PRIMERA PERSONA              ***/
                /*************************************/
				Id: 0,
				Name: "Pepe",
				Photo: "man.png",
				Quote: "Buena persona",
				Age: 30,
				Occupation: "Marketing de concesionario de coches",
				Family: "Soltero",
				Location: "Granada (Centro)",
				Character: "Le gusta el fútbol",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs    Colérico/visceral", Value: 5 }
				], 
				Goals: ["Disfrutar del tiempo libre, viajar", "Cambiar a un trabajo mejor pagado"],
				Frustrations: ["le gusta la tecnología, pero siempre 'llama a un amigo' para resolver problemas", "Le gustaría tener más tiempo libre y hacer una familia"],
				Bio: "Es de Madrid y vino a Granada para estudiar administración de empresas, pero no ha tenido grandes oportunidades de trabajo. LLeva 2 años contratado y es feliz en la empresa actual. Aqui ha hecho buenos amigo en el trabajo y normalmente ser reunen para fiestas y a veces organizan viajes",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 2 }
				], 
                Contextos: "LLeva un tiempo preocupado por problemas personales pero esta saliendo adelnate poco a poco",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 3 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			},
			{	
                /*************************************/
                /**** SEGUNDA PERSONA              ***/
                /*************************************/
				Id: 1,
				Name: "Jose Luis Mato",
				Photo: "man.png",
				Quote: "Muy feliz",
				Age: 32,
				Occupation: "Buscando trabajo, antes era furbolista",
				Family: "Tiene una pareja estable con un hijo",
				Location: "Madrid",
				Character: "Mucha habilidad con la pelota",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs    Colérico/visceral", Value: 2 }
				], 
				Goals: ["Esta disfrutando con su familia"],
				Frustrations: ["Mucha incertidumbre ya que lo estan intentando contratar en Arabia con muy buen sueldo pero el no quiere ir por su familia"],
				Bio: "Es un futbolista muy importante ha jugado en muchos equipos importantes y ha ganado muchos titulos",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 5 }
				], 
                Contextos: "Se encuentra evaluando si aceptar una oferta en el extranjero o quedarse en España por la estabilidad de su familia.",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
