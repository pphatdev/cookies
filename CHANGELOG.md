# Changelog

All notable changes to this project will be documented in this file.

## [0.2.0] - 2024-01-10

### Added
- React hook support with [`useCookies`](src/hooks/useCookies.ts)
- Server-side rendering (SSR) support via `isClient()` check
- SameSite cookie attribute support
- TypeScript type definitions and interfaces
- Support for React 16.8+ and React DOM

### Changed
- Renamed methods to follow consistent naming:
  - `set` -> `setItem`
  - `get` -> `getItem`
  - `remove` -> `removeItem`
  - `keys` -> `getKeys`
- Updated cookie options interface with better type definitions
- Improved error handling and type safety

### Fixed
- Cookie encoding/decoding implementation
- Path handling in cookie removal

## [0.1.0] - 2024-01-01

### Added
- Initial release
- Basic cookie operations (set, get, update, remove, clear)
- Cookie options support (expires, path, domain, secure)
- TypeScript support
- Basic documentation