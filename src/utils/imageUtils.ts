/**
 * Utility functions for handling image paths with the correct base path
 */

/**
 * Gets the correct image path with the base path prefix for production
 * @param path The image path without base path
 * @returns The image path with base path prefix if in production
 */
export function getImagePath(path: string): string {
  // Check if the path already starts with the base path
  if (path.startsWith('/eportfolio/')) {
    return path;
  }
  
  // In production, prepend the base path
  const basePath = process.env.NODE_ENV === 'production' ? '/eportfolio' : '';
  
  // Ensure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
}