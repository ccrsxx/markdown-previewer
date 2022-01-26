import { Component } from 'react';
import { Header, Toolbar, Editor, Preview } from './components';
import {
  faCode,
  faMarkdown,
  faCompressAlt,
  faExpandArrowsAlt,
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
    const styles = this.state.editorMaximized
      ? {
          editor: 'editor-wrapper maximized',
          preview: 'preview-wrapper hide',
          toggleIcon: faCompressAlt
        }
      : this.state.previewMaximized
      ? {
          editor: 'editor-wrapper hide',
          preview: 'preview-wrapper maximized',
          toggleIcon: faCompressAlt
        }
      : {
          editor: 'editor-wrapper normal',
          preview: 'preview-wrapper normal',
          toggleIcon: faExpandArrowsAlt
        };

    return (
      <div className='App'>
        <Header />
        <main className='main-container'>
          <div className={styles.editor}>
            <Toolbar
              mainIcon={faCode}
              toggleIcon={styles.toggleIcon}
              text='Editor'
              onClick={this.handleEditorMaximized}
            />
            <Editor value={this.state.markdown} onChange={this.handleChange} />
          </div>
          <div className={styles.preview}>
            <Toolbar
              mainIcon={faMarkdown}
              toggleIcon={styles.toggleIcon}
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
