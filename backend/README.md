# Elysia with Bun runtime

## Getting Started
To get started with this template, simply paste this command into your terminal:
```bash
bun create elysia ./elysia-example
```

## Development
To start the development server run:
```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.

# Drizzle Commands
Generate Migrations
```cmd
bun drizzle-kit generate
```

Apply Migrations
```cmd
bun drizzle-kit migrate
```

Applying Changes directly to the Database (ONLY FOR TESTING)
```
bun drizzle-kit push
```

# Recomended folder Structure from Claude
```
my-api/
├── src/
│   ├── index.ts              # Entry point
│   ├── db/
│   │   ├── index.ts          # Drizzle client
│   │   ├── schema.ts         # Table definitions
│   │   └── migrations/       # Drizzle migration files
│   ├── graphql/
│   │   ├── schema.ts         # GraphQL type definitions (SDL)
│   │   ├── resolvers/
│   │   │   ├── index.ts      # Merge all resolvers
│   │   │   ├── user.resolver.ts
│   │   │   └── post.resolver.ts
│   │   └── context.ts        # GraphQL context factory
│   ├── services/
│   │   ├── user.service.ts
│   │   └── post.service.ts
│   └── plugins/              # Elysia plugins (auth, logger, etc.)
│       └── auth.plugin.ts
├── drizzle.config.ts
├── package.json
└── tsconfig.json
```

# Recomended folder Stucture from ElysisaJS docs
```
| src
  | modules
	| auth
	  | index.ts (Elysia controller)
	  | service.ts (service)
	  | model.ts (model)
	| user
	  | index.ts (Elysia controller)
	  | service.ts (service)
	  | model.ts (model)
  | utils
	| a
	  | index.ts
	| b
	  | index.ts
```
