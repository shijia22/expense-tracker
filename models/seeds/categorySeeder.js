const mongoose = require('mongoose')
const Category = require('../category')

let categoryData = [
  ['家居物業', 'fa-home'],
  ['交通出行', 'fa-shuttle-van'],
  ['休閒娛樂', 'fa-grin-beam'],
  ['餐飲食品', 'fa-utensils'],
  ['其他', 'fa-pen'],
].map((category) => ({
  title: category[0],
  icon: category[1],
}))

mongoose.connect('mongodb://localhost/money', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.once('open', () => {
  Category.create(categoryData).then(() => {
    console.log('Category seeder done.')
    return db.close()
  })
})
