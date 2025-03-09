import type { Categories } from "~~/constants";

export interface IContact {
    id: number,
    name: string,
    surname: string,
    email: string,
    tel: string,
    category: Categories | null
}



