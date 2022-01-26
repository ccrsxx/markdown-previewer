import { CallbackFunctionVariadic } from '../utils';

interface EditorProps {
  value: string;
  onChange: CallbackFunctionVariadic;
}

export const Editor = (props: EditorProps) => (
  <textarea
    id='editor'
    className='editor'
    value={props.value}
    onChange={props.onChange}
  ></textarea>
);
