const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

const app = express()
const Record = require('./models/record')

mongoose.connect('mongodb://localhost/money', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}) 

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// index
app.get('/', (req, res) => {
  Record.find()
    .lean()
    .then((records) => res.render('index', { records })) // 將資料傳給 index 樣板
    .catch((error) => console.error(error)) // 錯誤處理
})

// port
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})