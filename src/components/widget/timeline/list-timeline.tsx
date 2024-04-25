import { ListTimeLineItem } from "./list-timeline-item"

const ListTimeline = () => {

  const repeat = Array.from({ length: 10 }, (_, i) => i)

  return (
    <div>
      <ul>
        {repeat.map((index, i) => (
          <ListTimeLineItem key={i} index={index} />
        ))}
      </ul>
    </div>
  )
}

export { ListTimeline }
