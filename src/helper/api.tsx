import axios, { AxiosError } from 'axios';

axios.defaults.headers.common = {
  'Content-Type': 'application/json',
  Authorization: 'ec02ed6e95634377b257a80ed46d47c0',
};
axios.defaults.baseURL = 'https://itunes.apple.com/search';

const params = {
  limit: 10,
  country: 'KR',
  media: 'music',
};

export interface iTunesMusic {
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  collectionExplicitness: string;
  trackExplicitness: string;
  discCount: number;
  discNumber: number;
  trackCount: number;
  trackNumber: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
}

export const getSerachList = async (term: string): Promise<iTunesMusic[]> => {
  try {
    const { data } = await axios.get('', { params: { term, ...params } });

    console.log(JSON.stringify(data.results, null, 2));

    return data.results;
  } catch (error) {
    const { response } = error as unknown as AxiosError;

    if (response) {
      throw { status: response.status, data: response.data };
    }

    throw error;
  }
};
