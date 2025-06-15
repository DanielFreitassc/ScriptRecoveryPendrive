# 🧼 Script de Formatação Segura de Pendrive (Diskpart Interativo)

Este script `.bat` foi criado para **formatar com segurança um pendrive** ou outro disco externo no Windows usando o `diskpart`, com uma interface interativa no terminal.

---

## ⚠️ Aviso de Segurança

> **Este script APAGA TODO O CONTEÚDO do disco selecionado.**
> Use com extrema cautela e certifique-se de escolher corretamente o número do pendrive (verificado na listagem dos discos).

---

## ✅ O que o script faz

1. Lista todos os discos conectados ao sistema.
2. Solicita ao usuário que informe o número do disco a ser formatado.
3. Permite escolher entre formatação **FAT32** ou **NTFS**.
4. Pede confirmação antes de executar qualquer alteração.
5. Executa os comandos:
   - `clean all` (zera o disco inteiro, inclusive tabela de partições)
   - Cria nova partição primária
   - Formata com o sistema de arquivos escolhido
   - Atribui uma letra de unidade

---

## 📋 Como usar

1. Salve o script como `formatar_pendrive_interativo.bat`.
2. Clique com o botão direito no arquivo e selecione **Executar como administrador**.
3. Será exibida uma lista de discos conectados (ex: Disco 0, Disco 1...).
4. Digite o número do disco correspondente ao seu pendrive.
5. Escolha o sistema de arquivos: FAT32 ou NTFS.
6. Confirme digitando `S` quando solicitado.
7. Aguarde a finalização da formatação.

---

## 🧪 Exemplo de uso

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

>>> VOCÊ SELECIONOU O DISCO: 1
>>> SISTEMA DE ARQUIVOS ESCOLHIDO: fat32
>>> TODAS AS PARTIÇÕES SERÃO APAGADAS!

Tem certeza que deseja continuar? (S/N): S

Iniciando formatação do disco 1 com fat32...
````

---

## 🧰 Requisitos

* Windows 10 ou superior
* Acesso com permissões de administrador

---

## 📎 Observações

* O script oferece a escolha entre **FAT32** e **NTFS** durante a execução.
* O comando `clean all` apaga todos os dados e estruturas de partição — ideal para discos que estão com partições corrompidas ou uso incorreto de espaço.
* Pode ser adaptado facilmente para suportar **exFAT**, se necessário.

---

## ✅ Licença

Uso livre para fins pessoais e educacionais. Sem garantias. Use por sua conta e risco.
