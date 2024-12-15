import * as mockHands from './mocks';

import { is } from '..';
import { describe } from 'node:test';

describe('hands', () => {
  describe('isConsecutive', () => {
    it('should return true for consecutive cards', () => {
      expect(is.consecutive(mockHands.straight)).toBe(true);
    });

    it('should return false for non-consecutive cards', () => {
      expect(is.consecutive(mockHands.pair)).toBe(false);
    });
  });

  describe('pair', () => {
    it('should identify a pair', () => {
      expect(is.pair(mockHands.pair)).toBe(true);
    });

    it('should not be a two pair', () => {
      expect(is.pair(mockHands.twoPair)).toBe(false);
    });

    it('should not be a three of a kind', () => {
      expect(is.pair(mockHands.threeOfAKind)).toBe(false);
    });
  });

  it('should identify two pair', () => {
    expect(is.twoPair(mockHands.pair)).toBe(false);
    expect(is.twoPair(mockHands.twoPair)).toBe(true);
    expect(is.twoPair(mockHands.threeOfAKind)).toBe(false);
  });

  it('should identify three of a kind', () => {
    expect(is.threeOfAKind(mockHands.pair)).toBe(false);
    expect(is.threeOfAKind(mockHands.twoPair)).toBe(false);
    expect(is.threeOfAKind(mockHands.threeOfAKind)).toBe(true);
  });

  it('should identify a straight', () => {
    expect(is.straight(mockHands.straight)).toBe(true);
    expect(is.straight(mockHands.flush)).toBe(false);
    expect(is.straight(mockHands.straightFlush)).toBe(false);
  });

  describe('flush', () => {
    it('should identify a flush', () => {
      expect(is.flush(mockHands.flush)).toBe(true);
    });

    it('should not be a full house', () => {
      expect(is.flush(mockHands.fullHouse)).toBe(false);
    });

    it('should not be a straight flush', () => {
      expect(is.flush(mockHands.straightFlush)).toBe(false);
    });
  });

  it('should identify a full house', () => {
    expect(is.fullHouse(mockHands.fullHouse)).toBe(true);
    expect(is.fullHouse(mockHands.fourOfAKind)).toBe(false);
  });

  it('should identify four of a kind', () => {
    expect(is.fourOfAKind(mockHands.fullHouse)).toBe(false);
    expect(is.fourOfAKind(mockHands.fourOfAKind)).toBe(true);
  });

  describe('should identify a straight flush', () => {
    it('should identify a straight flush', () => {
      expect(is.straightFlush(mockHands.straightFlush)).toBe(true);
    });

    it('should not be a flush', () => {
      expect(is.straightFlush(mockHands.flush)).toBe(false);
    });

    it('should not be a straight', () => {
      expect(is.straightFlush(mockHands.straight)).toBe(false);
    });
  });
});
