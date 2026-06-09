const express = require("express"); const app = express(); app.use(express.static("public")); app.listen(3000, () => console.log("تويتر أفريقيا شغال على http://localhost:3000"));
