import { getCard, getRank, getSuit, cardFromHuman, cardToHuman } from '..';

describe('utils', () => {
  describe('getCard', () => {
    it('6h should be 6', () => {
      expect(getCard({ rank: 6, suit: 'h' })).toBe(6);
    });

    it('As should be 51', () => {
      expect(getCard({ rank: 12, suit: 's' })).toBe(51);
    });

    it('4d should be 17', () => {
      expect(getCard({ rank: 4, suit: 'd' })).toBe(17);
    });

    it('Qc should be 38', () => {
      expect(getCard({ rank: 12, suit: 'c' })).toBe(38);
    });
  });

  describe('getRank', () => {
    it('2 should be 2', () => {
      expect(getRank(2)).toBe(2);
    });

    it('51 should be 12', () => {
      expect(getRank(51)).toBe(12);
    });

    it('50 should be 11', () => {
      expect(getRank(50)).toBe(11);
    });

    it('15 should be 2', () => {
      expect(getRank(15)).toBe(2);
    });
  });

  describe('getSuit', () => {
    it('2 should be h', () => {
      expect(getSuit(2)).toBe('h');
    });

    it('51 should be s', () => {
      expect(getSuit(51)).toBe('s');
    });

    it('40 should be d', () => {
      expect(getSuit(38)).toBe('c');
    });

    it('15 should be c', () => {
      expect(getSuit(15)).toBe('d');
    });
  });

  describe('cardFromHuman', () => {
    it('should return 6h', () => {
      expect(cardFromHuman({ rank: 6, suit: 'h' })).toEqual(4);
    });

    it('should return 6d', () => {
      expect(cardFromHuman({ rank: 6, suit: 'd' })).toEqual(17);
    });

    it('should return 6c', () => {
      expect(cardFromHuman({ rank: 6, suit: 'c' })).toEqual(30);
    });

    it('should return 6s', () => {
      expect(cardFromHuman({ rank: 6, suit: 's' })).toEqual(43);
    });
  });

  describe('cardToHuman', () => {
    it('should return 6h', () => {
      expect(cardToHuman(4)).toEqual({ rank: 6, suit: 'h' });
    });

    it('should return 6d', () => {
      expect(cardToHuman(17)).toEqual({ rank: 6, suit: 'd' });
    });

    it('should return 6c', () => {
      expect(cardToHuman(30)).toEqual({ rank: 6, suit: 'c' });
    });

    it('should return 6s', () => {
      expect(cardToHuman(43)).toEqual({ rank: 6, suit: 's' });
    });
  });
});
