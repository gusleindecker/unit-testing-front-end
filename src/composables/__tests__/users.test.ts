import { describe, expect, it } from "vitest";
import { flushPromises } from "@vue/test-utils";
import { withSetup } from "@/test-utils";
import { useUsers } from "@/composables";
import { mockUsers } from "@/composables/mocks";
import { mockEndpoint } from "@/utils";

const usersEndpoint = "https://jsonplaceholder.typicode.com/users";

describe("useUsers", () => {
  it("Should load users.", async () => {
    mockEndpoint(usersEndpoint, { body: mockUsers });
    const [result, app] = withSetup(() => useUsers());
    const { users, isLoading, error } = result;

    await flushPromises();

    expect(users.value).toEqual(mockUsers);
    expect(isLoading.value).toBe(false);
    expect(error.value).toBeUndefined();

    app.unmount();
  });

  it("Should return the proper values if the request fails.", async () => {
    mockEndpoint(usersEndpoint, { body: mockUsers, status: 404 });
    const [result, app] = withSetup(() => useUsers());
    const { users, isLoading, error } = result;

    await flushPromises();

    expect(users.value).not.toBeDefined();
    expect(isLoading.value).toBe(false);
    expect(error.value.message).toBe("Failed to fetch data.");

    app.unmount();
  });
});
