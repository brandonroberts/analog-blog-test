import { provideContent, withMarkdownRenderer } from '@analogjs/content';

/**
 * Common providers shared with client and server-side.
 */

export const mainProviders = [
  provideContent(withMarkdownRenderer())
];
