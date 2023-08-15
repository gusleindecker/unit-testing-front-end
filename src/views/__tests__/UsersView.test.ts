import { setTimeout as setTimeoutNode } from "timers/promises";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useRoute } from "vue-router";
import UsersView from "@/views/UsersView.vue";
import {
  loadingUsersText,
  mockUsers,
  mockUsersRoute,
  usersEndpoint,
} from "@/mocks";
import { mockEndpoint } from "@/utils";
import { flushPromises, mount } from "@vue/test-utils";

vi.mock("vue-router");

describe("src/views/UsersView.vue", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("Should display the 'loading users' state and the users list correctly.", async () => {
    // Arrange
    mockEndpoint(usersEndpoint, { body: mockUsers });
    vi.mocked(useRoute).mockReturnValueOnce(mockUsersRoute);

    // Act
    const wrapper = mount(UsersView);

    // Assert
    const loaderText = wrapper.find("[data-testid='loader']").text();
    expect(loaderText).toBe(loadingUsersText);

    await flushPromises();
    vi.runOnlyPendingTimers();
    await setTimeoutNode(0);

    const userItems = wrapper.findAll("[data-testid='userItem']");
    expect(userItems.length).toBe(mockUsers.length);

    wrapper.unmount();
  });

  it("Should display the 'loading users' state and the error message correctly.", async () => {
    // Arrange
    mockEndpoint(usersEndpoint, { body: [], status: 401 });
    vi.mocked(useRoute).mockReturnValueOnce(mockUsersRoute);

    // Act
    const wrapper = mount(UsersView);

    // Assert
    const loaderText = wrapper.find("[data-testid='loader']").text();
    expect(loaderText).toBe(loadingUsersText);

    await flushPromises();
    vi.runOnlyPendingTimers();
    await setTimeoutNode(0);

    const userItems = wrapper.findAll("[data-testid='userItem']");
    const errorMessage = wrapper.find("[data-testid='errorMessage']").text();
    expect(userItems.length).toBe(0);
    expect(errorMessage).toBe("Error: Failed to fetch data.");

    wrapper.unmount();
  });
});
