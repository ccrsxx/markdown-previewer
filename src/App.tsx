import Prism from 'prismjs';
import { Component } from 'react';
import { marked } from 'marked';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faCompressAlt,
  faExpandArrowsAlt
} from '@fortawesome/free-solid-svg-icons';
import './App.scss';

marked.setOptions({
  breaks: true,
  highlight(code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

const renderer = new marked.Renderer();
renderer.link = (href, title, text) =>
  `<a target="_blank" href="${href}">${text}</a>`;

interface AppProps {}

interface AppStates {
  markdown: string;
  editorMaximized: boolean;
  previewMaximized: boolean;
}

class App extends Component<AppProps, AppStates> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      markdown: '',
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
          editor: 'editor-wrapper',
          preview: 'preview-wrapper',
          toggleIcon: faExpandArrowsAlt
        };

    console.log(styles);

    return (
      <div className='App'>
        <div className={styles.editor}>
          <Toolbar
            mainIcon={faCode}
            toggleIcon={styles.toggleIcon}
            text='Editor'
            onClick={this.handleEditorMaximized}
          />
          <textarea
            id='editor'
            className='editor'
            onChange={this.handleChange}
          ></textarea>
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
      </div>
    );
  }
}

const Toolbar = (props: any) => (
  <div className='toolbar'>
    <FontAwesomeIcon icon={props.mainIcon} className='main-icon' /> {props.text}
    <FontAwesomeIcon
      icon={props.toggleIcon}
      className='toggle-icon'
      onClick={props.onClick}
    />
  </div>
);

const Preview = (props: any) => (
  <div
    id='preview'
    className='preview'
    dangerouslySetInnerHTML={{
      __html: marked(props.markdown, { renderer: renderer })
    }}
  ></div>
);

export default App;
