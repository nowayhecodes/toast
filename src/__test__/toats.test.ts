import { Toast } from "../lib/index";

describe("Toast", () => {
  const toast = new Toast("https://jsonplaceholder.typicode.com");
  test("Resolves '/posts/1' with the right object", async () => {
    const mockedResolvedValue = {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body:
        "quia et suscipit\n" +
        "suscipit recusandae consequuntur expedita et cum\n" +
        "reprehenderit molestiae ut ut quas totam\n" +
        "nostrum rerum est autem sunt rem eveniet architecto",
    };

    return toast.get("/posts/1").then((response) => {
      expect(response).toStrictEqual(mockedResolvedValue);
      expect(response).toBeInstanceOf(Object);
    });
  });

  test("Creates a new post", async () => {
    const mockedPostData = {
      userId: 1,
      title: "Jest is cool",
      body: "Too cool for school",
    };

    return toast.create("/posts", mockedPostData).then((response) => {
      expect(response).toBeInstanceOf(Object);
    });
  });

  test("Updates previously created post", async () => {
    const mockedDataToUpdate = {
      title: "Jest is really cool",
    };

    const mockedResponseData = {
      method: "PATCH",
      body: '{"title":"Jest is really cool"}',
      headers: { "Content-type": "application/json; charset=UTF-8" },
    };

    return toast.update("/posts/101", mockedDataToUpdate).then((response) => {
      expect(response).toBeInstanceOf(Object);
      expect(response).toStrictEqual(mockedResponseData);
    });
  });

  test("Deletes a post", async () => {
    return toast.delete("/posts/101").then((response) => {
      expect(response).toBeInstanceOf(Object);
    });
  });
});
