const express = require("express"); 
const app = express(); 

// عشان نقدر نقرأ البيانات من الفورم
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); 

// الصفحة الرئيسية - معدلة
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Auth Lab</title>
      <meta charset="UTF-8">
      <style>
        body { font-family: sans-serif; background: #0f172a; color: white; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
        .box { background: #1e293b; padding: 30px; border-radius: 12px; width: 300px; text-align: center; }
        .warn { background: #dc2626; padding: 10px; border-radius: 6px; margin-bottom: 15px; font-size: 14px; }
        input { width: 100%; padding: 10px; margin: 8px 0; border-radius: 6px; border: none; }
        button { width: 100%; padding: 10px; background: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer; }
      </style>
    </head>
    <body>
      <div class="box">
        <h2>My Auth Lab</h2>
        <div class="warn">⚠️ موقع تجريبي للتعليم فقط<br>لا تدخل بيانات حقيقية</div>
        <form method="POST" action="/login">
          <input name="username" placeholder="اسم مستخدم تجريبي" required>
          <input name="password" type="password" placeholder="كلمة مرور تجريبية" required>
          <button type="submit">تسجيل دخول</button>
        </form>
      </div>
    </body>
    </html>
  `);
});

// يستقبل البيانات ويطبعها في الـ Logs
app.post("/login", (req, res) => {
  console.log("محاولة دخول تجريبية:", req.body);
  res.send("تم استلام البيانات في الـ Logs. هذا مختبر تدريبي فقط.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`مختبر المصادقة شغال على المنفذ ${PORT}`));
