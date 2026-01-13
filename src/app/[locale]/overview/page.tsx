"use client"

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const overviewAPI = async () => {
      try {
        const response = await fetch("/api/overview", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json() 
        console.log("amina: "+JSON.stringify(data, null, 2))
      
      } catch (error) {
        console.error("Error fetching tasks:", error);
        // setError(error.message)
      }
    }

    overviewAPI()
  }, []);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-senter">
        Overview Behind Login
      </main>
    </div>
  );
}
