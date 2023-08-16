import { describe, it, expect } from "vitest";
import UserProfile from "@/components/UserProfile.vue";
import { render } from "@testing-library/vue";
import { mockUsers } from "@/mocks";

describe("components/UserProfile.vue", () => {
  it("Should display the User Profile correctly.", () => {
    const mockedUser = mockUsers[0];

    const { getByTestId } = render(UserProfile, {
      props: { user: mockedUser },
    });

    expect(getByTestId("userName").innerHTML).toBe(mockedUser.name);
    expect(getByTestId("userEmail").innerHTML).toBe(mockedUser.email);
    expect(getByTestId("userAddress").innerHTML).toBe(
      `${mockedUser.address.street}, ${mockedUser.address.suite} - ${mockedUser.address.city}`
    );
    expect(getByTestId("userWebsite").innerHTML).toBe(mockedUser.website);
  });
});
