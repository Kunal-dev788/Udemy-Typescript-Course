type FetchDataFunction = (
  url: string,
  ...queries: string[]
) => Promise<string[]>;

const fetchData: FetchDataFunction = async (url, ...queries) => {
  let baseUrl = url;
  if (queries.length > 0) {
    baseUrl += "?" + queries.join("&");
  }

  const respone = await fetch(baseUrl);
  const data = await respone.json();

  return data;
};

fetchData("https://api.example.com", "param1=value1", "param2=value2");

type User = {
  firstName: string;
  lastName: string;
  age: number;
};

let user: User = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const getUserInfo = async ({
  firstName,
  lastName,
  age,
}: User): Promise<string> => {
  return `User: ${firstName} ${lastName}, Age: ${age}`;
};

getUserInfo(user);
