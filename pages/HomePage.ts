// Caminho sugerido: pages/HomePage.ts
import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    // Locators que usamos nos expects do seu arquivo de steps
    readonly menuModulesLocator: Locator;
    readonly alertMessageLocator: Locator;
    readonly inputUserLocator: Locator;
    readonly inputPasswordLocator: Locator;
    readonly btnLoginLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        
        // Substitua os seletores abaixo pelos reais do seu sistema (CSS ou XPath)
        this.menuModulesLocator = page.locator('.ng-trigger-hamburger');
        this.alertMessageLocator = page.locator('.alert-error'); 
        this.inputUserLocator = page.locator('#logon'); 
        this.inputPasswordLocator = page.locator('#password');
        this.btnLoginLocator = page.locator('button[type="submit"]'); 
    }

    async load() {
        // Usa a URL base do seu arquivo .env.pre_prod
        await this.page.goto(process.env.BASE_URL || '/');
    }

    async loginWith(usuario?: string, senha?: string) {
        if (usuario) await this.inputUserLocator.fill(usuario);
        if (senha) await this.inputPasswordLocator.fill(senha);
        await this.btnLoginLocator.click();
    }

    async acessarSck() {
        await this.page.locator('#link-sck').click();
    }

    async acessarMenuUsuario() {
        await this.page.locator('.wrap .empty').click();
    }

    async deslogarUsuario() {
        await this.page.getByText('Sair', { exact: true }).click();
    }
}