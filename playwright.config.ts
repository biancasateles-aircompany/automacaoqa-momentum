import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';

// Lê a variável passada no terminal; se não houver, usa 'pre_prod' como padrão
const environment = process.env.ENV || 'pre_prod'; 

// Carrega o arquivo .env correspondente ao ambiente
dotenv.config({ path: `.env.${environment}` });

// 1. Configuração do BDD: Mapeia onde estão as regras de negócio e os códigos
const testDir = defineBddConfig({
  features: 'features/**/*.feature', // Aponta para todas as suas features
  steps: 'steps/**/*.ts',            // Aponta para os arquivos de automação
});

export default defineConfig({
  // 2. Diretório de Testes: Substitui os testes nativos pelo BDD compilado
  testDir,
  
  // 3. Configurações de Execução
  fullyParallel: true, // Roda os testes em paralelo para ganhar tempo
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  
  // 4. Relatórios de Execução
  reporter: 'html', // Gera um relatório visual bem completo no final

  // 5. Configurações Globais do Navegador
  use: {
   // headless: false garante que o navegador vai abrir na sua tela
    headless: false,
    // Agora o Playwright sabe qual URL usar nativamente
    baseURL: process.env.E2E_BASE_URL,
    // Coleta o Trace Viewer (logs, prints e rede) se o teste falhar
    trace: 'retain-on-failure',
    // Tira print automaticamente em caso de falha
    screenshot: 'on',
  },

  // 6. Navegadores Configurados
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Você pode descomentar os blocos abaixo futuramente se precisar testar em outros browsers
    /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */
  ],
});