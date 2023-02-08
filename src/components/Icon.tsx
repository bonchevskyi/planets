import IcoMoon from 'react-icomoon';
import { CSSProperties } from 'styled-components';
import iconSet from '../selection.json';

interface Props {
    name: string,
    size: number,
    color: string,
    customStyles?: CSSProperties,
}

function Icon({
    name, size, color, customStyles,
}: Props) {
    return (
        <IcoMoon
          disableFill
          iconSet={iconSet}
          icon={name}
          size={size}
          color={color}
          style={customStyles}
        />
    );
}

Icon.defaultProps = {
    customStyles: null,
};

export default Icon;
