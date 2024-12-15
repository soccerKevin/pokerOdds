import { cardFromHuman, cardToHuman } from '@/resources/card';
import { models } from '..';

export const highCard: models.Hand = [
  cardFromHuman({ rank: 7, suit: 'h' }),
  cardFromHuman({ rank: 2, suit: 'c' }),
  cardFromHuman({ rank: 3, suit: 's' }),
  cardFromHuman({ rank: 4, suit: 'd' }),
  cardFromHuman({ rank: 5, suit: 'h' }),
];

export const pair: models.Hand = [
  cardFromHuman({ rank: 2, suit: 'h' }),
  cardFromHuman({ rank: 2, suit: 'c' }),
  cardFromHuman({ rank: 3, suit: 's' }),
  cardFromHuman({ rank: 4, suit: 'd' }),
  cardFromHuman({ rank: 5, suit: 'h' }),
];

export const twoPair: models.Hand = [
  cardFromHuman({ rank: 2, suit: 'h' }),
  cardFromHuman({ rank: 2, suit: 'c' }),
  cardFromHuman({ rank: 3, suit: 's' }),
  cardFromHuman({ rank: 3, suit: 'd' }),
  cardFromHuman({ rank: 5, suit: 'h' }),
];

export const threeOfAKind: models.Hand = [
  cardFromHuman({ rank: 2, suit: 'h' }),
  cardFromHuman({ rank: 2, suit: 'c' }),
  cardFromHuman({ rank: 2, suit: 's' }),
  cardFromHuman({ rank: 3, suit: 'd' }),
  cardFromHuman({ rank: 5, suit: 'h' }),
];

export const straight: models.Hand = [
  cardFromHuman({ rank: 2, suit: 'h' }),
  cardFromHuman({ rank: 3, suit: 'c' }),
  cardFromHuman({ rank: 4, suit: 's' }),
  cardFromHuman({ rank: 5, suit: 'd' }),
  cardFromHuman({ rank: 6, suit: 'h' }),
];

export const flush: models.Hand = [
  cardFromHuman({ rank: 2, suit: 'h' }),
  cardFromHuman({ rank: 3, suit: 'h' }),
  cardFromHuman({ rank: 4, suit: 'h' }),
  cardFromHuman({ rank: 9, suit: 'h' }),
  cardFromHuman({ rank: 6, suit: 'h' }),
];

export const fullHouse: models.Hand = [
  cardFromHuman({ rank: 2, suit: 'h' }),
  cardFromHuman({ rank: 2, suit: 'c' }),
  cardFromHuman({ rank: 2, suit: 's' }),
  cardFromHuman({ rank: 3, suit: 'd' }),
  cardFromHuman({ rank: 3, suit: 'h' }),
];

export const fourOfAKind: models.Hand = [
  cardFromHuman({ rank: 2, suit: 'h' }),
  cardFromHuman({ rank: 2, suit: 'c' }),
  cardFromHuman({ rank: 2, suit: 's' }),
  cardFromHuman({ rank: 2, suit: 'd' }),
  cardFromHuman({ rank: 3, suit: 'h' }),
];

export const straightFlush: models.Hand = [
  cardFromHuman({ rank: 2, suit: 'h' }),
  cardFromHuman({ rank: 3, suit: 'h' }),
  cardFromHuman({ rank: 4, suit: 'h' }),
  cardFromHuman({ rank: 5, suit: 'h' }),
  cardFromHuman({ rank: 6, suit: 'h' }),
];
