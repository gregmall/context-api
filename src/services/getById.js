export const getById= async(id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const json = await res.json();

  if(!res.ok) throw 'Not able to fetch at this time.  Try again later'
  return {
    id: json.id,
    name: json.name,
    image: json.image,
    species: json.species,
    status: json.status

  };
 
  
};
