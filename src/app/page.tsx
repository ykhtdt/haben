import HeroSection from "@/components/widget/section/hero/hero-section"

export default function Home() {
  return (
    <HeroSection
      contents={[
        {
          key: "tab1",
          children: "tab1",
          image: "animals1.jpg",
        }, {
          key: "tab2",
          children: "tab2",
          image: "animals2.jpg",
        }, {
          key: "tab3",
          children: "tab3",
          image: "animals3.jpg",
        }, {
          key: "tab4",
          children: "tab4",
          image: "animals4.jpg",
        },
      ]}
    />
  )
}
