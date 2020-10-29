export const  getRickAndMortyApi = async (page = 1) =>{
  const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const json = await res.json();
  
  if(!res.ok) throw 'Not able to fetch at this time.  Try again later';

  return json.results.map(character => ({
    id: character.id,
    name: character.name,
    image: character.image
    
  }));
  
};
