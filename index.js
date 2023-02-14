const express = require('express')
const app  = express();
const cors = require('cors');
const port = 5000;

app.use(cors());

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.get('/', (req, res) => {
    res.send('News api running');
});

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.get('/category/:id', (req,res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news)
    }
    else {
        const category_news = news.filter( newscats => newscats.category_id ===id);
        res.send(category_news);
    }
}); 

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(singleNews => singleNews._id ===id);
    res.send(selectedNews);
})

app.listen(port, () => {
    console.log('server running on port', port)
})
