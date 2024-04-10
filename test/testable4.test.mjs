import { afterEach, beforeEach, describe, test } from "vitest";
import { PasswordService, PostgresUserDao } from "../src/testable4.mjs";

describe("Testable 4: enterprise application", () => {
  let service;
  beforeEach(() => {
    service = new PasswordService();
  });

  afterEach(() => {
    PostgresUserDao.getInstance().close();
  });

  test("todo", async () => {
    // TODO: write proper tests for both PasswordService and PostgresUserDao
  });
});
