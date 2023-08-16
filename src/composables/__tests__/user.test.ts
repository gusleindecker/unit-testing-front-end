import { describe, expect, it } from "vitest";
import { flushPromises } from "@vue/test-utils";
import { withSetup } from "@/test-utils";
import { useUser } from "@/composables";
import { mockUsers, usersEndpoint } from "@/mocks";
import { mockEndpoint } from "@/utils";

describe("composables/useUser", () => {
  it("Should load user with id 1.", async () => {
    const userId = 1;
    const mockedUser = mockUsers[userId - 1];
    mockEndpoint(`${usersEndpoint}/${userId}`, { body: mockedUser });
    const [result, app] = withSetup(() => useUser(userId));
    const { user, isLoading, error } = result;

    await flushPromises();

    expect(user.value).toEqual(mockedUser);
    expect(isLoading.value).toBe(false);
    expect(error.value).toBeUndefined();

    app.unmount();
  });

  it("Should return the proper values if the request fails.", async () => {
    const userId = 1;
    mockEndpoint(`${usersEndpoint}/${userId}`, {
      body: undefined,
      status: 404,
    });

    const [result, app] = withSetup(() => useUser(userId));
    const { user, isLoading, error } = result;

    await flushPromises();

    expect(user.value).not.toBeDefined();
    expect(isLoading.value).toBe(false);
    expect(error.value.message).toBe("Failed to fetch data.");

    app.unmount();
  });
});
