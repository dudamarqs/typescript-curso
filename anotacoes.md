### Iniciar um projeto TS

- Criar a pasta do projeto → mkdir nome-do-projeto && cd nome-do-projeto
- Inicializar o package.json → npm init -y
- Instalar o TypeScript como dependência de desenvolvimento → npm install typescript -D
- Criar o arquivo de configuração do TypeScript → npx tsc --init
- Criar a pasta de código-fonte (opcional) → mkdir src
- Criar o arquivo principal → echo "console.log('Hello TS')" > src/index.ts
- Compilar o projeto TypeScript → npx tsc

### Comandos úteis para desenvolvimento
- Compilar e assistir mudanças automaticamente → npx tsc --watch
- Instalar o ts-node (executar sem copilar) → npm install ts-node -D
- Executar um arquivo .ts diretamente → npx ts-node src/index.ts
- Instalação do ESLint → npm i eslint -D
- Instalar ESLint (dependência de desenvolvimento) → npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
- Instalar puggin prettier → npm i -D eslint-config-prettier eslint-plugin-prettier prettier


### Extensões
- Reload
- Prettier ESLint
- ESLint
- Code Runner
- EditorConfig for VS Code