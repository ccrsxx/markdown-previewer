import { useState } from 'react';
import { Header, Toolbar, Editor, Preview } from './components';
import {
  faCode,
  faMarkdown,
  faCompressAlt,
  faExpandArrowsAlt,
  IconDefinition,
  placeholder
} from './utils';

export default function App() {
  const [markdown, setMarkdown] = useState(placeholder);
  const [editorMaximized, setEditorMaximized] = useState(false);
  const [previewMaximized, setPreviewMaximized] = useState(false);

  const handleChange = ({
    target: { value }
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(value);
  };

  const handleEditorMaximized = () => {
    setEditorMaximized((prevStatus) => !prevStatus);
  };

  const handlePreviewMaximized = () => {
    setPreviewMaximized((prevStatus) => !prevStatus);
  };

  const styles: [string, string, IconDefinition] = editorMaximized
    ? ['editor-wrapper maximized', 'preview-wrapper hide', faCompressAlt]
    : previewMaximized
    ? ['editor-wrapper hide', 'preview-wrapper maximized', faCompressAlt]
    : ['editor-wrapper normal', 'preview-wrapper normal', faExpandArrowsAlt];

  return (
    <div className='App'>
      <Header />
      <main className='main-container'>
        <div className={styles[0]}>
          <Toolbar
            mainIcon={faCode}
            toggleIcon={styles[2]}
            text='Editor'
            onClick={handleEditorMaximized}
          />
          <Editor value={markdown} onChange={handleChange} />
        </div>
        <div className={styles[1]}>
          <Toolbar
            mainIcon={faMarkdown}
            toggleIcon={styles[2]}
            text='Preview'
            onClick={handlePreviewMaximized}
          />
          <Preview markdown={markdown} />
        </div>
      </main>
    </div>
  );
}
