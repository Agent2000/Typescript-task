const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

interface IResult {
  ID: number;
  Email: string;
}

interface IRecord {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const getData = (url: string): Promise<IResult> => {
  return new Promise(async (resolve) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      resolve(data.map((item: IRecord) => ({ ID: item.id, Email: item.email })));
    } catch (error) {
      console.error("Ошибка получения данных:", error);
      throw error;
    }
  });
};

getData(COMMENTS_URL).then((data) => {
  console.log(data);
});
