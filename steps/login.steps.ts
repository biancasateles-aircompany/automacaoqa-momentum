// 1. A importação muda: tiramos o @cucumber/cucumber e usamos o playwright-bdd
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

import { HomePage } from '../pages/HomePage';
import { dataStatic } from '../support/dataStatic';

// 2. Extraímos os comandos do createBdd()
const { Given, When, Then } = createBdd();

// 3. Injetamos a { page } e usamos arrow functions nativas do JS ( () => {} )
Given('que esteja na home', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.load();
});

When('realizar login', async ({ page }) => {
    const homePage = new HomePage(page);
    // Nota: Lembre-se de criar o arquivo .env.pre_prod com essas variáveis!
    await homePage.loginWith(process.env.DEFAULT_USER, process.env.DEFAULT_PASS);
});

When('realizar login de um usuário', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.loginWith(process.env.USER, process.env.PASS);
});

When('realizar login de um Funcionário da', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.loginWith(process.env.FUNC_USER, process.env.FUNC_PASS);
});

When('realizar login de um funcionário com conta operacional', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.loginWith(process.env.OPERATIONAL_USER, process.env.OPERATIONAL_PASS);
});

When('realizar login com HTML Injection', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.loginWith(dataStatic.usuario_inativo, dataStatic.login_html_injection);
});

When('acessar o SCK', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.acessarSck();
});

Then('deverá logar com sucesso', async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(homePage.menuModulesLocator).toBeVisible();
});

Then('o sistema não deverá aceitar uma Injeção de Tag HTML', async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(homePage.alertMessageLocator).toHaveText(dataStatic.login_html_injection_msg);
});

Given('que acesse menu do usuário', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.acessarMenuUsuario();
});

When('realizar logout', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.deslogarUsuario();
});

Then('deverá validar a home deslogada', async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(homePage.inputUserLocator).toBeVisible();
    await expect(homePage.inputPasswordLocator).toBeVisible();
    await expect(homePage.btnLoginLocator).toBeVisible();
});