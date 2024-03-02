import { RecordSchemaType } from "./RecordSchema.types";
export declare class RecordSchema {
    private meta;
    private model;
    toJSON(): string;
    static genFromJSON(temp: RecordSchemaType): boolean;
    static isValidMeta(sample: any): boolean;
    static isValidModel(sample: any): boolean;
}
