import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreatePackageDto {
  @IsString()
  @IsNotEmpty()
  id_package: string;

  @IsString()
  @IsNotEmpty()
  packageName: string;

  @IsString()
  @IsNotEmpty()
  destination: string;

  @IsNotEmpty()
  @IsNumberString()
  price: number;
}
