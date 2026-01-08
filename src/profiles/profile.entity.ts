// En üstteki import satırına OneToMany eklendi
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm'; 
import { ProfileType } from '../profile-types/profile-type.entity';
import { Product } from '../product/product.entity'; // Product entity'sini içeri aktar

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  photo: string;

  @ManyToOne(() => ProfileType, (profileType) => profileType.profiles, { eager: true })
  @JoinColumn()
  profileType: ProfileType;

  // YENİ EKLEDİĞİMİZ KISIM:
  // Bir kullanıcının birçok (OneToMany) ürünü olabilir.
  @OneToMany(() => Product, (product) => product.addedBy)
  products: Product[];
}