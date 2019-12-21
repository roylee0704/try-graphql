import { Document } from 'mongoose';

// this is just entity, in ddd: could be aggregate
// it can be an interface: to shared among different annotations.
export interface Cat extends Document {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
}
