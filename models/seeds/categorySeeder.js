const mongoose = require('mongoose')
const Category = require('../category')

let categoryData = [
  ['家居物業', '<i class="fas fa-home"></i>'],
  ['交通出行', '<i class="fa-shuttle-van></i>'],
  ['休閒娛樂', '<i class="fas fa-grin-beam"></i>'],
  ['餐飲食品', '<i class="fas fa-utensils"></i>'],
  ['其他', '<i class="fas fa-pen"></i>'],
]

mongoose.connect('mongodb://localhost/money', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.once('open', () => {
  Category.create(categoryData)
    .then(() => {
      console.log('Category seeder done.')
      db.close()
    })
    .then(() => {
      console.log('database connection closed!')
    })
})
