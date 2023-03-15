import * as C from './styles';

type Props = {
    label: string;
    icon?: any;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const Bttn = ({label, icon, onClick}: Props) => {
    return (
        <C.BttnContainer onClick={onClick}>
            {icon &&
            <C.IconArea>
                <C.Icon src={icon}/>
            </C.IconArea>
            }
            <C.Label>{label}</C.Label>
        </C.BttnContainer>
    )
}