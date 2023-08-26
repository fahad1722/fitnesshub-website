

export const exerciseOptions = {
  method: "GET",
  headers: {
    'X-RapidAPI-Key': 'ca1f71afcamshcf51d52403a07e9p11b5a9jsn2ec32201dcb5',
    // 'X-RapidAPI-Key': '1e31598951msh7ce4604cb157f1bp1ee572jsnc19b84fd38ea',
    // "X-RapidAPI-Key":"39f8029cf3msh54b50f212b42ee4p1b6732jsnddf981dd5d3f",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    // 'X-RapidAPI-Key': 'ca1f71afcamshcf51d52403a07e9p11b5a9jsn2ec32201dcb5',
    // 'X-RapidAPI-Key': '1e31598951msh7ce4604cb157f1bp1ee572jsnc19b84fd38ea',
     "X-RapidAPI-Key":"39f8029cf3msh54b50f212b42ee4p1b6732jsnddf981dd5d3f",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
