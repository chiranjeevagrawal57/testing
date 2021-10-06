window.addEventListener('load', () => {
  document.getElementById('root').innerHTML = 'chiranjeev';
});

document.getElementById('search').addEventListener('submit', async (e) => {
  e.preventDefault();
  const inputtext = document.getElementById('searchtext').value;
  const response = await fetch(
    `http://api.weatherstack.com/current?access_key=5fd8e46df228ac4d193b56f1f1924994&query=${inputtext}`,
  );
  const data = await response.json();
  const { location: { country, lat, lon } } = data;
  document.getElementById('country').innerHTML = country;
  document.getElementById('lat').innerHTML = lat;
  document.getElementById('lon').innerHTML = lon;
});
