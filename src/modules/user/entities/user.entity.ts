import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { DateAudit } from 'src/base/date_audit.entity';
import { Role } from '@src/enums/role.enum';

// @Index()
@Entity({ name: 'user' })
export class UserEntity extends DateAudit {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true, name: 'email', type: 'varchar', nullable: true })
    email: string;

    @Column({ name: 'avatar', type: 'text', nullable: true })
    avatar: string;

    @Column({ name: 'first_name', type: 'varchar', nullable: true })
    firstName: string;

    @Column({ name: 'last_name', type: 'varchar', nullable: true })
    lastName: string;

    // @Exclude()
    @Column({ name: 'password', type: 'varchar', nullable: true })
    password: string;

    @Column({ name: 'role', type: 'varchar', default: Role.USER })
    role: string;

    @Column({ name: 'is_active', type: 'boolean', default: true })
    isActive: boolean;

    constructor(partial: Partial<UserEntity>) {
        super();
        Object.assign(this, partial);
    }

    @Expose()
    get fullName(): string {
        if (this?.firstName && this?.lastName) return `${this?.firstName} ${this?.lastName}`;
    }
}
