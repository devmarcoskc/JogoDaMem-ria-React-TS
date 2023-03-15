import { GridItemType } from '../../types/gridTypes';
import * as C from './styles';
import b7Svg from '../../svgs/b7.svg';
import { Items } from '../../data/items';
type Props = {
    item: GridItemType;
    onClick: () => void;
}
export const GridItem = ({item, onClick}:Props) => {
    return (
        <C.GridContainer 
        showBackGround={item.permaShown || item.shown}
        onClick={onClick}
        >
            {!item.permaShown && !item.shown && 
                <C.Icon src={b7Svg} opacity={.1} alt=""/>
            }
            {(item.permaShown || item.shown) && item.item !== null &&
                <C.Icon src={Items[item.item].icon} alt=""/>
            }
        </C.GridContainer>
    )
}