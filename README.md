# Monorepo Example 

This is a simple application used to demonstrate how the monorepo structure can be achieved using `vite` and `pnpm`/`pnpm workspaces`

## Application Structure 



# Setup steps 

These are the basic steps that I took to setup the repo: 

Create the `app` module: 

```sh
pnpm create vite@latest

◇  Project name:
│  app
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript + SWC
```

Create the packages: 

```sh 
mkdir packages 

pnpm create vite@latest

◇  Project name:
│  submodule-1
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript + SWC

pnpm create vite@latest

◇  Project name:
│  submodule-2
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript + SWC
```

Create a pnpm-workspace.yaml that includes the following: 

```yaml 
packages:
  # specify a package in a direct subdir of the root
  - "app"
  # all packages in direct subdirs of packages/
  - "packages/*"
```

Remove the `dependencies` and `devDependencies` from the `app/package.json`, `submodule-1/package.json` and `submodule-2/package.json`. Adding the dependencies into the root `package.json`
