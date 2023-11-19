const baseUrl = "http://localhost:3001"

export const getFood = async (category = "pizza") => {
  try {
    const response = await fetch(`${baseUrl}/${category}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};