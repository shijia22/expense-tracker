const mongoose = require('mongoose')
const Category = require('../category')

let categoryData = [
  {
    categoryName: '家居物業',
    categoryIcon: 'fas fa-home',
  },
  {
    categoryName: '交通出行',
    categoryIcon: 'fas fa-shuttle-van',
  },
  {
    categoryName: '休閒娛樂',
    categoryIcon: 'fas fa-grin-beam',
  },
  {
    categoryName: '餐飲食品',
    categoryIcon: 'fas fa-utensils',
  },
  {
    categoryName: '其他',
    categoryIcon: 'fas fa-pen',
  },
]

mongoose.connect('mongodb://localhost/money', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  Category.create(categoryData)
    .then(() => {
      console.log('Add category seeder done!')
      return db.close()
    })
    .catch((err) => console.error(err))
})
