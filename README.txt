TOKYO × HAKONE 2026 — PWA V1

這是第一版可執行原型，內容直接依目前「旅遊手冊 v1」建立，因此部分文字、時間、地點仍待校正。

本機預覽：
1. 在此資料夾開啟終端機
2. 執行：python -m http.server 8080
3. 瀏覽器開啟：http://localhost:8080

重要：PWA / Service Worker 需要透過 http(s) 開啟，不能直接雙擊 index.html。

目前功能：
- 首頁 / 今日行程 / 五日行程
- Google Maps 搜尋式導航
- 住宿資訊
- 航班資訊
- Checklist（localStorage 保留）
- 線上 / 離線狀態
- PWA manifest / Service Worker
- 完整旅遊手冊 PDF 入口
- 安裝 App 提示（支援的瀏覽器）

下一版建議：
- 校正 Day 1–5 正式資料
- 改用你提供的 Google Maps 精確連結
- 加入房間分配圖片與人名
- 必買清單、景點收藏、地址複製
- 真正的地圖元件
- iOS 安裝提示與 App 啟動畫面


V1.1 新增：地圖頁可由使用者主動授權取得目前位置，顯示座標與定位精度，並可用目前位置作為 Google Maps 導航起點。定位功能在 HTTPS 或 localhost 環境下最穩定。
