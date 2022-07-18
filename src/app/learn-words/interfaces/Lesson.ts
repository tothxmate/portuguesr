import { Translation } from "./Translation";

export interface Lesson {
    id: number;
    name: string;
    translations: Translation[]
}