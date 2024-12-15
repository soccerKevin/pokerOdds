import * as mockHands from './mocks';

import {
  isPair,
  isTwoPair,
  isThreeOfAKind,
  isStraight,
  isFlush,
  isFullHouse,
  isFourOfAKind,
  isStraightFlush,
  isRoyalFlush,
} from '../isHand';

describe('hands', () => {
  describe('pair', () => {
    it('should identify a pair', () => {
      expect(isPair(mockHands.pair)).toBe(true);
    });

    it('should not be a two pair', () => {
      expect(isPair(mockHands.twoPair)).toBe(false);
    });

    it('should not be a three of a kind', () => {
      expect(isPair(mockHands.threeOfAKind)).toBe(false);
    });
  });

  it('should identify two pair', () => {
    expect(isTwoPair(mockHands.pair)).toBe(false);
    expect(isTwoPair(mockHands.twoPair)).toBe(true);
    expect(isTwoPair(mockHands.threeOfAKind)).toBe(false);
  });

  it('should identify three of a kind', () => {
    expect(isThreeOfAKind(mockHands.pair)).toBe(false);
    expect(isThreeOfAKind(mockHands.twoPair)).toBe(false);
    expect(isThreeOfAKind(mockHands.threeOfAKind)).toBe(true);
  });

  it('should identify a straight', () => {
    expect(isStraight(mockHands.straight)).toBe(true);
    expect(isStraight(mockHands.flush)).toBe(false);
    expect(isStraight(mockHands.straightFlush)).toBe(false);
  });

  describe('flush', () => {
    it('should identify a flush', () => {
      expect(isFlush(mockHands.flush)).toBe(true);
    });

    it('should not be a full house', () => {
      expect(isFlush(mockHands.fullHouse)).toBe(false);
    });

    it('should not be a straight flush', () => {
      expect(isFlush(mockHands.straightFlush)).toBe(false);
    });
  });

  it('should identify a full house', () => {
    expect(isFullHouse(mockHands.fullHouse)).toBe(true);
    expect(isFullHouse(mockHands.fourOfAKind)).toBe(false);
  });

  it('should identify four of a kind', () => {
    expect(isFourOfAKind(mockHands.fullHouse)).toBe(false);
    expect(isFourOfAKind(mockHands.fourOfAKind)).toBe(true);
  });

  describe('should identify a straight flush', () => {
    it('should identify a straight flush', () => {
      expect(isStraightFlush(mockHands.straightFlush)).toBe(true);
    });

    it('should not be a flush', () => {
      expect(isStraightFlush(mockHands.flush)).toBe(false);
    });

    it('should not be a straight', () => {
      expect(isStraightFlush(mockHands.straight)).toBe(false);
    });
  });
});
