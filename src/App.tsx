import { Component } from 'react';
import { Header, Toolbar, Editor, Preview } from './components';
import {
  faCode,
  faMarkdown,
  faCompressAlt,
  faExpandArrowsAlt,
  IconDefinition,
  placeholder
} from './utils';
import './App.scss';

interface AppStates {
  markdown: string;
  editorMaximized: boolean;
  previewMaximized: boolean;
}

class App extends Component<{}, AppStates> {
  constructor(props: {}) {
    super(props);
    this.state = {
      markdown: placeholder,
      editorMaximized: false,
      previewMaximized: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMaximized = this.handleEditorMaximized.bind(this);
    this.handlePreviewMaximized = this.handlePreviewMaximized.bind(this);
  }

  handleChange(event: { target: { value: string } }) {
    this.setState({
      markdown: event.target.value
    });
  }

  handleEditorMaximized() {
    this.setState((state) => ({
      editorMaximized: !state.editorMaximized
    }));
  }

  handlePreviewMaximized() {
    this.setState((state) => ({
      previewMaximized: !state.previewMaximized
    }));
  }

  render() {
    const styles: [string, string, IconDefinition] = this.state.editorMaximized
      ? ['editor-wrapper maximized', 'preview-wrapper hide', faCompressAlt]
      : this.state.previewMaximized
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
              onClick={this.handleEditorMaximized}
            />
            <Editor value={this.state.markdown} onChange={this.handleChange} />
          </div>
          <div className={styles[1]}>
            <Toolbar
              mainIcon={faMarkdown}
              toggleIcon={styles[2]}
              text='Preview'
              onClick={this.handlePreviewMaximized}
            />
            <Preview markdown={this.state.markdown} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
