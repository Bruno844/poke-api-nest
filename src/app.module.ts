import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..','public'),
    }),

    MongooseModule.forRoot('mongodb+srv://user-node:bocateamo@cluster-me-node.rsjc3.mongodb.net/pokedex'),
    PokemonModule,
    SeedModule
  ]
})
export class AppModule {}
