# Criptografia de textos com chave simétrica em tokens JWE com interface web React

Demonstração de como criptografar textos gerando tokens JWE, o que não permite identificar seu conteúdo. Foi utilizada chave simétrica para simplificar o processamento.

## ✨ Features
- Criptografar: Digite o conteúdo desejado e clique em Cript. O token correspondente será gerado e automaticamente copiado para área de transferência para enviar para o destinarário. Caso a pessoa sem querer copie outra coisa por cima, há um botão para facilitar a cópia para a área de transferência novamente. Botão só fica disponível ao digitar alguma coisa e o usuário é notificado de que o token foi gerado.
- Desvendar: Este botão só é habilitado ao receber um texto do tamanho mínimo esperado para o token de resposta. Caso o token JWE tenha sido burlado, será exibido que houve um erro. Estando tudo certo, o cabeçalho muda para Texto Original para deixar evidente do que se trata o conteúdo apresentado na tela.

## 📦 Utilização
Recomenda-se usar a extensão Live Server do VSCode
Clone the repository and install dependencies:

```bash
git clone https://github.com/germano-92/criptografia-jwe-react.git
cd criptografia-jwe-react
npm install
