import { Toast } from "../lib/index";

jest.mock("../lib/index");

describe("Toast", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const toast = new Toast("https://jsonplaceholder.typicode.com");

  test("Toast instance created", async () => {
    expect(toast).toBeInstanceOf(Toast);
  });

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

    const spy = jest.spyOn(toast, "get");

    (toast.get as jest.Mock).mockResolvedValueOnce(mockedResolvedValue);
    expect(await toast.get("/posts/1")).toEqual(mockedResolvedValue);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("/posts/1");
  });

  test("Creates a new post", async () => {
    const mockedPostData = {
      userId: 1,
      title: "Jest is cool",
      body: "Too cool for school",
    };

    const mockedResolvedValue = {
      userId: 1,
      id: 101,
      title: "Jest is cool",
      body: "Too cool for school",
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const spy = jest.spyOn(toast, "create");

    (toast.create as jest.Mock).mockResolvedValueOnce(mockedResolvedValue);
    expect(await toast.create("/posts", mockedPostData)).toEqual(
      mockedResolvedValue
    );
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("/posts", mockedPostData);
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

    const spy = jest.spyOn(toast, "update");

    (toast.update as jest.Mock).mockResolvedValueOnce(mockedResponseData);
    expect(await toast.update("/posts/101", mockedDataToUpdate)).toEqual(
      mockedResponseData
    );
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("/posts/101", mockedDataToUpdate);
  });

  test("Deletes a post", async () => {
    const spy = jest.spyOn(toast, "delete");

    (toast.delete as jest.Mock).mockResolvedValueOnce(undefined);
    expect(await toast.delete("/posts/101")).toEqual(undefined);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("/posts/101");
  });
});
