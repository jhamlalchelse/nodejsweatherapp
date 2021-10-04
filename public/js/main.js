const submitBtn = document.getElementById('submitBtn');
const cityName= document.getElementById('cityName');
const city_name =document.getElementById('city_name')
const temp_status =document.getElementById('temp_status')
const temp=document.getElementById('temp')
const today_date = document.getElementById('today_date');
const day = document.getElementById('day');
const datahide = document.querySelector('.middle_layer');
 
const getInfo = async(event) => {
    event.preventDefault()
    let cityVal = cityName.value;
    if(cityVal === ''){
        city_name.innerText=`Please write the name before search`;
        datahide.classList.add('data_hide');
    }else {
    try {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=1e3c4f277867b0a2b41bbd63093bf731`;
    const response = await fetch(url)
    const data = await response.json()
    const arrData = [data]
    temp.innerText = arrData[0].main.temp;
    // temp.style.visibility = visible;
    city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
    // temp_status.innerText = arrData[0].weather[0].main;
    const tempMood = arrData[0].weather[0].main;
    if(tempMood=="Sunny"){
    temp_status.innerHTML = "<i class='fas fa-sun' style='color:yellow;'></i>";
    } else if(tempMood=="Clouds"){
    temp_status.innerHTML = `<i class="fas fa-cloud" style='color:white;'></i>`;
    }else if(tempMood=="Rain"){
        temp_status.innerHTML = `<i class="fas fa-cloud-rain" style='color:rgb(162, 227, 247);'></i>`
    }else if(tempMood=="Thunderstorm"){
        temp_status.innerHTML = `<i class="fas fa-poo-storm"></i style='color:rgb(19, 241, 223);'>`
    }else if(tempMood=="Haze"){
        temp_status.innerHTML = '<i class="fas fa-smog" style="color:rgb(162, 227, 247);"></i>';
    } else{
        temp_status.innerHTML = `<i class="fas fa-cloud-sun" style='color:yellow;'></i>`
    }
    datahide.classList.remove('data_hide');
    console.log(arrData[0].main.temp+" "+arrData[0].weather[0].main); 
    } catch (error) {
        city_name.innerText=`Please enter the city name properly`;
        datahide.classList.add('data_hide');
    }
    } 

}

submitBtn.addEventListener('click',getInfo)



//day day and month
const getcurDay = () => {
    let curDay =new Date();
    var weekday =new Array(7);
    weekday[0]="Sun"
    weekday[1]="Mon"
    weekday[2]="Tue"
    weekday[3]="Wed"
    weekday[4]="Thus"
    weekday[5]="Fri"
    weekday[6]="Sat"
    return weekday[curDay.getDay()]
}
const getcurDate = () => {
    let curDate =new Date();
    return curDate.getDate()
}
const getcurMonth = () => {
    let curMonth =new Date();
    var month = new Array(12);
    month[7]="August";
    month[8]="September";
    month[9]="Octuber";
    month[10]="November";
    return month[curMonth.getMonth()]
}

day.innerText = `${getcurDay()}`;
today_date.innerText =`${getcurDate()} ${getcurMonth()}`;