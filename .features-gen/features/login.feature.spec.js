// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Login no sistema', () => {

  test.beforeEach('Contexto', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('que esteja na home', null, { page }); 
  });
  
  test('Logar com usuário padrão com sucesso', { tag: ['@login', '@e2e', '@login_sucesso'] }, async ({ When, Then, page }) => { 
    await When('realizar login', null, { page }); 
    await Then('deverá logar com sucesso', null, { page }); 
  });

  test('Realizar logout do sistema', { tag: ['@login', '@e2e', '@logout'] }, async ({ Given, When, Then, page }) => { 
    await Given('realizar login', null, { page }); 
    await When('realizar logout', null, { page }); 
    await Then('deverá validar a home deslogada', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":12,"tags":["@login","@e2e","@login_sucesso"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que esteja na home","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"Quando realizar login","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Então deverá logar com sucesso","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":17,"tags":["@login","@e2e","@logout"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que esteja na home","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Dado realizar login","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"Quando realizar logout","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Então deverá validar a home deslogada","stepMatchArguments":[]}]},
]; // bdd-data-end