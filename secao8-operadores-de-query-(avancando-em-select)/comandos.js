/* importando banco de dados */
$mongoimport restaurant.json -d restaurantsData -c restaurants
$mongosh
use restaurantsData
cls
db.restaurants.find().count()

/* operador $eq (equal) */
db.restaurants.findOne({rating:{$eq:5}})
db.restaurants.findOne({rating:5})

/* operadores $gt e $gte */
db.restaurants.findOne({rating:{$gte:6}})
db.restaurants.findOne({rating:{$gt:6}})

/* EXERCÍCIO 13 */
db.restaurants.find({type_of_food:"Breakfast", rating:{$gt:3}})

/* operadores $lt e $lte */
db.restaurants.find({rating:{$lte:2}}).count()
db.restaurants.find({rating:{$lt:2}}).count()

/* operador $in */
db.restaurants.find({type_of_food:{$in:["Pizza","Chinese"]}})

/* operador $ne (not equal) */
db.restaurants.find({rating:{$ne:5}})

/* operador $exists (retorna somente documents que possuem o campo buscado )*/
db.restaurants.updateMany({rating:5},{$set:{high_score:true}})
db.restaurants.find({high_score:{$exists:true}})
db.restaurants.find({high_score:{$exists:true}}).count()

/* EXERCÍCIO 14 */
db.restaurants.updateMany({rating:{$lte:2}},{$set:{
bad_restaurant: true}})
db.restaurants.find({bad_restaurant:{$exists:true}})
db.restaurants.find({bad_restaurant:{$exists:true}}).count()

/* operador $text (procura no texot, porém é preciso criar um índice) */
db.restaurants.createIndex({name:"text"})
db.restaurants.find({$text:{$search:"pizza"}}).pretty()

