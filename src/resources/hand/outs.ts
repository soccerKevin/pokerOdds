import { models as cardModels } from '@/resources/card';
import { models } from '.';

interface findOutsProps {
  deck: cardModels.Card[];
  hand: models.Hand;
  minHandRank: number;
}

export const findOuts = ({ deck, hand, minHandRank }: findOutsProps): cardModels.Card[] => {
  const outs: cardModels.Card[] = [];
  deck.forEach((card) => {
    if (!hand.includes(card)) {
      outs.push(card);
    }
  });
  return outs;
};
