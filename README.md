# 🚀 Automação QA Momentum - Playwright #

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
## 🚀 2. Como Executar os Testes
Como o projeto utiliza BDD (Gherkin), nós utilizamos o comando bddgen para traduzir as features antes de executar os testes.

### Execução Visual (Headed)
Ideal para acompanhar o robô interagindo com a tela e clicando nos elementos:

```Bash
npx bddgen && npx playwright test --headed
```

### Visualizar o Relatório (Trace Viewer)
Após a execução, se algum teste falhar, abra o relatório para ver os logs, prints e a gravação de rede:

```Bash
npx playwright show-report
```

## 📂 3. Entendendo a Estrutura
Para facilitar a manutenção e a criação de novos cenários, a arquitetura está dividida nas seguintes camadas:

  features/: Arquivos .feature contendo as regras de negócio em português (Dado, Quando, Então).
  
  steps/: A camada técnica em TypeScript que executa os passos definidos nas features.
  
  pages/: Arquivos de Page Objects com os seletores de tela.
  
  support/: Configurações de massa de dados, utilitários de API e conexões com Banco de Dados.
  
  playwright.config.ts: Arquivo central com configurações de timeout, navegadores e paralelismo.

### Dica para o VS Code:### Instale a extensão Cucumber (Gherkin) Full Support para ter o código colorido e autocompletar ao ler as features.
