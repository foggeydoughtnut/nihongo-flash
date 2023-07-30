export default interface Card {
  id: number,
  term: string,
  definition: string,
  confidence: number,
  exampleSentence: string | null,
  new: boolean,
  inProgress: boolean,
  review: boolean,
  createdAt: string,
  updatedAt: string,
  DeckId: number,
  UserId: number,
}