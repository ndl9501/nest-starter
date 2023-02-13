import { DataSource, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '@src/modules/user/entities/user.entity';

/**
 * Template Custom Repository: TemplateRepository extends Repository<Entity>
 *
 **/
@Injectable()
export class TemplateRepository extends Repository<UserEntity> {
    constructor(
        @InjectDataSource() private dataSource: DataSource,
        @InjectRepository(UserEntity) userRepo: Repository<UserEntity>,
    ) {
        super(userRepo.target, userRepo.manager, userRepo.queryRunner);
    }
}
