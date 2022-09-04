const key = process.env.NEXT_PUBLIC_KEY;
const urlapi = process.env.NEXT_PUBLIC_URL;

const Data = async (city) => {
  const url = `${urlapi}${key}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();

  return data;
};

export default Data;
