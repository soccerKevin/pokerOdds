import { models } from '..';

export const highCard: models.Hand = [
  { rank: 7, suit: 'h' },
  { rank: 2, suit: 'c' },
  { rank: 3, suit: 's' },
  { rank: 4, suit: 'd' },
  { rank: 5, suit: 'h' },
];

export const pair: models.Hand = [
  { rank: 2, suit: 'h' },
  { rank: 2, suit: 'c' },
  { rank: 3, suit: 's' },
  { rank: 4, suit: 'd' },
  { rank: 5, suit: 'h' },
];

export const twoPair: models.Hand = [
  { rank: 2, suit: 'h' },
  { rank: 2, suit: 'c' },
  { rank: 3, suit: 's' },
  { rank: 3, suit: 'd' },
  { rank: 5, suit: 'h' },
];

export const threeOfAKind: models.Hand = [
  { rank: 2, suit: 'h' },
  { rank: 2, suit: 'c' },
  { rank: 2, suit: 's' },
  { rank: 3, suit: 'd' },
  { rank: 5, suit: 'h' },
];

export const straight: models.Hand = [
  { rank: 2, suit: 'h' },
  { rank: 3, suit: 'c' },
  { rank: 4, suit: 's' },
  { rank: 5, suit: 'd' },
  { rank: 6, suit: 'h' },
];

export const flush: models.Hand = [
  { rank: 2, suit: 'h' },
  { rank: 3, suit: 'h' },
  { rank: 4, suit: 'h' },
  { rank: 9, suit: 'h' },
  { rank: 6, suit: 'h' },
];

export const fullHouse: models.Hand = [
  { rank: 2, suit: 'h' },
  { rank: 2, suit: 'c' },
  { rank: 2, suit: 's' },
  { rank: 3, suit: 'd' },
  { rank: 3, suit: 'h' },
];

export const fourOfAKind: models.Hand = [
  { rank: 2, suit: 'h' },
  { rank: 2, suit: 'c' },
  { rank: 2, suit: 's' },
  { rank: 2, suit: 'd' },
  { rank: 3, suit: 'h' },
];

export const straightFlush: models.Hand = [
  { rank: 2, suit: 'h' },
  { rank: 3, suit: 'h' },
  { rank: 4, suit: 'h' },
  { rank: 5, suit: 'h' },
  { rank: 6, suit: 'h' },
];
