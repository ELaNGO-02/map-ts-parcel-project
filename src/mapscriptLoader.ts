export async function mapScriptLoader(): Promise<void>{
 return new Promise((resolve, reject)=>{
   console.log("Google Maps API Key:", process.env.API_KEY);

   const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      console.log("Google Maps script loaded successfully.");
      resolve();
    };

    script.onerror = (error) => {
      console.error("Failed to load Google Maps script:", error);
      reject(new Error("Failed to load Google Maps script."));
    };

    document.head.appendChild(script)
 })
  
};
