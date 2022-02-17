import { marked, Renderer } from 'marked';

const renderer: any = new Renderer();
renderer.link = (href: string, title: string, text: string) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

export { marked, renderer };
