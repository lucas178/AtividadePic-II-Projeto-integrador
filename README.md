. Cupcake Mani (app) - Projeto Integrador PIC II - Engenharia de Software

Links do projeto

-Vídeo explicativo - 
Usuário e senha para acesso a área administrativa
. Usuário: admin
. Senha: admin123

. Informações do projeto

O aplicativo de cupcake tem como objetivo a exposição e venda virtual desses mini bolos adorados e difundidos por todo o mundo, para que o cliente tenha total acesso e visualização do que irá adquirir

. Testes

Testes de Integração (Backend) Em conformidade com as boas práticas de desenvolvimento e para garantir a integridade da API, foram desenvolvidos Testes de Integração para as camadas de Controlador e Repositório. Estes testes garantem que os endpoints da API e a comunicação com o banco de dados estejam funcionando corretamente no contexto da aplicação. As classes de testes inovadores estão localizadas no diretório /backend/src/test/java do repositório e incluem: ProdutoControllerIT.java (5 testes): Focados na verificação dos endpoints REST de produtos (listagem, busca por ID) utilizando MockMvc. ClienteRepositoryTest.java (3 testes): Focados na camada de persistência, verificando operações CRUD e consultas personalizadas de clientes. AuthServiceIT.java (2 testes): Focados na integração do serviço de autenticação com o Spring Security e a geração de JWT. Total de Testes: 10 Resultado: Todos os 10 testes de integração e persistência foram executados com sucesso utilizando o comando ./mvnw test, confirmando a comunicação correta entre as camadas da aplicação (Controller, Service, Repository) e a funcionalidade dos principais fluxos da API.

Testes FrontEnd - Conforme foi solicitado, os testes com 5 amigos foram anexados junto ao arquivo word na plataforma do curso

Novas Funcionalidades

De acordo com o pedido desse semestre foram feitas melhorias de algumas funcionalidades:


<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1QWDktBffMrBqkkkAGA97M8iBNqOGfCNx

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
