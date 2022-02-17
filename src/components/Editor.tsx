import { CallbackFunctionVariadic } from '../utils';

interface EditorProps {
  value: string;
  onChange: CallbackFunctionVariadic;
}

export function Editor({ value, onChange }: EditorProps) {
  return (
    <textarea
      className='editor'
      value={value}
      onChange={onChange}
    />
  );
}
