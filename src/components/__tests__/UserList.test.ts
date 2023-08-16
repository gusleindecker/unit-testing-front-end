import { describe, it, vi, type Mock, expect } from "vitest";
import UserList from "../UserList.vue";
import { render } from "@testing-library/vue";
import { mockUsers } from "@/mocks";
import { useRouter } from "vue-router";

vi.mock("vue-router");

describe("components/UserList.vue", () => {
  it("Should display the list of users.", () => {
    const mockedUseRouter = vi.mocked(useRouter) as Mock;
    mockedUseRouter.mockReturnValueOnce({ push: vi.fn() });
    const { getAllByTestId } = render(UserList, {
      props: { users: mockUsers },
    });

    expect(getAllByTestId("userListItem").length).toBe(mockUsers.length);
  });
});
