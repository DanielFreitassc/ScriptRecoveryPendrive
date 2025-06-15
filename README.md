# 🧼 Script de Formatação Segura de Pendrive (Diskpart Interativo)

Este script `.bat` foi criado para **formatar com segurança um pendrive** ou outro disco externo no Windows usando o `diskpart`, com uma interface interativa via terminal.

---

## ⚠️ Aviso de Segurança

> **Este script APAGA TODO O CONTEÚDO do disco selecionado.**
> Use com extrema cautela e certifique-se de escolher o número correto do dispositivo removível (pendrive).

---

## ✅ O que o script faz

1. Lista todos os discos conectados ao sistema.
2. Solicita ao usuário que digite o número do disco que deseja formatar.
3. Pede confirmação antes de continuar.
4. Executa os comandos:
   - `clean all` (zera o disco inteiro, incluindo tabela de partição)
   - Cria nova partição primária
   - Formata como **FAT32**
   - Atribui uma letra de unidade

---

## 📋 Como usar

1. **Clique com o botão direito no script** `formatar_pendrive_interativo.bat` e selecione **Executar como administrador**.
2. Será exibida uma lista de discos conectados (Disk 0, Disk 1, ...).
3. Digite o número do disco correspondente ao pendrive.
4. Confirme com `S` quando for solicitado.
5. Aguarde a finalização da formatação.

---

## 🧪 Exemplo de uso

```

\===========================================
LISTANDO OS DISCOS DISPONÍVEIS
==============================

Disco ###  Status         Tamanho     Livre     Din     GPT

---

Disco 0     Online         476 GB      0 B        \*       \*
Disco 1     Online         14 GB       14 GB

Digite o número do disco que deseja formatar (ex: 1): 1

> > > VOCÊ SELECIONOU O DISCO: 1
> > > TODAS AS PARTIÇÕES SERÃO APAGADAS!

Tem certeza que deseja continuar? (S/N): S

````

---

## 🧰 Requisitos

- Windows 10 ou superior
- Permissões de Administrador

---

## 📎 Observações

- O script formata o disco usando `FAT32`. Se preferir `NTFS`, altere a linha:
  ```bat
  format fs=fat32 quick
````

para:

```bat
format fs=ntfs quick
```

---

## ✅ Licença

Uso livre para fins pessoais e educacionais.

```
