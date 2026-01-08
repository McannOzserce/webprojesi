import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Profile } from '../profiles/profile.entity';
import { Category } from './category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  // Ekleyen kişi ilişkisi (Okul projesi olduğu için en basit haliyle)
  @ManyToOne(() => Profile, (profile) => profile.products, { onDelete: 'SET NULL', nullable: true })
  addedBy: Profile;

  // Kategori ilişkisi
  @ManyToMany(() => Category, (category) => category.products)
  @JoinTable()
  categories: Category[];
}