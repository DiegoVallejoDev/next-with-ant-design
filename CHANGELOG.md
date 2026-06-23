# Changelog

## [2.0.0] - 2026-06-23

### Breaking Changes

- **Node.js 18+ required** (previously no minimum specified)
- **React 19** (upgraded from React 17)
- **Ant Design 5** (upgraded from v4.4.3) — component APIs have changed
- **TypeScript strict mode** enabled
- Removed Less-based theming — replaced with CSS-in-JS tokens

### Added

- `pages/_document.tsx` — proper HTML document shell
- `styles/theme.ts` — centralized Ant Design theme configuration
- `eslint.config.mjs` — ESLint flat config with Next.js rules
- `.nvmrc` — Node version pinning (v20)
- Fully implemented `welcome.tsx` page (account settings UI)
- Fully implemented `example.tsx` page (data table + statistics)
- TypeScript types across all pages and components

### Changed

- **Next.js** pinned `"latest"` → `^15.3.3`
- **@ant-design/pro-layout** 6 → 7 with updated API
- **@ant-design/icons** 4.1 → 6.2
- All pages converted from JavaScript to TypeScript (`.js` → `.tsx`)
- `Select` uses `options` prop instead of `<Option>` children
- `Link` no longer wraps `<a>` tag (Next.js 13+ pattern)
- Layout uses direct `ProLayout` import (no longer dynamic import with SSR disabled)
- Theme customization via `ConfigProvider` tokens (replaces Less variables)
- `next.config.js` → `next.config.mjs` (ESM)
- Repository URL updated to `DiegoVallejoDev/next-with-ant-design`

### Removed

- `@zeit/next-less` — incompatible with Next.js 13+
- `babel-plugin-import` — tree-shaking handled natively by antd 5
- `esm`, `null-loader`, `webpack-filter-warnings-plugin` — no longer needed
- `less`, `less-vars-to-js` — replaced by CSS-in-JS
- `.babelrc` — Next.js default SWC compiler used instead
- `assets/antd-custom.less` — replaced by `styles/theme.ts`
- `styles.css` — replaced by CSS-in-JS
- `renovate.json` — removed (can be re-added if needed)

## [1.0.0] - 2020

- Initial release with Ant Design 4 + Next.js + React 17
