import { models as cardModels, getRank } from '@/resources/card';
import { models } from '.';

type RankCount = {
  [key in cardModels.Rank]: number;
};

export const rankCounts = (hand: models.Hand): RankCount =>
  hand.reduce((acc, card) => ({ ...acc, [getRank(card)]: (acc[getRank(card)] || 0) + 1 }), {} as RankCount);
