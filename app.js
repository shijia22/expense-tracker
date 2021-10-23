const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const app = express()
const Record = require('./models/record')
const Category = require('./models/category')

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
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// index
app.get('/', (req, res) => {
  const categoryData = []
  const records = []
  totalAmount = 0

  Category.find()
    .lean()
    .then(category => {
      categoryData.push(...category)
      Record.find()
        .lean()
        .then(record => {
          records.push(...record)
          records.forEach(record => {
            const category = categoryData.find(
              (category) => category.title === record.category
            )
            // record.icon = category.icon
            totalAmount += record.amount
          })
          res.render('index', { records, categoryData, totalAmount })
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})


// create
app.get('/records/new', (req, res) => {
  return res.render('new')
})

app.post('/', (req, res) => {
  Record.create(req.body)
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
})

// edit
app.get('/records/:id/edit', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .lean()
    .then((record) => res.render('edit', { record }))
    .catch((error) => console.log(error))
})

// delete
app.delete('/records/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then((record) => record.remove())
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
})

// port
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})