import Banner from "./components/Banner";
import Information from "./components/Information";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Banner />
      <Information />
    </main>
  )
}
