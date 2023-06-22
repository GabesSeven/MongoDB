/* operador $inc - adiciona ou remove valor */
use operators
db.blog.insertMany([
    {
      author: "Matheus Battisti",
      postCount: 10,
      likesReceived: 150,
      categories: ["PHP", "JavaScript", "MongoDB"],
      active: true,
      maxPosts: 100
    },
    {
      author: "Jhon Doe",
      postCount: 219,
      likesReceived: 12890,
      categories: ["Java", "C#", "C"],
      active: false,
      maxPosts: 100
    },
    {
      author: "Maria Marin",
      postCount: 8,
      likesReceived: 12,
      categories: ["Linux", "DevOps", "Docker"],
      active: true,
      maxPosts: 100
    },
])
db.blog.find()
db.blog.updateOne({author:"Matheus Battisti"},{$inc:{postCount:2}})
db.blog.find({author:"Matheus Battisti"})
db.blog.updateOne({author:"Matheus Battisti"},{$inc:{postCount:-5}})
db.blog.find({author:"Matheus Battisti"})

/* operador $min - atualiza caso o especificado no operador seja menor que o do registro */ 
db.blog.insertOne({author:"Maicon Santos",postCount:50,likesReceived:50})
db.blog.find()
db.blog.updateOne({author:"Maicon Santos"},{$min:{postCount:25,likesReceived:25}})
db.blog.updateOne({author:"Maicon Santos"},{$min:{postCount:0,likesReceived:0}})

/* operador $max - atualiza caso o especificado no operador seja maior que o do registro */ 
db.blog.find()
db.blog.updateOne({author:"Matheus Battisti"},{$max:{maxPosts:250}})
db.blog.find()

/* operador $mul - multiplica o número de uma propriedade por outro denifinido no operador */ 
db.blog.find()
db.blog.updateOne({author:"Matheus Battisti"}, {$mul:{maxPosts:2}})
db.blog.find()

/* operador $rename - renomear um campo, por outro que definimos */ 
db.blog.updateMany({},{$rename:{author:"author_fullname"}})
db.blog.find()

/* operador $unset - remover um campo de um item */ 
db.blog.updateMany({},{$unset:{active:""}})
db.blog.find()

/* operador $addToSet - adicionar um ou mais valores em arrays, apenas se eles não já existirem */ 
db.blog.updateOne({author_fullname:"Matheus Battisti"},{$addToSet:{categories:{$each:["PHP","Vue"]}}})
db.blog.find()
db.blog.updateOne({author_fullname:"Matheus Battisti"},{$addToSet:{categories:{$each:["PHP","Vue","C#"]}}})
db.blog.find()

/* operador $pop - remover o último ou primeiro elemento de array: -1 remove o primeir, 1 remove o último */ 
db.blog.updateOne({author_fullname:"Matheus Battisti"},{$pop:{categories:-1}})
db.blog.find()
db.blog.updateOne({author_fullname:"Matheus Battisti"},{$pop:{categories:1}})
db.blog.find()

/* operador $push - adicionar um ou mais valores a um array */ 
db.blog.updateOne({author_fullname:"Matheus Battisti"},{$push:{categories:"Linux"}})
db.blog.find()
db.blog.updateMany({},{$push:{categories:"Programação"}})
db.blog.find()

/* operador $push - CUIDADO PARA NÃO DUPLICAR DADOS - para adicionar mais de um item */ 
db.blog.updateOne({author_fullname:"Matheus Battisti"},{$push:{categories:{$each:["HTML","CSS"]}}})
db.blog.find()
db.blog.updateMany({},{$push:{categories:{$each:["HTML","CSS"]}}})
db.blog.find()

/* operador $pullAll - remover vários itens de um array, remove o que tiver no array */ 
db.blog.find()
db.blog.updateOne({author_fullname:"Maria Marin"},{$pullAll:{categories:["Linux","Docker"]}})
db.blog.find()
db.blog.updateOne({author_fullname:"Maria Marin"},{$pullAll:{categories:["Linux","Docker"]}})
db.blog.updateOne({author_fullname:"Maria Marin"},{$pullAll:{categories:["Linux","DevOps"]}})

