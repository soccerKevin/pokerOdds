import { models, SUITS } from '.';

export const getSuit = (card: models.Card): models.Suit => SUITS[Math.floor(card / 13)];

export const getRank = (card: models.Card): models.Rank => (card % 13) as models.Rank;

interface getCardProps {
  rank: models.Rank;
  suit: models.Suit;
}

export const getCard = ({ rank, suit }: getCardProps): models.Card => (SUITS.indexOf(suit) * 13 + rank) as models.Card;

interface HumanCard {
  rank: number;
  suit: models.Suit;
}

export const cardFromHuman = ({ rank, suit }: HumanCard): models.Card =>
  getCard({ rank: (rank - 2) as models.Rank, suit });

export const cardToHuman = (card: models.Card): HumanCard => ({ rank: getRank(card) + 2, suit: getSuit(card) });
