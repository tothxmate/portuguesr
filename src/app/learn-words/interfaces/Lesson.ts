import { Translation } from "./Translation";

export interface Lesson {
    name: string;
    translations: Translation[];
    imageUrl?: string;
}