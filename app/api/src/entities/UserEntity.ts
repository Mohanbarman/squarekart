import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "users" })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn({ nullable: false })
  createdAt!: Date;

  @UpdateDateColumn({ nullable: false })
  updatedAt!: Date;

  @Column({ nullable: false })
  firstName!: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column({ nullable: false })
  password!: string;

  @Column({ nullable: false, unique: true })
  email!: string;
}
