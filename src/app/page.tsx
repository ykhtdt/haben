import { HeroSection } from "@/components/widget/section/hero/hero-section"

export default function Home() {
  return (
    <HeroSection
      contents={[
        {
          key: "tab1",
          children: "tab1",
          imageUrl: "animals1.jpg",
        }, {
          key: "tab2",
          children: "tab2",
          imageUrl: "animals2.jpg",
        }, {
          key: "tab3",
          children: "tab3",
          imageUrl: "animals3.jpg",
        }, {
          key: "tab4",
          children: "tab4",
          imageUrl: "animals4.jpg",
        },
      ]}
    />
  )
}
