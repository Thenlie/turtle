const { getFakeScore } = require('../utils/helpers');
const ScoreObj = require('../lib/ScoreObj');

test('fake score has userId provided by parameters', async () => {
    const score = await getFakeScore('1234');
    expect(score).toBeInstanceOf(ScoreObj);
    expect(score.userID).toBeDefined();
    expect(score.userID).toBe('1234');
})