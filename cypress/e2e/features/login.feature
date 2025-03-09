Feature: Login

  Scenario: Login bem-sucedido
    Given a página de login seja carregada
    When o usuario realiza o login com sucesso
    Then deve ser redirecionado para a página inicial

