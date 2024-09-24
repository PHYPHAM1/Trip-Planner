const fetchTrailsByCity = async (city: string) => {
  const url = new URL(
    `https://prescriptiontrails.org/api/filter/?by=city&city=${city}&offset=0&count=6`
  );
  try {
    console.log("fetching trails by city");
    const response = await fetch(url, {
      mode: "no-cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response", response);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    console.log("data", data);
    return data.trails;
  } catch (error) {
    console.error("Error fetching trail data:", error);
  }
};

export { fetchTrailsByCity };
