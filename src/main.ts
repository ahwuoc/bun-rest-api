import Elysia, { Context } from "elysia";

const app = new Elysia();
const PORT = 3000;

app.get("/", (ctx: Context) => {
  return "hello";
});
app.get("/test", (ctx: Context) => {
  return "chaoem!";
});
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
