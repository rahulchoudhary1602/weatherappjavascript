const key = 'GPqixIxperiB6ZG6ChsDTareCVcpAApH' ;
const pixelbaykey ='13836279-423033bfbc28df245c5d6666a';
// find weather 
 const weather  = async (id) => {
     const base = 'http://dataservice.accuweather.com/currentconditions/v1/' ;
     const query = `${id}?apikey=${key}` ;
     const response = await fetch(base + query);
     
     const data = await response.json();
     
     return data[0] ;
 }

// find city 
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
  
    const response = await fetch(base + query);
    const data = await response.json();
  
    return data[0];
  
  };

const cityimage = async (city) => {
    const base = 'https://pixabay.com/api/'
    const query = `?key=${pixelbaykey}&q=${city}&image_type=photo ` ;
    const response = await fetch(base + query) ;
    const data = await response.json() ;
    return data ;
}  ;
 


  
 

