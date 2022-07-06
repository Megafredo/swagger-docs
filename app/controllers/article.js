function fetchAllArticles(req, res) {
    res.json('ALL ARTICLES');
}

function fetchOneArticle(req, res) { 
    res.json('GET ONE ARTICLE')
}
function createArticle(req, res) { 
    res.json('ARTICLE CREATED')
}
function updateArticle(req, res) { 
    res.json('ARTICLE UPDATED')
}
function deleteArticle(req, res) { 
    res.json('ARTICLE DELETED')
}

export { fetchAllArticles, fetchOneArticle, createArticle, updateArticle, deleteArticle };