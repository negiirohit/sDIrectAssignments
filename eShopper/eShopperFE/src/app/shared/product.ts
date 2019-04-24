import { Comment } from './comment';

export class Product {
    _id: string;
    name: string;
    category: string;
    price: number;
    featured: boolean;
    comments: Comment[];
}