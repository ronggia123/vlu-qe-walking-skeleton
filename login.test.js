const login = require("./login");

test("Đăng nhập đúng username và password", () => {
    expect(login("admin", "123")).toBe(true);
});

test("Sai password", () => {
    expect(login("admin", "1234")).toBe(false);
});

test("Sai username", () => {
    expect(login("user", "123")).toBe(false);
});
