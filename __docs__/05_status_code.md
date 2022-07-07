# Définition des status codes

| Status code | Intitulé | Description |
| --- | --- | --- |
| 200 | OK | Rquête réussie |
| 201 | Created | Requête réussie et une ressource a été crée en conséquence |
| 204 | No content | Requête réussie mais l'utilisateur n'a pas besoin de quitter la page actuelle |
| 400 | Bad request | Indique que le serveur ne peut pas comprendre ou traiter la requête en raison d'une erreur côté client (par exemple une requête dont la syntaxe ou le contenu est invalide) |
| 401 | Unauthorized | Indique que la requête n'a pas été effectuée, car il manque des informations d'authentification valides pour la ressource visée |
| 403 | Forbidden | Indique qu'un serveur comprend la requête mais refuse de l'autoriser |
| 404 | Not found | Indique qu'un serveur ne peut pas trouver la ressource demandée |
|[418](https://developer.mozilla.org/fr/docs/Web/HTTP/Status/418)|Surprise| Coup de coeur de l'équipe sur ce status code|
| 500 | Internal Server Error | Indique que le serveur a rencontré un problème inattendu qui l'empêche de répondre à la requête |



    //* responses les plus courantes :
    // '200': description: Requête réussie. / Success response
    // '400': description: Mauvaise requête. L'Id de l'user doit être un nombre entier et supérieur à 0. / Bad request. User ID must be an integer and larger than 0.
    // '401': description: Les informations d'autorisation sont manquantes ou invalides. / Authorization information is missing or invalid.
    // '404': description: Page non trouvée / Page not found.
    // '5XX': description: Erreur inattendue. / Unexpected error.


[Chapitre précédent](04_decomposition.md) / [Retour à l'accueil](../README.md) / [Chapitre suivant](06_Autres_exemples.md)