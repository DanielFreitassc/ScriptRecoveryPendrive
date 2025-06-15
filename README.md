# 🧼 Script de Formatação Segura de Pendrive (Diskpart Interativo)

Este script `.bat` foi criado para **formatar com segurança um pendrive** ou outro disco externo no Windows utilizando o `diskpart`, com uma interface interativa via terminal.

---

## ⚠️ Aviso de Segurança

> **Este script APAGA TODO O CONTEÚDO do disco selecionado.**
> Use com extrema cautela e certifique-se de escolher corretamente o número do pendrive, conforme listado na tela.

---

## ✅ Funcionalidades do Script

1. Lista todos os discos conectados ao sistema.
2. Solicita que o usuário informe o número do disco a ser formatado.
3. Permite escolher o sistema de arquivos para a formatação: **FAT32** ou **NTFS**.
4. Permite escolher entre limpeza rápida (`clean`) ou completa (`clean all`), com aviso de que a limpeza completa pode levar mais tempo.
5. Solicita confirmação antes de executar qualquer ação.
6. Executa os comandos:

   * `clean` ou `clean all` (de acordo com a escolha do usuário)
   * Cria uma partição primária nova
   * Formata com o sistema de arquivos escolhido
   * Atribui automaticamente uma letra de unidade

---

## 📋 Como usar

1. Salve o script como `formatar_pendrive_interativo.bat`.
2. Clique com o botão direito no arquivo e escolha **Executar como administrador**.
3. Observe a lista de discos exibida (exemplo: Disco 0, Disco 1, etc).
4. Digite o número do disco correspondente ao pendrive que deseja formatar.
5. Escolha o sistema de arquivos (FAT32 ou NTFS).
6. Escolha o tipo de limpeza (rápida ou completa).
7. Confirme a operação digitando `S` quando solicitado.
8. Aguarde até a conclusão da formatação.

---

## 🧪 Exemplo de execução

```text
===========================================
      LISTANDO OS DISCOS DISPONÍVEIS
===========================================

  Disco ###  Status         Tamanho     Livre     Din     GPT
  ----------  -------------  ----------  --------  ------  ---
  Disco 0     Online         476 GB      0 B        *       *
  Disco 1     Online         14 GB       14 GB

Digite o número do disco que deseja formatar (ex: 1): 1

>>> Escolha o sistema de arquivos para a formatação:
[1] FAT32
[2] NTFS
Digite 1 ou 2: 1

>>> Escolha o tipo de limpeza:
[1] Limpeza rápida (clean) — apaga apenas as partições
[2] Limpeza completa (clean all) — apaga todos os dados, pode levar vários minutos
Digite 1 ou 2: 2

>>> VOCÊ SELECIONOU O DISCO: 1
>>> SISTEMA DE ARQUIVOS ESCOLHIDO: fat32
>>> TIPO DE LIMPEZA: clean all
>>> TODAS AS PARTIÇÕES E DADOS SERÃO APAGADOS!

Tem certeza que deseja continuar? (S/N): S

Iniciando formatação do disco 1 com fat32 (clean all)...
```

---

## 🧰 Requisitos

* Windows 10 ou superior
* Permissões de administrador para executar o script

---

## 📎 Observações

* O comando `clean all` apaga todos os dados e estrutura do disco e pode levar bastante tempo, especialmente em pendrives com dados residuais ou tabelas de partição antigas.
* Caso o pendrive apresente problemas após limpeza rápida, use a limpeza completa.
* É possível adaptar o script para incluir outros sistemas de arquivos, como exFAT, se necessário.

---

## ✅ Licença

Uso livre para fins pessoais e educacionais. Sem garantias. Use por sua conta e risco.
