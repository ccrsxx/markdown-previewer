import { FontAwesomeIcon, IconDefinition, CallbackFunction } from '../utils';

interface ToolbarProps {
  mainIcon: IconDefinition;
  toggleIcon: IconDefinition;
  text: string;
  onClick: CallbackFunction;
}

export function Toolbar({ mainIcon, toggleIcon, text, onClick }: ToolbarProps) {
  return (
    <div className='toolbar'>
      <FontAwesomeIcon icon={mainIcon} className='main-icon' /> {text}
      <FontAwesomeIcon
        icon={toggleIcon}
        className='toggle-icon'
        onClick={onClick}
      />
    </div>
  );
}
