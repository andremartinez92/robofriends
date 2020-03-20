import filterRobotsBySearch from '../filterRobotsBySearch';

const data = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
  },
];

describe('#filterRobotsBySearch', () => {
  describe('when .robots is empty array', () => {
    const emptyData = [];

    describe('when search string is empty', () => {
      const search = '';

      it('returns empty array', () => {
        expect(filterRobotsBySearch(emptyData, search)).toEqual([]);
      });
    });

    describe('when search string has text', () => {
      const search = 'le';

      it('returns empty array', () => {
        expect(filterRobotsBySearch(emptyData, search)).toEqual([]);
      });
    });
  });

  describe('when search does not match any robot', () => {
    const search = 'avalanche';

    it('returns empty array', () => {
      expect(filterRobotsBySearch(data, search)).toEqual([]);
    });
  });

  describe('when search does matches one robot', () => {
    const search = 'Ervin';

    it('returns array with robot', () => {
      expect(filterRobotsBySearch(data, search)).toEqual([
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
        },
      ]);
    });
  });

  describe('when search matches multiple robots', () => {
    const search = 'le';

    it('returns array with robot', () => {
      const expectedResult = [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
        },
        {
          id: 3,
          name: 'Clementine Bauch',
          username: 'Samantha',
          email: 'Nathan@yesenia.net',
        },
        {
          id: 4,
          name: 'Patricia Lebsack',
          username: 'Karianne',
          email: 'Julianne.OConner@kory.org',
        },
      ];

      expect(filterRobotsBySearch(data, search)).toEqual(expectedResult);
    });
  });
});
