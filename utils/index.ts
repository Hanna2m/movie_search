import axios from "axios";

const key = process.env.RAPID_API_KEY

export async function fetch250Movies() {
  const URL_BEST250 = 'https://moviesdatabase.p.rapidapi.com/titles/?list=top_rated_250'
  const options ={
    method: 'GET',
    url: URL_BEST250,
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  }
  try {
    const response = await axios.request(options);
    const data = response.data.results.map((item: any) => ({
      id: item.id, 
      title: item.titleText.text,
      imageUrl: item.primaryImage.url,
      year: item.releaseYear.year,
      position: item.position
        }))
    return data
  } catch (error) {
    console.error(error);
  }
}

export async function fetchStreamingInfo(imdb_id: string) {
  const URL_STREAM_AVIABILITY = 'https://streaming-availability.p.rapidapi.com/v2/get/basic'

  const options = {
    method: 'GET',
    url: URL_STREAM_AVIABILITY,
    params: {
      country: 'de',
      imdb_id: imdb_id,
      output_language: 'en'
    },
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };
  try {
    const response = await axios.request(options);
    return response
  } catch (error) {
    console.error(error);
  }
}
