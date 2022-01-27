import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UniversityModule } from './university/university.module';
import { CityModule } from './city/city.module';
import { StateModule } from './state/state.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://universities:universities@cluster0.lbwli.mongodb.net/myUniversities?retryWrites=true&w=majority'),
    GraphQLModule.forRoot({autoSchemaFile: 'schema.gql'}),
    UniversityModule,
    CityModule,
    StateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
