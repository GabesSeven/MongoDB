/* atualizando um dado */
$mongoimport books.json -d booksCollection -c books
$mongosh
show dbs
use booksCollection
db.books.updateOne({_id:314},{$set:{pageCount:1000}})
db.books.find({_id:314})

/* EXERCÍCIO 9 */
db.books.find({_id:20})
db.books.updateOne({_id:20},{$set:{title:"Meu primeiro update"}})
db.books.find({_id:20})

/* atualizando vários dados ao mesmo tempo */
db.books.updateMany({categories:"Java"},{$set:{status:"UNPUBLISHED"}})
db.books.find({categories:"Java"})

/* adicionando dados com update */
db.books.find({authors:"Vikram Goyal"}).pretty()
db.books.updateMany({authors:"Vikram Goyal"},{$set:{downloads:1000}})
db.books.find({authors:"Vikram Goyal"}).pretty()

/* EXERCÍCIO 10 */
db.books.find({pageCount:{$gt:500}}).pretty()
db.books.updateMany({pageCount:{$gt:500}},{$set:{bestseller:true}})
db.books.find({pageCount:{$gt:500}}).pretty()

/* trocando todo o documento */
db.books.find({_id:120})
db.books.replaceOne({_id:120},{foi:"substituido"})

/* adicionando um item a um array */
db.books.find({_id:201})
db.books.updateOne({_id:201},{$push:{categories:"PHP"}})
db.books.find({_id:201})

/* atualizar todos os itens */
db.books.find().pretty()
db.books.updateMany({}, {$set:{atualizado:true}})
db.books.find().pretty()

/* TAREFA 4 */
db.books.find({title:"Flex 4 in Action"}).pretty()
db.books.updateOne({title:"Flex 4 in Action"},{$set:{status:"OUT OF STOCK"}})
db.books.find({title:"Flex 4 in Action"}).pretty()
db.books.find({pageCount:{$lt:100}}).pretty()
db.books.updateMany({pageCount:{$lt:100}},{$set:{short_book:true}})
db.books.find({pageCount:{$lt:100}}).pretty()
db.books.find({categories: "Java", pageCount:{$gt:500}}).pretty()
db.books.updateMany({categories: "Java", pageCount:{$gt:500}},{$push:{categories:"Many Pages"}})
db.books.find({categories: "Java", pageCount:{$gt:500}}).pretty()
