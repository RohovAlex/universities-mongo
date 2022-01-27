import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreateUniversityInput, University, FindByIdInput, UpdateUniversityInput } from './university.schema';
import { UniversityService } from './university.service'

@Resolver(() => University)
export class UniversityResolver {

    constructor(private UniversityService: UniversityService) {
        this.UniversityService = UniversityService
    }

    @Query(() => [University])
    async universities() {
        return await this.UniversityService.find()
    }

    @Query(() => University)
    async university(@Args('input') {_id}: FindByIdInput) {
        return await this.UniversityService.findById(_id)
    }

    @Mutation(() => University)
    async createUniversity(@Args('input') university: CreateUniversityInput) {
        return await this.UniversityService.create(university)
    }

    @Mutation(() => University)
    async updateUniversity(@Args('input') university: UpdateUniversityInput) {
        return await this.UniversityService.updateById(university)
    }
}
