import { HeroSection } from "@/components/widget/section/hero/hero-section"
import { ListTimeline } from "@/components/widget/timeline"

export default function Home() {
  const repeat = Array.from({ length: 10 }, (_, i) => i)

  const item = {
    date: "2024",
    children: [
      "Lorem ipsum",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ] as [string, string, string]
  }

  const items = repeat.map(() => item)

  return (
    <>
      <HeroSection
        contents={[
          {
            key: "Tab1",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas.",
            href: "/",
            imageUrl: "animals1.jpg",
          }, {
            key: "Tab2",
            title: "Sagittis eu volutpat odio facilisis mauris.",
            href: "/",
            imageUrl: "animals2.jpg",
          }, {
            key: "Tab3",
            title: "Sed egestas egestas fringilla phasellus faucibus scelerisque.",
            href: "/",
            imageUrl: "animals3.jpg",
          }, {
            key: "Tab4",
            title: "Auctor elit sed vulputate mi sit amet mauris.",
            href: "/",
            imageUrl: "animals4.jpg",
          },
        ]}
      />
      <section id="">
        <ListTimeline items={items} />
      </section>
      <div style={{ height: "1000px" }}  />
    </>
  )
}
