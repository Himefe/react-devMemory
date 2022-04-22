import React from "react";
import { GridType } from "../types/GridItemsType";

import * as C from "./GridItem.styles";
import { itens } from "../data/items";
import b7Svg from "../assets/svgs/b7.svg";

interface Props {
  item: GridType;
  onClick: () => void;
}

const GridItem = ({ item, onClick }: Props) => {
  return (
    <C.Container
      onClick={onClick}
      backgroundColor={item.show || item.permanentShow}
    >
      {item.show === false && item.permanentShow === false ? (
        <C.Icon src={b7Svg} alt="Padrão B7WEB" opacity={0.1} />
      ) : null}
      {(item.permanentShow || item.show) && item.item !== null ? (
        <C.Icon src={itens[item.item].iconImg} opacity={1} />
      ) : null}
    </C.Container>
  );
};

export default GridItem;
