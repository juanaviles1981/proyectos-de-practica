
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b99529ab47msha1b3a21c97503bep112e8cjsnf916d965a599',
   	'X-RapidAPI-Host': 'location-and-time.p.rapidapi.com'
	}
};

const fetchIpInfo = ip => {
  return fetch(`https://location-and-time.p.rapidapi.com/geoip?ip=${ip}`, options)
    .then((res) => res.json())

    .catch(err => console.error(err))
};

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const results = document.querySelector("#results");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const { value } = input;

  submit.setAttribute("disabled", "");

  const ipInfo = await fetchIpInfo(value);
  console.log(ipInfo);

  submit.removeAttribute("disabled");

  if (ipInfo) {
    results.innerHTML = JSON.stringify(ipInfo, null, 2); //Objeto, replacer, espacios
  }
});


