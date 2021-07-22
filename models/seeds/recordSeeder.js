const mongoose = require('mongoose')
const Record = require('../record')

let recordData = [
  {
    name: '拉麵',
    category: '餐飲食品',
    date: '2021/07/22',
    amount: 220,
  },
  {
    name: '悠遊卡加值',
    category: '交通出行',
    date: '2021/7/20',
    amount: 100,
  },
  {
    name: '健身房會員',
    category: '休閒娛樂',
    date: '2021/7/19',
    amount: 2000,
  },
  {
    name: '買文具',
    category: '其他',
    date: '2021/7/19',
    amount: 50,
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
  Record.create(recordData)
    .then(() => {
      console.log('Add record seeder done!')
    })
    .catch((err) => console.error(err))
})