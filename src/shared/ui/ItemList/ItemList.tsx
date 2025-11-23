import * as React from "react";

type ListProps<T> = {
    items: T[],
    renderItem: (item: T) => React.ReactNode
}

function ItemList<T>(props: ListProps<T>) {
    const {items, renderItem} = props;
    return items.map(renderItem)
}

export default ItemList