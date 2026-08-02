import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Production-ready HRIS Engine running on http://localhost:${PORT}`,
  );
});
