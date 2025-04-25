
"use client";
import { useEffect, useState } from "react";

export default function LocationFinderClient() {
  const [locationInfo, setLocationInfo] = useState({});

  const getLocationInfo = async () => {
    try {
      const response = await fetch("https://ipapi.co/json");
      const locationData = await response.json();
      console.log(locationData);
      setLocationInfo(locationData);
    } catch (err) {
      console.error("Failed to fetch location:", err);
    }
  };

  useEffect(() => {
    getLocationInfo();
  }, []);

  return (
    <>
      <h1>Hello from {locationInfo?.city} client component</h1>
    </>
  );
}






































