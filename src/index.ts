Bun.serve({
  port: process.env.PORT || 3000,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/health") {
      return Response.json({ status: "ok", ts: Date.now() });
    }

    return new Response("Hello from Bun!", { status: 200 });
  }
});

console.log("Server running on port 3000");