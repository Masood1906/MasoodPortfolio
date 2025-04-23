// lib/path.ts
export function getBasePath() {
  return process.env.NODE_ENV === 'production' ? 'https://github.com/Masood1906/MasoodPortfolio.git' : '';
}
