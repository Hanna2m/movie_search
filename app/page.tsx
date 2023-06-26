import Image from "next/image"
import { Hero, SearchBar, CustomFilter, CardMovie } from "@/components"
import { fetch250Movies } from "@/utils"
import { MoviesProps } from "@/types"


export default async function Home() {
  const bestMovies = await fetch250Movies()
  console.log("best: ", bestMovies)
  const isDataEmpty = !Array.isArray(bestMovies) || bestMovies.length < 1 || !bestMovies
  console.log("isDataEmpty: ", isDataEmpty)
  
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

        {!isDataEmpty ? (
          <section>
            <div className="home__movies-wraper">
              {bestMovies?.map(movie => (
                <CardMovie movie={movie} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{bestMovies?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
