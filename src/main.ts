import Elysia, { Context } from 'elysia';  // Import đúng type Context và NextFunction

const app = new Elysia();
const PORT = 3000;


app.get("/", (ctx: Context) => {
  return "Hello, World!";
});

// Route POST
app.post("/data", (ctx: Context) => {
  const body = ctx.body;
  return `Received data: ${body}`;
});

// Lắng nghe server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
