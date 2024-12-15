import { models as cardModels } from '@/resources/card';

export type Hand = [cardModels.Card, cardModels.Card, ...cardModels.Card[]] & { length: 2 | 3 | 4 | 5 | 6 | 7 };

export enum HandRank {
  HighCard = 0,
  Pair = 1,
  TwoPair = 2,
  ThreeOfAKind = 3,
  Straight = 4,
  Flush = 5,
  FullHouse = 6,
  FourOfAKind = 7,
  StraightFlush = 8,
  RoyalFlush = 9,
}
