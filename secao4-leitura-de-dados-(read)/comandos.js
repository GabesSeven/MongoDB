/* importando banco de dados da seção */
$mongoimport books.json -d booksCollection -c books
$mongosh
show dbs
use booksCollection
db.books.find()

/* encontrar todos os dados */
db.books.find({})
db.books.find()
db.books.find().pretty()

/* mais sobre o pretty */
db.books.find()
it
it
db.books.findOne()

/* encontrando dado específico */
db.books.find({ pageCount: 362 })
db.books.find({ title: "Hibernate in Action (Chinese Edition)" })
db.books.findOne({ title: "Hibernate in Action (Chinese Edition)" })

/* EXERCÍCIO 7 */
db.books.find({ title:"MongoDB in Action"})
db.books.find({ authors:"Jason R. Weiss"})

/* operador $in - encontrando dados entre valores - FUNCIONA COMO 'OU' - USADA PARA MESMO CAMPOS */
db.books.find({ categories: {$in: ["Java", "Internet"]}})
db.books.find({ categories: {$in: ["Java", "Internet"]}}).pretty()
db.books.find({ categories: {$in: ["Java", "Internet", "PHP"]}}).pretty()

/* múltiplas condições - FUNCIONA COMO 'E' */
db.books.find({ pageCount:592, _id:63 }).pretty()
db.books.find({ pageCount:592, _id:64 }).pretty()

/* maior que algum valor - FUNCIONA COMO '> 450' */
db.books.find({ pageCount:{ $gt:450 }}).pretty()
db.books.find({ pageCount:{ $gt:450 }, categories: "Java"}).pretty()

/* EXERCÍCIO 8 */
db.books.find({ pageCount:{ $gt:800 }, _id:{ $gt:122 }}).pretty()

/* menor que algum valor - FUNCIONA COMO '< 120' */
db.books.find({ pageCount:{ $lt:120 } }).pretty()
db.books.find({ pageCount:{ $gt:1 }, pageCount:{ $lt:120 } }).pretty()

/* operador $or - USADA PARA MESMO CAMPOS */
db.books.find({ $or: [{pageCount: {$gt:500}}, {_id: {$lt:5}}]}).pretty()
db.books.find({ $or: [{pageCount: {$gt:900}}, {categories:"Java"}]}).pretty()

/* operador $and e $or na mesma consulta  */
db.books.find({status:"PUBLISH", $or:[{pageCount:500},{authors:"Robi Sen"}]}).pretty()

/* contando número de resultados  */
db.books.find({pageCount:{$gt:600}}).count()

/* TAREFA 3  */
db.books.find({categories:"Java"})
db.books.find({pageCount:{$lt:100}})
db.books.find({categories:"Microsoft", pageCount:{$gt:300}})
db.books.find({categories:"Web Development"}).count()
db.books.find({$or:[{categories:"Java"},{authors:"Bret Updegraff"}]})

