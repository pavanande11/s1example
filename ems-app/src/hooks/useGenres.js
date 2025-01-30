const useGenres = (selectedGeners) =>{
    if(selectedGeners.length < 1 ) return "";
    return selectedGeners.map((g) => g.name);
    // return GenresName.reduce((acc,curr) => acc+','+curr)

}

export default useGenres;