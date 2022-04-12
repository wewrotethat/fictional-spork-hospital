import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Patient extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
    default: 'Unknown',
  })
  gender?: string;

  @property({
    type: 'date',
    required: true,
  })
  birthDate: string;

  @property({
    type: 'string',
  })
  address?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Patient>) {
    super(data);
  }
}

export interface PatientRelations {
  // describe navigational properties here
}

export type PatientWithRelations = Patient & PatientRelations;
