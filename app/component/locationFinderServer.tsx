

export default async function LocationFinderClient() {

    
    const response = await fetch("https://ipapi.co/json");
    const locationData = await response.json();
    console.log(locationData);
  const locationInfo = locationData;



return (
  <>
    <h1>Hello from {locationInfo?.city } server component</h1>
  </>
);
}

