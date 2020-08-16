import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false, unique: true, length: 25 })
  username: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @Column({ type: 'timestamp', name: 'create_at' })
  createAt: Date;

  @Column({ type: 'timestamp', name: 'update_at' })
  updateAt: Date;
}
