import { describe, it, vi, type Mock, expect } from "vitest";
import { render } from "@testing-library/vue";
import UserListItem from "@/components/UserListItem.vue";
import { useRouter } from "vue-router";
import { mockUsers } from "@/mocks";
import userEvent from "@testing-library/user-event";

vi.mock("vue-router");
const mockedUseRouter = vi.mocked(useRouter) as Mock;
const pushSpy = vi.fn();

describe("components/UserListItem.vue", () => {
  it("Should display the content correctly and navigate to the user detail path when the User Details button is clicked.", async () => {
    const mockedUser = mockUsers[0];
    mockedUseRouter.mockReturnValueOnce({ push: pushSpy });
    const user = userEvent.setup();
    const { getByTestId, getByText } = render(UserListItem, {
      props: { user: mockedUser },
    });

    expect(getByTestId("userName").innerHTML).toBe(mockedUser.name);
    expect(getByTestId("userEmail").innerHTML).toBe(mockedUser.email);
    expect(getByTestId("userCity").innerHTML).toBe(mockedUser.address.city);

    await user.click(getByText("User Details"));

    expect(pushSpy).toHaveBeenCalledWith(`/user/${mockedUser.id}`);
  });
});
