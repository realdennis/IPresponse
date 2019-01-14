# IPresponse

一個可以偵測請求 IP 並 response 的腳本

## 關於 Heroku

```javascript
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 8080;
```

目前部署在 Heroku ，它是一個 Saas 服務，所以裡頭你不能隨意去綁定想要綁定的 Port，所以用 `process.env` 去取得環境變數的設定，這樣子的寫法在本地也能執行。

## 關於 IP

```javascript
req.connection.remoteAddress;
```

理應要可以得到請求正確的 IP ，但在多數服務中會使用負載均衡的去代理，再分發給主程式。
如果有自己架過 Server 的都知道，可以透過 Apache 或 NGINX 去做內部的重導向。

## X-Forwarded-For

經過代理之後，真實的請求會被存放在 X-Forwarded-For 裡頭，維基百科這樣子寫到：
`X-Forwarded-For: client1, proxy1, proxy2`
所以第一個 IP 才是正確請求 IP。
