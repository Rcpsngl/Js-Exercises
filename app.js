import axios from "axios";

const getUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    const { data: user } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );
    resolve(user);
  });
};

const getPost = (userId) => {
  return new Promise(async (resolve, reject) => {
    const { data: post } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + userId
    );
    resolve(post);
  });
};

async function getData(number) {
    await getUser(number)
        .then(data => console.log(data))
        .catch(e => console.log(e))

    await getPost(number)
        .then(data => console.log("post: ", data))
        .catch(e => console.log(e))

}

export default getData;