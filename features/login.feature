# language: pt
@login @e2e
Funcionalidade: Login no sistema
  Como um usuário do sistema
  Quero realizar o login
  Para acessar as funcionalidades da plataforma

  Contexto:
    Dado que esteja na home

  @login_sucesso
  Cenário: Logar com usuário padrão com sucesso
    Quando realizar login
    Então deverá logar com sucesso

  @logout
  Cenário: Realizar logout do sistema
    Dado realizar login
    Quando realizar logout
    Então deverá validar a home deslogada