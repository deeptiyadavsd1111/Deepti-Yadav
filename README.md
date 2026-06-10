This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator. It is used by the Data protection team for documentation of internal processes and procedures.

# Live Site

The live site can be accessed at
https://dataprotection.pages.commbank.io/

# Node Version
This project uses Node.js version 20.x. It is recommended to use a Node version manager like [nvm](https://github.com/nvm-sh/nvm) to manage and switch between Node versions easily.

# Build Instructions

## Windows Users
```powershell
# Show available build targets
pwsh ./build.ps1 -Target Help

# Install dependencies and setup the environment
pwsh ./build.ps1 -Target Install

# Start the application or service
pwsh ./build.ps1 -Target Start

# Run the default build process
pwsh ./build.ps1 -Target Default

```

## Linux / MacOS Users

```bash
# Show available build targets
make help

# Install dependencies and setup the environment
make install

# Start the application or service
make start

# Clean build artifacts and temporary files
make clean

```

Start command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

# Linting

Linting is automatically run as part of the development server startup process via the prebuild.sh script when using `npm start` on Linux/macOS. On Windows, bash-based prechecks are skipped automatically and the app starts directly.

```bash
make lint-markdown
```

## Configuration Files

The project uses the following configuration files for linting:

- `.eslintrc.js` - ESLint configuration for JavaScript/TypeScript linting
- `tools/cspell.json` - CSpell configuration for spell checking


## CSpell Process and Whitelisting
CSpell is used for spell checking throughout the codebase.

> **Note:** We no longer use the `words` array inside `tools/cspell.json`. The dictionary has been split into multiple files under `tools/dictionaries/`.

### Dictionary Structure
```
tools/dictionaries/
```
- cspell-dicts-A-F.txt — words A–F
- cspell-dicts-G-L.txt — words G–L
- cspell-dicts-M-R.txt — words M–R
- cspell-dicts-S-Z.txt — words S–Z
- cspell-dicts-MISC.txt — acronyms and mixed-case terms

### Adding Words
Add new words (one per line) into the appropriate file based on starting letter.

### Ignored Paths
```
../content/contributions/thanks.md
```

### ESLint Process and Configuration

ESLint is used for code quality and style consistency across JavaScript and TypeScript files. The linter runs automatically during development and can also be executed manually.

#### ESLint Rules

The project uses a combination of:
- Recommended ESLint rules
- React-specific rules for JSX components
- TypeScript ESLint rules for type safety
- Custom project-specific rules

#### Common ESLint Issues

- **Unused variables**: Remove or prefix with underscore if intentionally unused
- **Missing semicolons**: Add semicolons at the end of statements
- **Inconsistent quotes**: Use double quotes consistently
- **Console statements**: Remove `console.log` statements before committing

# Contributing

This project follows the Commonwealth Bank contributing guidelines. Please ensure:

- All code changes go through pull requests
- Follow the established coding standards and conventions
- Run linting and tests before submitting changes
- Include appropriate documentation updates
- Obtain necessary approvals before merging

For detailed contribution guidelines, refer to the CBA Engineering standards and practices documentation.