interface ComicSummary {
  resourceURI: string;
  name: string;
}
interface ComicList {
  available: number;
  returned: number;
  collectionURI: string;
  items: ComicSummary[];
}

interface StorySummary {
  resourceURI: string;
  name: string;
  type: string;
}

interface StoryList {
  available: number;
  returned: number;
  collectionURI: string;
  items: StorySummary[];
}

interface EventSummary  {
  resourceURI: string;
  name: string;
}

interface EventList  {
  available: number;
  returned: number;
  collectionURI: string;
  items: EventSummary[];
}

interface SeriesSummary  {
  resourceURI: string;
  name: string;
}

interface SeriesList   {
  available: number;
  returned: number;
  collectionURI: string;
  items: SeriesSummary[];
}

interface Image {
  path: string;
  extension: string;
}

interface Url {
  type: string;
  url: string;
}

export interface CharacterResponse {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Url[];
  thumbnail: Image;
  comics: ComicList;
  stories: StoryList;
  events: EventList;
  series: SeriesList;
}
