# diary

> MakeNowJust's diary system

[![XO code style][xo-badge]](https://github.com/xojs/xo)

[xo-badge]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=for-the-badge&colorA=249786

## Getting Started

```console
$ git clone https://github.com/MakeNowJust/diary
$ cd diary
$ npm install
```

Then, start development server:

```console
$ npm run dev
```

## Architecture

Using tools and libraries:

- [Gatsby](https://www.gatsby.org): a static site generator with React & GraphQL
- [Storybook](https://storybook.js.org): UI component explorer
- [Sass](https://sass-lang.com): CSS with superpowers
- [Remark](https://remark.js.org): Markdown processor powered by plugins

and, [more and more](./package.json).

Directory structure:

- [src/](./src)
  - [assets/](./src/assets): non-source code assets (icons)
  - [components/](./src/components): React components
  - [containers/](./src/containers): React components having GraphQL query
  - [pages/](./src/pages): entrypoint React components
  - [posts/](./src/posts): Markdown posts
  - [stories/](./src/stories): Storybook specs
  - [styles](./src/styles): Sass styles
  - [templates/](./src/templates): entrypoint React components used as template
  - [utils/](./src/utils): utility codes
- [plugins/](./plugins): private Gatsby plugins

## Copyright

© 2016-2023 TSUYUSATO "[MakeNowJust](https://github.com/MakeNowJust)" Kitsune
