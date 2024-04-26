import type { ListTimeLineItemType } from "."

import { ListTimeLineItem } from "./list-timeline-item"

type Props = {
  items: ListTimeLineItemType[]
}

const ListTimeline = ({
  items,
}: Props) => {

  return (
    <div>
      <ul>
        {items.map((item, i) => (
          <ListTimeLineItem key={i} index={i} item={item} />
        ))}
      </ul>
    </div>
  )
}

export { ListTimeline }
