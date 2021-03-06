var db = require('./models')

db.comment.create({
  name: 'Paul Allen',
  content: 'This is really neat! Thanks for posting.',
  articleId: 1
})
.then(function(comment) {
  console.log(comment.get())
})

db.article.findOne({
  where: { id: 1 },
  include: [db.comment]
}).then(function(article) {
  // by using eager loading, the article model should have a comments key
  console.log(article.comments)
})

db.comment.create({
    name: 'Bob Smith',
    content: 'You are so beautiful.',
    articleId: 2
  })
  .then(function(comment) {
    console.log(comment.get())
  })

db.article.findOne()
.then(article =>{  
    article.createComment({
        name: 'Julia Lee',
        content: 'I love cheese',
        articleId: 3
    })
    .then(comment=>{
        console.log(comment.get())
    })
})

db.article.findOne()
.then(foundArticle=>{
    foundArticle.createComment({
        name: 'Ken',
        content: 'You are suck'
    })
    .then(createdComment=>{
        console.log(createdComment.get())
    })
})

db.article.findOne({
    where: {id:1},
    include: [db.commet]
})
.then(article=>{
    article.commet.forEach(comment=>{
        console.log(comment.get())
    })
})