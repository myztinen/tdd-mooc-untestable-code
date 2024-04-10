import { afterAll, afterEach, beforeEach, beforeAll,  describe, test } from "vitest";
import { expect } from "chai";
import { PasswordService, PostgresUserDao, TestPasswordHasher } from "../src/testable4.mjs";
import pg from "pg";
import { readFileSync } from "fs";

describe("Testable 4: enterprise application", () => {
  const userId = 333;
  let passwordService;
  let db;
  let users;
  let hasher;

  beforeAll(async () => {
    db = await connectTestDb();
    await dropTables(db);
    await createTables(db);
    
  });

  beforeEach(() => {
    users = new PostgresUserDao(db);
    passwordService = new PasswordService(users);
    hasher = new TestPasswordHasher();
  });

  afterAll(async () => {
    await db.end();
  });

  afterEach(async () => {
    await truncateTables(db);
  })

  test("Can save user to db", async () => {
    const testUser = {
      userId,
      passwordHash: "password"
    };
      await users.save(testUser);
      expect(await users.getById(testUser.userId)).to.deep.equal(testUser);
    });

    test("Non existing user returns null", async () => {
        expect(await users.getById(123)).to.deep.equal(null);
      });

  test("Can change password", async () => {
    const testUser = {
      userId,
      passwordHash: hasher.hashPassword("password")
    };
      await users.save(testUser);
      await passwordService.changePassword(testUser.userId, "password", "newPassword");
      let newPasswordHash = (await users.getById(testUser.userId)).passwordHash;
      expect(newPasswordHash).not.to.equal(testUser.passwordHash);
      expect(hasher.verifyPassword(newPasswordHash, "newPassword")).to.be.true;
    });
});

async function connectTestDb() {
  return new pg.Pool({
    host:"localhost",
    port:"5432",
    user: "untestable",
    password: "secret",
    database: "untestable",
  });
}

async function createTables(db) {
  await db.query(readFileSync("./src/create-tables.sql", { encoding: "utf8", flag: "r" }));
}

async function dropTables(db) {
  await db.query(readFileSync("./src/drop-tables.sql", { encoding: "utf8", flag: "r" }));
}

async function truncateTables(db) { 
  await db.query("truncate users");
}
