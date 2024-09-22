# Sistema de Egressos UFU

## Visão Geral

Este projeto utiliza **Angular 18** e organiza o código de forma modular para permitir escalabilidade e facilitar a manutenção. A estrutura principal está agrupada em três pastas principais: **core**, **features**, e **shared**.

### Descrição das Pastas

```md
src/
└── app/
├── core/
│ ├── auth/
│ ├── interceptors/
│ ├── strategy/
│ └── update/
├── features/
│ ├── coordinator/
│ │ ├── announcements/
│ │ ├── graduates/
│ │ └── coordinator.routes.ts
│ ├── graduates/
│ │ ├── academic-information/
│ │ ├── professional-information/
│ │ ├── testimonials/
│ │ └── graduates.routes.ts
│ ├── dashboard/
│ ├── home/
│ ├── login/
│ ├── not-found/
│ └── profile/
├── shared/
│ ├── animations/
│ ├── components/
│ ├── directives/
│ ├── enums/
│ ├── mocks/
│ ├── models/
│ ├── pipes/
│ ├── services/
│ ├── types/
│ └── utils/
├── app.component.html
├── app.component.scss
├── app.component.ts
├── app.config.ts
├── app.routes.ts
```

### Estrutura de Pastas

#### `/core`

Esta pasta contém funcionalidades centrais que são utilizadas por todo o projeto, como autenticação e interceptores. Aqui está o que cada subpasta faz:

- **auth**: Contém os módulos e serviços relacionados à autenticação e autorização.
- **interceptors**: Interceptores HTTP para manipular requisições e respostas.
- **strategy**: Implementações de estratégias personalizadas para autenticação.
- **update**: Gerenciamento de atualizações no aplicativo.

#### `/features`

A pasta **features** é responsável por agrupar as telas e funcionalidades específicas de cada tipo de usuário e perfil de acesso. Ela está subdividida conforme os tipos de acesso, agrupando funcionalidades específicas para coordenadores/diretores e para os alunos (egressos):

- **coordinator**: Funcionalidades específicas para coordenadores/diretores. Contém:

  - **announcements**: Módulo para gerenciamento de anúncios.
  - **graduates**: Subfuncionalidades relacionadas aos graduados, organizadas e acessíveis apenas por coordenadores.
  - **coordinator.routes.ts**: Arquivo de rotas específicas para coordenadores/diretores.

- **graduates**: Funcionalidades acessíveis pelos graduados (egressos). Contém:

  - **academic-information**: Tela para gestão de informações acadêmicas.
  - **professional-information**: Tela para informações profissionais.
  - **testimonials**: Seção para depoimentos de egressos.
  - **graduates.routes.ts**: Arquivo de rotas específico para os egressos.

- **dashboard**: Contém componentes e telas compartilhadas por todos os perfis, como a tela inicial (dashboard).

- **home, login, not-found, profile**: Telas e funcionalidades gerais, disponíveis para todos os usuários.

#### `/shared`

A pasta **shared** contém módulos reutilizáveis que podem ser compartilhados entre diversas partes do projeto. Esses componentes são desenhados para serem genéricos e aplicáveis a diferentes seções da aplicação:

- **animations**: Animações utilizadas de maneira compartilhada.
- **components**: Componentes comuns e reutilizáveis.
- **directives**: Diretivas personalizadas.
- **enums**: Enums que ajudam a padronizar valores utilizados em diferentes partes do projeto.
- **mocks**: Mocks e dados de exemplo para testes e desenvolvimento.
- **models**: Modelos de dados que são compartilhados entre os módulos.
- **pipes**: Pipes reutilizáveis.
- **services**: Serviços compartilhados, como comunicação com APIs ou lógica de negócios comum.
- **types**: Definições de tipos TypeScript comuns no projeto.
- **utils**: Funções utilitárias compartilhadas.

### Gerenciamento de Rotas

O projeto utiliza um arquivo de rotas principal localizado em **app.routes.ts**, que agrupa e direciona as rotas para as diferentes features do projeto. Existem também arquivos de rotas específicos para coordenadores e graduados, organizados dentro de suas respectivas pastas.

### Perfis de Acesso

O sistema possui diferentes níveis de acesso com funcionalidades e telas específicas para cada perfil:

- **Coordenador/Diretor**: Tem acesso a funcionalidades administrativas como o gerenciamento de anúncios e o controle de informações dos graduados.
- **Graduado/Egresso**: Pode acessar suas próprias informações acadêmicas e profissionais, além de poder enviar depoimentos.
- **Público Geral**: Tem acesso limitado, geralmente podendo apenas ver dashboards públicos.

### Principais Convenções

- **Agrupamento por Perfil**: As funcionalidades são agrupadas por perfil, com algumas funcionalidades disponíveis apenas para coordenadores/diretores e outras para alunos (egressos).
- **Shared Module**: Os módulos reutilizáveis (como componentes, pipes, e services) são centralizados na pasta `/shared` para promover a reutilização e evitar duplicação de código.

## Development server

Execute `ng serve` para iniciar o servidor de desenvolvimento. Navegue para `http://localhost:4200/`. O aplicativo será recarregado automaticamente ao alterar qualquer arquivo de código-fonte.

## Code scaffolding

Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module` para criar outras partes do aplicativo.

## Build

Execute `ng build` para compilar o projeto. Os artefatos de build serão armazenados na pasta `dist/`.

---
