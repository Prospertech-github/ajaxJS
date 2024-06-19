let countriesCtn = document.querySelector(".countries");

// Getting user's response
let country = prompt("Which country(ies) are you looking for?");

// Using the Fetch method or API
function fetchCountry(country) {
  //fetch country from user input
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then(data => {
        console.log(data)
        data.map(country =>{
            countriesCtn.insertAdjacentHTML('beforeend',`
                <article class="country">
                        <img class="country__img" src="${country.flags.png}" />
                        <div class="country__data">
                            <h3 class="country__name">${country.name.common}</h3>
                            <h4 class="country__region">${country.region}</h4>
                            <p class="country__row"><span>👫</span>${country.population} people</p>
                            <p class="country__row"><span>🏢</span>${country.capital}</p>
                            <p class="country__row"><span>🌆</span>${country.borders[0]}</p>
                        </div>
                </article>
                `)
        })
        // countriesCtn.insertAdjacentHTML('beforeend',`
        // <article class="country">
        //         <img class="country__img" src="${data[0].flags.png}" />
        //         <div class="country__data">
        //             <h3 class="country__name">${data[0].name.common}</h3>
        //             <h4 class="country__region">${data[0].region}</h4>
        //             <p class="country__row"><span>👫</span>${data[0].population} people</p>
        //             <p class="country__row"><span>🏢</span>${data[0].capital}</p>
        //             <p class="country__row"><span>🌆</span>${data[0].borders[0]}</p>
        //         </div>
        // </article>
        // `)
    })
}
// fetchCountry(country);

async function asyncGetCountry(country){
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    const data = await res.json()
    data.map(country =>{
        countriesCtn.insertAdjacentHTML('beforeend',`
            <article class="country">
                    <img class="country__img" src="${country.flags.png}" />
                    <div class="country__data">
                        <h3 class="country__name">${country.name.common}</h3>
                        <h4 class="country__region">${country.region}</h4>
                        <p class="country__row"><span>👫</span>${country.population} people</p>
                        <p class="country__row"><span>🏢</span>${country.capital}</p>
                        <p class="country__row"><span>🌆</span>${country.borders[0]}</p>
                    </div>
            </article>
            `)
    })
}

asyncGetCountry(country)



// const getCountryData = function (country) {
//       fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//         .then(function (response) {
//           console.log(response);
//           return response.json();
//         })
//         .then(function (data) {
//           console.log(data);
//           renderCountry(data[0]);
//         });
//     };

//     const renderCountry = function (data, className = '') {
//         const html = `
//         <article class="country ${className}">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>
//         `;
//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//       };
