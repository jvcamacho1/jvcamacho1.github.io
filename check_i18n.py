"""Confere o portfólio: toda chave data-i18n do HTML tem tradução em inglês,
e todo link relativo aponta para um arquivo que existe.

    python portfolio/check_i18n.py
"""

import re
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent
PAGINAS = sorted(RAIZ.rglob("*.html"))
ARQUIVOS_OPCIONAIS = {"cv/curriculo-pt.pdf", "cv/resume-en.pdf"}


def chaves_en() -> set[str]:
    js = (RAIZ / "assets" / "i18n.js").read_text(encoding="utf-8")
    bloco = js.split("const EN = {", 1)[1].split("\n};", 1)[0]
    return set(re.findall(r'^\s*"([\w.]+)":', bloco, flags=re.M))


def main() -> int:
    en = chaves_en()
    usadas: set[str] = set()
    erros: list[str] = []
    for pagina in PAGINAS:
        html = pagina.read_text(encoding="utf-8")
        usadas |= set(re.findall(r'data-i18n="([\w.]+)"', html))
        for alvo in re.findall(r'\s(?:href|src)="([^"#:]+)"', html):
            caminho = (pagina.parent / alvo).resolve()
            dentro = caminho.is_relative_to(RAIZ)
            relativo = caminho.relative_to(RAIZ).as_posix() if dentro else alvo
            if not caminho.exists() and relativo not in ARQUIVOS_OPCIONAIS:
                erros.append(f"{pagina.relative_to(RAIZ)}: link quebrado -> {alvo}")
    erros += [f"sem tradução EN: {k}" for k in sorted(usadas - en)]
    sobrando = sorted(en - usadas)
    for erro in erros:
        print("ERRO", erro)
    for k in sobrando:
        print("aviso: chave EN sem uso no HTML:", k)
    print(f"{len(usadas)} chaves em {len(PAGINAS)} páginas, {len(erros)} erro(s)")
    return 1 if erros else 0


if __name__ == "__main__":
    sys.exit(main())
