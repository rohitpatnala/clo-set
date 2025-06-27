import axios from 'axios';
import type { Item } from '../components/ContentCard';

const BASE = 'https://closet-recruiting-api.azurewebsites.net';

interface RawItem {
  id: string;
  creator: string;
  title: string;
  pricingOption: number;  // 0 = paid, 1 = free, 2 = viewOnly
  imagePath: string;
  price?: number;
}

function mapRawToItem(raw: RawItem): Item {
  // map numeric pricingOption to our string union
  const pricing = raw.pricingOption === 0
    ? 'paid'
    : raw.pricingOption === 1
      ? 'free'
      : 'viewOnly';

  return {
    id: raw.id,
    userName: raw.creator,
    title: raw.title,
    pricing,
    price: raw.price,
    imageUrl: raw.imagePath,
  };
}

export function getAllItems(): Promise<Item[]> {
  return axios
    .get<RawItem[]>(`${BASE}/api/data`)
    .then(res => res.data.map(mapRawToItem));
}
