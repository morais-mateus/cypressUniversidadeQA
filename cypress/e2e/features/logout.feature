 Feature: Logout

  Scenario: Realizar logout com sucesso
    Given que usuario está logado no site
    When deseja realizar o logout
    Then deve ser redirecionado para a página de login