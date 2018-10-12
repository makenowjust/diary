# maidfile

## dev

Start development server.

```bash
set -ex
gatsby develop
```

## lint

Run linter for source codes.

When `--fix` option is given, linters try to fix errors automatically.

```bash
if [[ $1 == --fix ]]; then
  lint_opt=--fix
  prettier_opt=--write
else
  lint_opt=
  prettier_opt=--list-different
fi
set -ex
prettier-package-json $prettier_opt
prettier --ignore-path .prettierignore '**/*.{js,json,md}' $prettier_opt
```
