import { Module } from '@nestjs/common';
import { CityResolver } from './city.resolver';
import { CityService } from './city.service';

@Module({
  providers: [CityResolver, CityService]
})
export class CityModule {}
