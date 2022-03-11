# Teste para candidatos à vaga de Desenvolvedor PHP Júnior

Candidato: Antonio Souza

## Tecnologias Utilizadas:
  ### Backend:
    - Node.js
    - Express-js
    - MySQL
  ### Frontend:
    - React.js + Hooks
    - Bootstrap
  ### Containerização:
    - Docker


Essas tecnologias foram escolhidas visando a performance e escalabilidade das tecnologias mais novas.

Usando Node.js pelo seu poder de escalar aplicações pela sua facilidade de lidar com múltiplas requisições pela sua
característica de ser uma linguagem non-blocking.

Juntamente com o React.js pela caracterísca de componentização, deixando um código muito mais legível, juntamente com a característica de ser uma SPA (Single Page Application), deixando uma melhor experiência para o usuário.

E por fim com o Docker para containerizar a aplicação e garantir sua execução em qualquer ambiente.
## Instruções

Após fazer o clone, entre na pasta raiz do projeto e use o comando `docker-compose up`.

O Docker fará os pulls e instalações necessárias e fará os seguintes binds: 
- website: 3000
- server: 3001
- db: 3306