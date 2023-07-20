import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Pokemon extends Document {

    @Prop({
        unique: true,
        index: true //indica el indice
    })
    name: string;

    @Prop({
        unique: true,
        index: true //indica el indice
    })
    no: number;

}


export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
