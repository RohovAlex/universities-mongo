import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UniversityResolver } from './university.resolver';
import { University, UniversitySchema } from './university.schema';
import { UniversityService } from './university.service';

@Module({
  imports: [MongooseModule.forFeature([{name: University.name, schema: UniversitySchema}])],
  providers: [UniversityResolver, UniversityService]
})
export class UniversityModule {}
