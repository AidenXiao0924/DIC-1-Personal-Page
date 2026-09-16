# AIoT-DA 課程 — DIC-1 個人入口網站

> **課程名稱**：AIoT 與數據分析（AIoT & Data Analytics, AIoT-DA）<br>
> **課堂實作**：DIC-1（Do in Class 1）— 個人入口網站與動態時鐘儀表板（Personal Portal & Live Timekeeper）<br>
> **作者**：Aiden Xiao<br>
> **儲存庫網址**：[https://github.com/AidenXiao0924/DIC-1-Personal-Page](https://github.com/AidenXiao0924/DIC-1-Personal-Page)<br>
> **Live Demo Page**：[https://aidenxiao0924.github.io/DIC-1-Personal-Page/](https://aidenxiao0924.github.io/DIC-1-Personal-Page/)

---

## 網站畫面

網站截圖預留位置。完成截圖後，建議將圖片存成：

~~~text
assets/demo-preview.png
~~~

再把下方圖片標記外側的註解符號移除即可顯示。現在使用 HTML 註解，因此尚未加入圖片時不會顯示破圖。

<!-- ![Live Demo Snapshot](./assets/demo-preview.png) -->

---

## 專案介紹

這是一個使用原生 HTML、CSS 與 JavaScript 製作的響應式單頁網站，不需要後端或額外套件。頁面以玻璃質感個人卡片呈現作者資訊，並依訪客裝置的本地時區，每秒更新日期與時間。

### 主要功能

- 顯示作者姓名與課程作業資訊。
- 本地日期與數位時鐘每秒更新。
- 自動顯示瀏覽器使用的時區。
- 適應電腦、平板與手機畫面。
- 支援鍵盤導覽、螢幕閱讀器與減少動畫偏好。
- 可直接部署至 GitHub Pages。

## 專案檔案

~~~text
DIC-1-Personal-Page/
├── index.html   # 頁面內容與語意結構
├── styles.css   # 顏色、玻璃卡片與響應式版面
├── script.js    # 姓名同步與即時時鐘功能
└── README.md    # 專案說明
~~~

## 用 VS Code 開啟

1. 開啟 VS Code。
2. 點選「檔案」→「開啟資料夾」。
3. 選擇 DIC-1-Personal-Page 資料夾。

## 在本機預覽

最簡單的方式是直接雙擊 index.html，網站會在預設瀏覽器中開啟。

也可以在 VS Code 安裝 **Live Server** 擴充功能，接著在 index.html 上按右鍵，選擇 **Open with Live Server**。儲存修改後，瀏覽器會自動重新整理。

## 修改姓名

開啟 index.html，找到靠近檔案上方的這一行：

~~~html
<body data-profile-name="Aiden Xiao">
~~~

只要修改英文雙引號內的姓名並儲存即可。畫面姓名、瀏覽器標題與頁面描述會自動同步。

## 發布狀態

本專案已從 main 分支的根目錄發布至 GitHub Pages：

[開啟 Aiden Xiao 的個人入口網站](https://aidenxiao0924.github.io/DIC-1-Personal-Page/)
