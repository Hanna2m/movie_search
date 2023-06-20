"use client"
import { useState } from "react"
import SearchTitle from "./SearchTitle"

const SearchBar = () => {
  const [title, setTitle] = useState('')

  const handleSearch = () => {}
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchTitle 
          title={title}
          setTitle={setTitle}
        />
      </div>
    </form>
  )
}

export default SearchBar

