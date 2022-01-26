import { FontAwesomeIcon, IconDefinition, CallbackFunction } from '../utils';

interface ToolbarProps {
  mainIcon: IconDefinition;
  toggleIcon: IconDefinition;
  text: string;
  onClick: CallbackFunction;
}

export const Toolbar = (props: ToolbarProps) => (
  <div className='toolbar'>
    <FontAwesomeIcon icon={props.mainIcon} className='main-icon' /> {props.text}
    <FontAwesomeIcon
      icon={props.toggleIcon}
      className='toggle-icon'
      onClick={props.onClick}
    />
  </div>
);
