/* atualizando um dado */
$mongoimport books.json -d booksCollection -c books
$mongosh
show dbs
use booksCollection
db.books.deleteOne({_id:20})
db.books.findOne({_id:20})
db.books.deleteOne({isbn:'1884777686'})
db.books.findOne({isbn:'1884777686'})

/* remover mais de um item */
db.books.deleteMany({categories:"Java"})
db.books.find({categories:"Java"})
db.books.find({categories:"Java"}).count()

/* EXERCÍCIO 11 */
db.books.deleteOne({isbn:'1933988320'})
db.books.findOne({isbn:'1933988320'})
db.books.deleteMany({categories:"PowerBuilder"})
db.books.find({categories:"PowerBuilder"})

/* remover todos os dados de uma collection */
db.books.deleteMany({})
db.books.find()

