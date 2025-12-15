# Guia de Troubleshooting - GitHub Pages

## Problema: Site não atualiza após deploy

### ✅ Solução Aplicada

1. **Arquivo `.nojekyll` criado**: Este arquivo é essencial para que o GitHub Pages sirva corretamente aplicações React. Ele desabilita o processamento Jekyll que pode causar problemas.

### 🔍 Como Verificar se Está Funcionando

1. **Aguarde 2-5 minutos** após o push para o GitHub Pages processar
2. **Limpe o cache do navegador**:

   - Chrome/Edge: `Ctrl+Shift+Delete` (Windows) ou `Cmd+Shift+Delete` (Mac)
   - Ou use modo anônimo: `Ctrl+Shift+N` (Windows) ou `Cmd+Shift+N` (Mac)
   - Ou force reload: `Ctrl+F5` (Windows) ou `Cmd+Shift+R` (Mac)

3. **Verifique o arquivo JS no site**:

   - Abra: https://luizaantiques.github.io/static/js/main.b5d649c7.js
   - Se conseguir ver o conteúdo, o arquivo está online
   - Se der 404, aguarde mais alguns minutos

4. **Verifique as configurações do GitHub Pages**:
   - Vá em: Settings > Pages
   - Certifique-se de que está servindo da branch `main` e pasta `/ (root)`

### 🛠️ Se Ainda Não Funcionar

1. **Force um novo deploy**:

   ```bash
   npm run deploy
   ```

2. **Verifique se os arquivos estão no repositório**:

   - Acesse: https://github.com/LuizaAntiques/LuizaAntiques.github.io
   - Verifique se `index.html` e `static/` estão na raiz
   - Verifique se `.nojekyll` existe na raiz

3. **Re-deploy manual no GitHub**:

   - Vá em: Settings > Pages
   - Clique em "Save" novamente (mesmo sem mudar nada)
   - Isso força um novo build

4. **Verifique o histórico de Actions** (se usar GitHub Actions):
   - Vá em: Actions
   - Veja se há erros nos últimos deploys

### 📝 Checklist de Deploy

- [ ] Build foi feito com sucesso (`npm run build`)
- [ ] Arquivos foram copiados para a raiz (`cp -r build/* .`)
- [ ] Arquivo `.nojekyll` existe na raiz
- [ ] Commit foi feito (`git commit`)
- [ ] Push foi feito (`git push`)
- [ ] Aguardou 2-5 minutos
- [ ] Limpou cache do navegador
- [ ] Testou em modo anônimo

### 🔗 Links Úteis

- Site: https://luizaantiques.github.io
- Repositório: https://github.com/LuizaAntiques/LuizaAntiques.github.io
- Status do GitHub Pages: https://github.com/LuizaAntiques/LuizaAntiques.github.io/settings/pages
