import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Patient, PatientRelations} from '../models';

export class PatientRepository extends DefaultCrudRepository<
  Patient,
  typeof Patient.prototype.id,
  PatientRelations
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Patient, dataSource);
  }
}
