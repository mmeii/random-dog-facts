import axios from "axios";

const apiUrl = "https://kinduff.github.io/dog-api/";

export const getData = async () => {
  try {
    const response = await axios.get(`${apiUrl}/some-number`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postData = async (data: any) => {
  try {
    const response = await axios.post(`${apiUrl}/some-number`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
