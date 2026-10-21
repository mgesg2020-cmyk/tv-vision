import { onRequestPost } from "./functions/api/xtream.js";
import { onRequestGet } from "./functions/api/stream.js";
import { json } from "./functions/_lib.js";

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    const ctx = { request, env };
    if (pathname === "/api/xtream") return request.method === "POST" ? onRequestPost(ctx) : json({ error: "Método não permitido." }, 405);
    if (pathname === "/api/stream") return request.method === "GET" ? onRequestGet(ctx) : json({ error: "Método não permitido." }, 405);
    if (pathname.startsWith("/api/")) return json({ error: "Rota não encontrada." }, 404);
    return env.ASSETS.fetch(request);
  },
};
