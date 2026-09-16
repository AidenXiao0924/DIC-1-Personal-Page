# 個人課程作業首頁

這是一個不需要後端或額外套件的單頁網站。頁面會顯示姓名、目前日期、時間與瀏覽器使用的本地時區，並會自動適應電腦與手機畫面。

## 用 VS Code 開啟

1. 開啟 VS Code。
2. 點選上方選單的「檔案」→「開啟資料夾」。
3. 選擇 `DIC-1-Personal-Page` 資料夾。

## 在本機預覽

最簡單的方法是直接在檔案總管中雙擊 `index.html`，網站會在預設瀏覽器中開啟。

也可以在 VS Code 安裝 **Live Server** 擴充功能，然後：

1. 在 VS Code 中開啟 `index.html`。
2. 按右鍵，選擇「Open with Live Server」。
3. 修改並儲存檔案後，瀏覽器會自動重新整理。

## 替換姓名

開啟 `index.html`，找到靠近檔案上方的這一行：

```html
<body data-profile-name="蕭程勻">
```

只要把 `蕭程勻` 換成新的姓名並儲存即可。請保留左右兩邊的英文雙引號。

## 修改文字與連結

- 頁面文字都在 `index.html`。
- 顏色、字體與版面都在 `styles.css`。
- 姓名放在 `index.html` 的 `body` 標籤；時鐘功能在 `script.js`。
- 若要加入連結，可以在 `index.html` 中使用 `<a href="網址">顯示文字</a>`。

## 發布到 GitHub Pages（準備好 GitHub 倉庫後）

把這些檔案上傳到 GitHub 倉庫後，在倉庫的 **Settings → Pages** 中，選擇從主要分支的根目錄發布。GitHub 會提供一個可以分享的網站網址。

目前專案尚未連接遠端 GitHub 倉庫，也尚未發布。
