import { afterAll, afterEach, beforeAll } from "vitest";

import { mockServer } from "@/utils";

// Start mockServer before all tests
beforeAll(() => mockServer.listen({ onUnhandledRequest: "error" }));
// Close mockServer after all tests
afterAll(() => mockServer.close());
// Reset handlers after each test (important for test isolation)
afterEach(() => mockServer.resetHandlers());
