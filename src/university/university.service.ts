import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'

import { University, CreateUniversityInput, UpdateUniversityInput } from './university.schema';


@Injectable()
export class UniversityService {

    // universities: University[]

    constructor(@InjectModel(University.name) private universityModel: Model<University>) {
        // this.universities = universities
    } 

    async find() {
        return this.universityModel.find().lean();
    }

    async findById(id) {
        return this.universityModel.findById(id).lean();
    }

    async create(university: CreateUniversityInput) {
        return this.universityModel.create(university);
    }

    async updateById(university: UpdateUniversityInput) {
        return this.universityModel.findByIdAndUpdate(university._id, university);
    }
}
