const { getFakeUser } = require('../utils/helpers');
const UserObj = require('../lib/UserObj');

test('fake user has valid username', async () => {
    const user = await getFakeUser();
    expect(user).toBeInstanceOf(UserObj);
    expect(user.username).toBeDefined();
    expect(typeof(user.username)).toBe('string');
});

test('fake user has valid email', async () => {
    const user = await getFakeUser();
    expect(user).toBeInstanceOf(UserObj);
    expect(user.email).toBeDefined();
    expect(user.email).toMatch(/^\S+@\S+\.\S+$/);
});

test('fake user password is "password"', async () => {
    const user = await getFakeUser();
    expect(user).toBeInstanceOf(UserObj);
    expect(user.password).toBeDefined();
    expect(user.password).toBe('password');
});

test('fake user has valid country', async () => {
    const user = await getFakeUser();
    expect(user).toBeInstanceOf(UserObj);
    expect(user.country).toBeDefined();
    expect(user.country.length).toEqual(2);
});

test('fake user has valid createdAt date', async () => {
    const user = await getFakeUser();
    expect(user).toBeInstanceOf(UserObj);
    expect(user.createdAt).toBeDefined();
    expect(user.createdAt).toBeInstanceOf(Date);
});