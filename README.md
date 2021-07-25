# expense-tracker

這是 AC 2-3 學期 A12 用 Node.js、Express、MongoDB 所建置的記帳網站

## Features

(預計完成)
- 在首頁一次瀏覽所有支出的清單
- 在首頁看到所有支出清單的總金額
- 新增一筆支出
- 編輯支出的所有屬性 (一次只能編輯一筆)
- 刪除任何一筆支出 (一次只能刪除一筆)
- 在首頁可以根據支出「類別」篩選支出；總金額的計算只會包括被篩選出來的支出總和。

## 環境建置與需求 (prerequisites)

- Visual Studio Code - 開發環境
- express - 4.17.1
- express - handlebars 5.3.2
- npm - a JavaScript package manager
- nodemon - 可讓網頁即時呈現套件
- nvm version 1.1.7
- Bootstrap v5.0.2
- jQuery v5.0.2
- popperjs v2.9.2
- mongoose v5.13.3
- method-override v3.0.0
- body-parser v1.19.0

## 安裝與執行步驟

1. 打開終端機，clone 此專案至本機電腦
   `https://github.com/shijia22/expense-tracker.git`
2. 開啟終端機，進入存放此專案資料夾
   `cd expense-tracker.git`
3. 安裝 npm 套件
   `npm install`
4. 新增種子資料
   `npm run seed`
5. 啟動專案
   `npm run dev`
6. 出現以下訊息後，即可在 http://localhost:3000 開始使用
   `Express is listening on localhost:3000`