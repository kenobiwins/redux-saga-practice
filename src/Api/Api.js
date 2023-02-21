import axios from 'axios';
export class Api {
  fetchDog = async () => {
    try {
      const { data } = await axios.get(
        'https://dog.ceo/api/breeds/image/random'
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}
