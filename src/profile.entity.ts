import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ type: 'date' })
  dob: string;
}
