import { models } from '.';

type RankCounts = {
  [key in models.Rank]?: number;
};

const rankCounts = (hand: models.Hand): RankCounts =>
  hand.reduce((acc, card) => ({ ...acc, [card.rank]: (acc[card.rank] || 0) + 1 }), {} as RankCounts);

const isConsecutive = (hand: models.Hand): boolean => {
  const sorted = hand.map((card) => card.rank).sort((a, b) => a - b);
  return sorted.every((rank, index) => index === 0 || rank === sorted[index - 1] + 1);
};

const isSameSuit = (hand: models.Hand): boolean => hand.every((card) => card.suit === hand[0].suit);

export const isPair = (hand: models.Hand): boolean => {
  const counts = rankCounts(hand);
  return Object.values(counts).filter((value) => value === 2).length === 1;
};

export const isTwoPair = (hand: models.Hand): boolean => {
  const counts = rankCounts(hand);
  const pairs = Object.values(counts).filter((value) => value === 2);
  return pairs.length === 2;
};

export const isThreeOfAKind = (hand: models.Hand): boolean => {
  const counts = rankCounts(hand);
  return Object.values(counts).some((value) => value === 3);
};

export const isStraight = (hand: models.Hand): boolean => isConsecutive(hand) && !isSameSuit(hand);

export const isFlush = (hand: models.Hand): boolean => isSameSuit(hand) && !isConsecutive(hand);

export const isFullHouse = (hand: models.Hand): boolean => {
  const counts = rankCounts(hand);
  return Object.values(counts).includes(3) && Object.values(counts).includes(2);
};

export const isStraightFlush = (hand: models.Hand): boolean => {
  return isConsecutive(hand) && isSameSuit(hand);
};

export const isFourOfAKind = (hand: models.Hand): boolean => {
  const counts = rankCounts(hand);
  return Object.values(counts).some((value) => value === 4);
};
