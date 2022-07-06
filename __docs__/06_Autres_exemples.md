# Autres Exemples de Js Docs

Voici quelques exemples basic, si vous êtes plus à l'aise avec ce genre d'écriture !

Exemple de JS Docs :

## Exemple 1 JsDoc

```js
/**
 * GET /
 * @summary Home
 * @description Description de la route voir sa fonction
 * @tags Home
 * 
 * @example response - 200 - Intitulé 01
 * {"Success" : "mon resultat 01 est ici"}
 * @example response - 200 - Intitulé 02
 * {"Success" : "mon resultat 02 est ici"}
 * @return {string} 200 - Description Global
 * 
 * @example response - 500 - Intitulé 01
 * {"Error 500": "message 01"}
 * @example response - 500 - Intitulé 02
 * {"Error 500": "message 02"}
 * @return {string} 500 - Description Global
 * 
 */
router.get('/home');
```

## Exemple 2 JsDoc

```js
/**
 * GET /api/v1/posts
 * @summary Tous les articles
 * @description Récupère tous les articles
 * @tags Articles
 * @return {string} 200 - success response - application/json
 * @example response - 200 - success response - application/json
 * {
  "id": 1,
  "category": "Angular",
  "slug": "angular-une-fausse-bonne-idee",
  "title": "Angular, une fausse bonne idée ?",
  "excerpt": "Lorem <em>ipsum dolor</em> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolo",
  "content": "Angular, une fausse bonne idée ? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi",
  "category_id": 2
}
 * @return {string} 500 - error response 
 * @example response - 500 - error response
 * {
 *   "Error 500": "message"
 * }
 */
router.get('/api/v1/posts', fetchAllArticles);
```


## Exemple Property JsDoc

```js
// Mise en place des propriétés (par exemple dans les controllers)
/**
 * @typedef {*}Articles
 * @property {string} category
 * @property {string} slug
 * @property {string} title
 * @property {string} excerpt
 * @property {string} content
 * @property {integer} category_id
 */

```

## Exemple SwaggerDocs (écriture accessible avec npm swagger-jsdoc)

```js
// On peut utiliser @openapi ou @swagger
/**
 * @openapi 
 * /profile:
 *   get:
 *     tags: [Profile]
 *     summary: Description du chemin
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/profile', (req, res)=>{
    res.json('Page Profile')
}); 
```

[Chapitre précédent](05_status_code.md) / [Retour à l'accueil](../README.md)