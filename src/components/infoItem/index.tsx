import { type } from 'os';
import * as C from './styles';

type Props = {
    label: string;
    value: string;
}
export const InfoItem = ({label, value}: Props) => {
    return (
        <div>
            <C.InfoSetting>
                <C.Label>{label}</C.Label>
                <C.Value>{value}</C.Value>
            </C.InfoSetting>
        </div>
    )
}