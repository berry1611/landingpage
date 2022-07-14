import { fileURLToPath } from 'url';

export const getStoragePath = () => {
  const fullPath = fileURLToPath(import.meta.url);
  const indexOfUtils = fullPath.indexOf('src');
  const baseDir = fullPath.slice(0, indexOfUtils - 1);

  return baseDir;
};
