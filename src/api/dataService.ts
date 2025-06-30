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
  views?: number; 
  likes?: number;  
}

/** return a random integer between min and max inclusive */
function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
    views: randomInt(800, 5000),   // add a random view count
    likes: randomInt(10, 400),   // add a random like count
  };
}

export function getAllItems(): Promise<Item[]> {
  return axios
    .get<RawItem[]>(`${BASE}/api/data`)
    .then(res => res.data.map(mapRawToItem));
}
