import { Exclude, Expose } from 'class-transformer';

import {
  IsInt,
  IsNotEmpty,
  IsEmail,
  IsOptional,
} from 'class-validator';

@Exclude()
export class CreateClientForm {
  @Expose()
  @IsNotEmpty()
  public firstName?: string;

  @Expose()
  @IsNotEmpty()
  public lastName?: string;

  @Expose()
  @IsEmail()
  @IsOptional()
  public email?: string;

  @Expose()
  @IsInt()
  @IsOptional()
  public coachId?: number;

  @Expose()
  @IsInt()
  @IsOptional()
  public nutritionistId?: number;

}
