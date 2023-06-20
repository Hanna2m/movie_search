import Image from "next/image"
import { Hero, SearchBar, CustomFilter } from "@/components"


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl">
            Movie Catalogue
          </h1>
          <p>Explore movies you might like</p>
        </div>

        <div className="home_filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="genre" />
            <CustomFilter title="year" />
          </div>

        </div>
      </div>
    </main>
  )
}
