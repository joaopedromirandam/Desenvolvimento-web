Testar a página inicial:
curl http://127.0.0.1:3000/
2. Testar a página Sobre:
curl http://127.0.0.1:3000/about
3. Upload de arquivo:
curl -X POST -F "file=@./readme.txt" http://127.0.0.1:3000/upload
