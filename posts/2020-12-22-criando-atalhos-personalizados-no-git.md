---
title: Criando Atalhos Personalizados no Git
description: Criando Atalhos Personalizados no Git
date: 2020-12-22 02:04:24
thumbnail: assets/img/girassol.jpg
category: dev
background: "#7AAB13"
---
# Iniciando o Projeto

1º Criar uma pasta para guardar a personalização do git com um arquivo index.js dentro.

2º Cria um `git init`, `git add .` e `git commit -m "primeiro commit"` dentro do projeto.

# Trocando a configuração personalizada do git global para o editor vs code.

1º No terminal do git na pasta do diretório digita e o comando `git config --global core.editor code`, fazendo isso vai liberar o acesso as informações diretamente dento do vs code.

2º Para abrir no vs code basta digitar `git config --global --edit`, isso abrirá o vs code com as informações de acesso para modificação.

```javascript
[filter "lfs"]
	clean = git-lfs clean -- %f
	smudge = git-lfs smudge -- %f
	process = git-lfs filter-process
	required = true
[user]
	name = seu nome do git
	email = seu email do git
[core]
	editor = code

```

# Criando Alias.

1º Criar `[alias]` na última linha e na criar seus comandos personalizados para o git

```javascript
[alias]
c = !git add --all && git commit -m
s = !git status -s
l = !git log --pretty=format:'%C(blue)%h %C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'
```

















