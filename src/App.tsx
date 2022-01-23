import Prism from 'prismjs';
import { Component } from 'react';
import { marked } from 'marked';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faArrowsAlt,
  faCompressAlt
} from '@fortawesome/free-solid-svg-icons';
import './App.scss';

marked.setOptions({
  breaks: true,
  highlight(code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

interface AppProps {}

interface AppStates {
  input: string;
}

class App extends Component<AppProps, AppStates> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: { target: { value: string } }) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    const markdown = marked(this.state.input);

    return (
      <div className='App'>
        <div className='editor-wrapper'>
          <div className='toolbar'>
            <FontAwesomeIcon icon={faFreeCodeCamp} /> Editor
            <FontAwesomeIcon icon={faArrowsAlt} />
          </div>
          <textarea
            id='editor'
            className='editor'
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div className='preview-wrapper'>
          <div className='toolbar'>
            <FontAwesomeIcon icon={faCode} /> Preview
            <FontAwesomeIcon icon={faCompressAlt} />
          </div>
          <div id='preview' className='preview'>
            {markdown}
          </div>
        </div>
      </div>
    );
  }
}

const Toolbar = (props: any) => (
  <div className='toolbar'>
    <FontAwesomeIcon icon={props.icon} /> Editor
  </div>
);

export default App;
