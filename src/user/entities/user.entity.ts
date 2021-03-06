import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum ROLES {
  USER = 0,
  ADMIN = 1,
}

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn({type: 'int'} )
  id: number;

  @Column({type: 'varchar', length: 100})
  password: string;

  @Column({type: 'varchar', length: 100, unique: true})
  email: string;

  @Column({type: 'varchar', length: 100, nullable: true})
  name?: string;

  @Column({type: 'varchar', length: 100, nullable: true, default: null})
  surname?: string;

  @Column({name: 'date_of_birth', type: 'varchar', length: 10, nullable: true})
  dateOfBirth?: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  address?: string;

  @Column({type: 'varchar', length: 20, nullable: true})
  phone?: string;

  @Column({type: 'varchar', length: 45, nullable: true})
  avatar?: string;

  @Column({type: 'enum', enum: [ROLES.USER, ROLES.ADMIN]})
  role: ROLES | string;
}
