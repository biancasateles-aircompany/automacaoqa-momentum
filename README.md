**🚀 Automação QA Momentum - Playwright**

Bem-vindo(a)! Este é o repositório principal da suíte de testes (E2E e API) da **Momentum**. O projeto foi migrado e estruturado utilizando **Playwright**, **TypeScript** e **Cucumber (BDD)**.

O foco desta arquitetura é facilitar o consumo e a execução dos testes no dia a dia. Siga o guia abaixo para configurar tudo na sua máquina.

---

## ⚙️ 1. Baixando e Instalando o Projeto

Se você está configurando o projeto pela primeira vez, abra o terminal (PowerShell, Git Bash ou o terminal do VS Code) na pasta onde costuma salvar seus projetos e siga a sequência:

### Passo 1: Clonar o repositório
Baixe o código-fonte para a sua máquina:
```bash
git clone [https://github.com/SEU-USUARIO/automacaoqa-momentum.git]
````

### Passo 2: Acessar a pasta do projeto
Entre no diretório que acabou de ser criado:

```Bash
cd automacaoqa-momentum
```

### Passo 3: Instalar as dependências
**⚠️ Pré-requisito: É necessário ter o Node.js instalado na máquina.**
Baixe todas as bibliotecas do projeto (Playwright, pacotes de BDD, etc) executando:
```Bash
npm install
```

### Passo 4: Instalar os navegadores
O Playwright gerencia os próprios navegadores para garantir estabilidade. Baixe-os executando:

```Bash
npx playwright install
```

### Pronto! Seu ambiente está 100% configurado para rodar a automação.

----
