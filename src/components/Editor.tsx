import { CallbackFunctionVariadic } from '../utils';

interface EditorProps {
  value: string;
  onChange: CallbackFunctionVariadic;
}

export function Editor({ value, onChange }: EditorProps) {
  return (
    <textarea
      id='editor'
      className='editor'
      value={value}
      onChange={onChange}
    />
  );
}
