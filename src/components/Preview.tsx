import prism from 'prismjs';
import { marked, renderer } from '../utils';

interface PreviewProps {
  markdown: string;
}

marked.setOptions({
  breaks: true,
  highlight(code) {
    return prism.highlight(code, prism.languages.javascript, 'javascript');
  }
});

export function Preview({ markdown }: PreviewProps) {
  return (
    <div
      id='preview'
      className='preview'
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer })
      }}
    />
  );
}
