# IPresponse_heroku

[![Greenkeeper badge](https://badges.greenkeeper.io/realdennis/IPresponse_heroku.svg)](https://greenkeeper.io/)

寫了一個可以偵測請求IP並response的腳本，放在Heroku上頭，記錄一下會遇到的問題以及各種新手坑，有錯的話歡迎發Issue/PR幫我補充。

## 關於Heroku
	let host = process.env.HOST || '0.0.0.0';
	let port = process.env.PORT || 8080;
首先Heroku是一個Saas服務，所以裡頭你不能隨意去綁定想要綁定的Port，所以用process.env去取得環境變數的設定，這樣子的寫法在本地會也能執行

## 關於IP
	ipAddress =  req.connection.remoteAddress;
原本的寫法理應要可以得到請求正確的IP，但在多數服務中使用負載均衡的去代理，再分發給主程式。
如果有自己架過Server的都知道可以透過Apache或NGINX去做內部的重導向。

## X-Forwarded-For
上頭提到的是**代理轉發**，還有另一種狀況是**反向代理**，比如在Local端要測試Webhook，或是某些狀況需要公開IP及SSL的時候通常會使用ngrok去做反向代理

這個時候真實的請求會被存放在X-Forwarded-For裡頭，維基百科這樣子寫到：
`X-Forwarded-For: client1, proxy1, proxy2`
所以第一個(index0)的IP才是正確IP。	

