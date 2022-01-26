import { marked, renderer, prism } from '../utils';

interface PreviewProps {
  markdown: string;
}

marked.setOptions({
  breaks: true,
  highlight(code) {
    return prism.highlight(code, prism.languages.javascript, 'javascript');
  }
});

export const Preview = (props: PreviewProps) => (
  <div
    id='preview'
    className='preview'
    dangerouslySetInnerHTML={{
      __html: marked(props.markdown, { renderer: renderer })
    }}
  ></div>
);
