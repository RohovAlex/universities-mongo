import { Field, ObjectType, InputType, Int, ID } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
class State {
    @Prop({required: true})
    @Field(() => Int)
    id: number

    @Prop({required: true})
    @Field()
    name: string
}

@Schema()
@ObjectType()
class City {
    @Prop({required: true})
    @Field(() => Int)
    id: number

    @Prop({required: true})
    @Field()
    name: string

    @Prop({required: true})
    @Field()
    state: State
}
@Schema()
@ObjectType()
export class University {
    @Field(() => ID)
    _id: number

    @Prop({required: true})
    @Field()
    name: string

    @Prop({required: true})
    @Field()
    city: City
}

@InputType()
class StateInput {
    @Field(() => Int)
    id: number

    @Field()
    name: string
}

@InputType()
class CityInput {
    @Field(() => Int)
    id: number

    @Field()
    name: string

    @Field()
    state: StateInput
}


@InputType()
export class CreateUniversityInput {
    // @Field(() => ID)
    // _id: string

    @Field()
    name: string

    @Field()
    city: CityInput
}

@InputType()
export class UpdateUniversityInput {
    @Field(() => ID)
    _id: string

    @Field()
    name: string

    @Field()
    city: CityInput
}

@InputType()
export class FindByIdInput {
    @Field(() => ID)
    _id: number
}

export const UniversitySchema = SchemaFactory.createForClass(University)