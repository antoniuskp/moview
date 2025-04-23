import { IReview } from "./review";
import { IActor } from "./actor";

export interface IMoview {
    poster: string,
    judul: string,
    genre: string,
    tanggalRilis: Date,
    reviews: IReview[],
    actors: IActor[],
    sutradara: string,
    sinopsis: string
}