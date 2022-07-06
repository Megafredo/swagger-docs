//~ --------------------------------------------- IMPORT ROUTER
import { Router } from 'express';
const router = Router();

//~ --------------------------------------------- IMPORT METHODS
import { fetchAllArticles, fetchOneArticle, createArticle, updateArticle, deleteArticle} from '../controllers/article.js';
import { fetchAllUsers, fetchOneUser, createUser, updateUser, deleteUser } from '../controllers/user.js';


//~ --------------------------------------------- ROUTER INDEX
router.get('/', (req, res) => {
    res.json('Welcome to home !');
});


//~ --------------------------------------------- ROUTER ARTICLES
router.get('/api/v1/articles', fetchAllArticles);
router.get('/api/v1/articles/:id', fetchOneArticle);

router.post('/api/v1/articles', createArticle);
router.patch('/api/v1/articles/:id', updateArticle);
router.delete('/api/v1/articles/:id', deleteArticle);


//~ --------------------------------------------- ROUTER USER
router.get('/api/v1/users', fetchAllUsers);
router.get('/api/v1/users/:id', fetchOneUser);

router.post('/api/v1/users', createUser);
router.patch('/api/v1/users/:id', updateUser);
router.delete('/api/v1/users/:id', deleteUser);


export {router};

































