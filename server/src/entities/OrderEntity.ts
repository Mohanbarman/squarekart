import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ProductEntity } from "./ProductEntity";
import { UserEntity } from "./UserEntity";

@Entity({ name: "orders" })
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn({ nullable: false })
  createdAt!: Date;

  @UpdateDateColumn({ nullable: false })
  updatedAt!: Date;

  @Column({ nullable: false })
  pricePerItem!: number;

  @Column({ nullable: false, default: "INR" })
  currency!: string;

  @Column({ nullable: false, default: 1 })
  qty!: number;

  @Column({ nullable: false })
  fullName!: string;

  @Column({ nullable: false })
  mobile: string;

  @Column({ nullable: false })
  shippingAddress!: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  state: string;

  @Column({ nullable: false })
  userId!: number;

  @Column({ nullable: false })
  productId!: number;

  @ManyToOne(() => ProductEntity, (_product) => _product.id)
  @JoinColumn({ name: "productId" })
  product: ProductEntity;

  @ManyToOne(() => UserEntity, (_user) => _user.id)
  @JoinColumn({ name: "userId" })
  user: UserEntity;
}
