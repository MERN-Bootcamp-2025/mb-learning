export const handleGetApi = async(name)=>{
    const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
    const data = await res.json();
    // console.log(data)
    // console.log(data.results);
    return data.results;
}