const { getFakeScore } = require('../utils/helpers');
const ScoreObj = require('../lib/ScoreObj');

test('fake score has userId provided by parameters', async () => {
    const score = await getFakeScore('1234');
    expect(score).toBeInstanceOf(ScoreObj);
    expect(score.userId).toBeDefined();
    expect(score.userId).toBe('1234');
});

test('fake score has valid game type', async () => {
    const score = await getFakeScore('1234');
    expect(score).toBeInstanceOf(ScoreObj);
    expect(score.type).toBeDefined();
    expect(['cont', 'daily']).toContain(score.type);
});

test('fake score has valid number of guesses', async () => {
    const score = await getFakeScore('1234');
    expect(score).toBeInstanceOf(ScoreObj);
    expect(score.guesses).toBeDefined();
    expect(typeof(score.guesses)).toBe('number');
});

test('fake score has valid word', async () => {
    const score = await getFakeScore('1234');
    expect(score).toBeInstanceOf(ScoreObj);
    expect(score.word).toBeDefined();
    expect(score.word.length).toEqual(5);
});

test('fake score has valid createdAt date', async () => {
    const score = await getFakeScore('1234');
    expect(score).toBeInstanceOf(ScoreObj);
    expect(score.createdAt).toBeDefined();
    expect(score.createdAt).toBeInstanceOf(Date);
});