# Portfólio de Engenharia de Dados (PT/EN)

Site estático, sem build e sem dependências: HTML, CSS e um JS pequeno.
Abre com um duplo clique no `index.html` e funciona no GitHub Pages sem
nenhuma configuração.

```
index.html             → página principal (hero, sobre, stack, projeto em destaque, próximos projetos, contato)
projetos/orbita.html   → estudo de caso do Órbita Notícias
assets/style.css       → tema claro/escuro automático + botão, responsivo
assets/i18n.js         → seus dados (CONFIG), textos em inglês (EN), alternância PT/EN e tema
check_i18n.py          → confere traduções faltando e links quebrados
```

## 1. Seus dados

Nome, LinkedIn, GitHub e e-mail ficam no objeto `CONFIG`, no topo de
`assets/i18n.js`. Os currículos ficam em `cv/` (`curriculo-pt.pdf` e
`resume-en.pdf`), e o botão "Currículo" abre o PDF do idioma escolhido.
Quando atualizar o CV, substitua os PDFs mantendo esses nomes e ajuste as
seções **Experiência** e **Stack** em `index.html` (PT) e em `EN` (inglês).

Na **Stack**, `chip used` marca o que já foi usado profissionalmente ou em
produção, e `chip` sozinho marca o que está em estudo.

## 2. Como funciona o bilíngue

- O **português** está escrito direto no HTML.
- Todo elemento traduzível tem `data-i18n="chave"`, e o **inglês** dessa
  chave fica no objeto `EN` em `assets/i18n.js`.
- O idioma inicial segue o navegador (`pt*` → PT, o resto → EN). A escolha
  fica guardada no `localStorage`.

Para adicionar um texto, escreva em PT no HTML com uma `data-i18n` nova e
adicione a mesma chave em `EN`. Depois rode:

```bash
python check_i18n.py
```

## 3. Pré-visualizar

```bash
python -m http.server 8000   # http://localhost:8000
```

## 4. Publicação

Este repositório é servido pelo GitHub Pages em
**https://jvcamacho1.github.io**. Cada push na `main` publica em um ou dois
minutos. O `.nojekyll` desliga o processamento Jekyll, que não é usado aqui.

A versão original do site vive em `portfolio/` no repositório
[`jvcamacho1/orbita`](https://github.com/jvcamacho1/orbita).

## 5. Próximos projetos

A seção "Próximos projetos" lista três projetos marcados como
**Em construção** (lakehouse na AWS com Terraform + Iceberg, ELT com
Airflow + dbt e streaming com Kafka). Quando terminar um, troque o badge por um link para o repositório e
repita a estrutura do `projetos/orbita.html` para escrever o estudo de caso.
