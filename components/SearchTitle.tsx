"use client"
import { Combobox, Transition } from "@headlessui/react"
import { SearchTitleProps } from "@/types"
import { useState, Fragment, useEffect } from "react"
import axios from "axios"
import randomstring from "randomstring"

const key = process.env.RAPID_API_KEY

const SearchTitle = ({title, setTitle}: SearchTitleProps) => {
  const[query, setQuery] = useState('')
  const [filteredTitles, setFilteredTitles] = useState<string[]>([])

  useEffect(() => {
    const fetchFilteredTitles = async() => {
      const options = {
        method: 'GET',
        url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${query}`,
        headers: {
          'X-RapidAPI-Key': key,
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
      
      if (query !=="") {
        try {
        const response = await axios.request(options);
        console.log(response.data.results);
        const listOfTitles = response.data.results.map((item: any)=> item.titleText.text)
        console.log(listOfTitles)
        setFilteredTitles(listOfTitles) 
      } catch (error) {
        console.error(error);
      }
    }
      }

    fetchFilteredTitles()
  },[query])
  
  return (
    <div className="search-title">
      <Combobox value={title} onChange={setTitle}>
        <div className="relative w-full">
          <Combobox.Input 
            className="search-title__input"
            placeholder="Enter movie title"
            displayValue={(title: string) => title}
            onChange={(e) => {
              setQuery(e.target.value)
              console.log(query)
          }}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="search-title__options">
              {filteredTitles.map((item:string) => (
                <Combobox.Option 
                  key={randomstring.generate(5)}
                  className={({ active }) => `relative search-title__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                  value={item}
                >
                  {({ selected, active}) => (
                    <>
                      <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                          </span>
                        ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchTitle

