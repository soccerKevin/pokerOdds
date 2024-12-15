// import { array } from '@/utils';
// import {
//   models,
//   rankCounts,
// } from '.';

// type NeededCards = [...models.Card[][]] & { length: 1 | 2 | 3 | 4 | 5 };

// export const makePair = (deck: models.Card[], hand: models.Hand): NeededCards => {
//   const ranks = array.unique(hand.map((card) => card.rank));
//   return [deck.filter((card) => ranks.includes(card.rank))];
// };

// export const makeTwoPair = (deck: models.Card[], hand: models.Hand): NeededCards => {

// };

// export const makeThreeOfAKind = (deck: models.Card[], hand: models.Hand): NeededCards => {
//   const counts = rankCounts(hand);
//   return Object.values(counts).some((value) => value === 3);
// };

// export const makeStraight = (deck: models.Card[], hand: models.Hand): models.Card[] => ;

// export const makeFlush = (deck: models.Card[], hand: models.Hand): models.Card[] => ;

// export const makeFullHouse = (deck: models.Card[], hand: models.Hand): NeededCards => {
//   const counts = rankCounts(hand);
//   return Object.values(counts).includes(3) && Object.values(counts).includes(2);
// };

// export const makeStraightFlush = (deck: models.Card[], hand: models.Hand): NeededCards => {

// };

// export const makeFourOfAKind = (deck: models.Card[], hand: models.Hand): NeededCards => {
//   const counts = rankCounts(hand);
//   return Object.values(counts).some((value) => value === 4);
// };
