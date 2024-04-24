import { HeroSection } from "@/components/widget/section/hero/hero-section"

export default function Home() {
  return (
    <>
      <HeroSection
        contents={[
          {
            key: "tab1",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas.",
            href: "/",
            imageUrl: "animals1.jpg",
          }, {
            key: "tab2",
            title: "Sagittis eu volutpat odio facilisis mauris.",
            href: "/",
            imageUrl: "animals2.jpg",
          }, {
            key: "tab3",
            title: "Sed egestas egestas fringilla phasellus faucibus scelerisque.",
            href: "/",
            imageUrl: "animals3.jpg",
          }, {
            key: "tab4",
            title: "Auctor elit sed vulputate mi sit amet mauris.",
            href: "/",
            imageUrl: "animals4.jpg",
          },
        ]}
      />
      <div style={{ height: "1000px" }} />
    </>
  )
}
