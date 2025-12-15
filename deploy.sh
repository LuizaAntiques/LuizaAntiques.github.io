#!/bin/bash

# Script de deploy para GitHub Pages
echo "🔨 Fazendo build do projeto..."
npm run build

echo "📦 Copiando arquivos de build para a raiz..."
cp -r build/* .

echo "📝 Verificando alterações..."
git add -A

if git diff --staged --quiet; then
    echo "✅ Não há alterações para commitar. Build já está atualizado!"
else
    echo "💾 Fazendo commit..."
    git commit -m "Deploy: atualiza build"
    
    echo "🚀 Fazendo push para o GitHub..."
    git push
    
    echo "✅ Deploy concluído! O GitHub Pages atualizará em alguns minutos."
fi

