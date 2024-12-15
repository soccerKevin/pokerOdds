import { getSuit, getRank } from '@/resources/card';
import { models, rankCounts } from '.';

export const consecutive = (hand: models.Hand): boolean => {
  let is = false;
  const sorted = hand.map(getRank).sort((a, b) => b - a);
  for (let i = 0; i <= sorted.length - 5; i++) {
    const chunk = sorted.slice(i, i + 5);
    is ||= chunk.every((rank, index, sorted) => index === 0 || rank === sorted[index - 1] - 1);
    if (is) break;
  }
  return is;
};

export const suited = (hand: models.Hand): boolean => hand.map(getSuit).every((suit, _i, suits) => suit === suits[0]);

export const pair = (hand: models.Hand): boolean => {
  const counts = rankCounts(hand);
  return Object.values(counts).filter((value) => value === 2).length === 1;
};

export const twoPair = (hand: models.Hand): boolean => {
  const counts = rankCounts(hand);
  const pairs = Object.values(counts).filter((value) => value === 2);
  return pairs.length === 2;
};

export const threeOfAKind = (hand: models.Hand): boolean => {
  const counts = rankCounts(hand);
  return Object.values(counts).some((value) => value === 3);
};

export const straight = (hand: models.Hand): boolean => consecutive(hand) && !suited(hand);

export const flush = (hand: models.Hand): boolean => suited(hand) && !consecutive(hand);

export const fullHouse = (hand: models.Hand): boolean => {
  const counts = rankCounts(hand);
  return Object.values(counts).includes(3) && Object.values(counts).includes(2);
};

export const straightFlush = (hand: models.Hand): boolean => {
  return consecutive(hand) && suited(hand);
};

export const fourOfAKind = (hand: models.Hand): boolean => {
  const counts = rankCounts(hand);
  return Object.values(counts).some((value) => value === 4);
};
