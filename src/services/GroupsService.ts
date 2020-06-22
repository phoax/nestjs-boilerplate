import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Group } from 'src/models/GroupEntity';

@Injectable()
export class GroupsService {

  constructor(
    // @InjectRepository(Group)
    // private groupsRepository: Repository<Group>,
  ) { }

  // async findByName(groupname: string): Promise<Group | undefined> {
  //   // return this.groupsRepository.find(group => group.email === groupname);
  // }

  async create(): Promise<any> {
    // async create(): Promise<Group> {
    const group = new Group();

    // const createdGroup = await this.groupsRepository.save(group);
    // return createdGroup;
  }
}
