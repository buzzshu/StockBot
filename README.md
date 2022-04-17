# 股票K線圖聊天機器人

## 前言
透過使用關鍵字  
K線圖的K + 股票代號  
例如K2330  
就可以在line上即時查詢股票K線圖

## 使用
先加入我們Gold Rush聊天機器人  

再使用我們的關鍵字查詢股票K線圖  

## 技術
* Node.js
  * 主要以node.js撰寫 
* Heroku
  * 架設在Heroku上，讓使用者能隨時使用
* DialogFlow
  * 透過DialogFlow串接Line判斷語意
* Yahoo Finance API
  * 即時查詢股票資料
* Anychart
  * 使用Anychart繪製股票K線圖
* ejs
  * 使用ejs樣板將資料和程式碼同時渲染至前端
* Puppeteer
  * 使用Puppeteer模擬瀏覽器渲染頁面，並取回所需資料

## 參考
https://page.line.me/535oezfm
