# Vision IPTV — versão Worker

Estrutura (na raiz do repositório):
- `wrangler.jsonc` — configuração (nome do Worker: `iptv-vision`)
- `worker.js` — encaminha `/api/xtream` e `/api/stream`; o resto são os ficheiros de `public/`
- `functions/` — código do backend (usado por `worker.js`)
- `public/` — a aplicação (index.html, app.js, style.css, sw.js, manifest, icons)

Publicar: ligar o repositório ao Worker (Git) ou `npx wrangler deploy`.
Obrigatório: criar o segredo `SESSION_SECRET` em Settings → Variables and Secrets.
Opcional: `ALLOWED_HOSTS` (lista de servidores permitidos, separados por vírgula).
Teste: abrir /api/stream deve mostrar {"error":"Falta o token."}.
