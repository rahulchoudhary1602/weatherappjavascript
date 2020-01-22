const citysearch = document.querySelector('form') ;
const card = document.querySelector('.card') ;
const detail = document.querySelector('.details');
const time = document.querySelector('img.time') ;
const icon =document.querySelector('.icon img');
const holder = document.querySelector('.imageholder') ;
const updateimage = ( data2 ) => {
 const image = data2.largeImageURL ;
 holder.setAttribute('src' , image) ;

}

const updateUI = (data1 ) =>
{
    const citydets = data1.citydets ;
    const weather  = data1.climate ;
    detail.innerHTML = `
    <h5 class="my-3">${citydets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
    `
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none') ;
    }
    let timesrc = null ;
    if(weather.IsDayTime){
        timesrc = 'day.jpg' ;
    }else{
        timesrc = 'night.jpg' ;
    }

    time.setAttribute('src' , timesrc) ;
};

const updatecity = async (city) => {
    const citydets = await getCity(city) ;
    const climate = await weather(citydets.Key) ;
    // here we return the object 
    return  {
        citydets: citydets ,
        climate: climate ,
    }
}

citysearch.addEventListener('submit' , e => {
// prevent default 
 e.preventDefault() ;
 const city = citysearch.city.value.trim() ;
 citysearch.reset() ;

 // update the
  updatecity(city).then( data1 => {
      
      updateUI(data1) ;
  }).catch(err => console.log('Error')) ;

  cityimage(city).then ( data2 => {
      console.log(data2) ;
      updateimage(data2) ;
  });
})