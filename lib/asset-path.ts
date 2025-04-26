export function getAssetPath(path: string): string {
    // For client-side rendering
    if (typeof window !== 'undefined') {
      // Check if we're on GitHub Pages or local
      const isGitHubPages = window.location.hostname !== 'localhost';
      return isGitHubPages ? `/MasoodPortfolio${path}` : path;
    }
    
    // For server-side rendering
    return process.env.NODE_ENV === 'production' ? `/MasoodPortfolio${path}` : path;
  }