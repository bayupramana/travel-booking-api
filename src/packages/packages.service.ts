import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePackageDto } from './dto/create-packages.dto';
import { FilterPackagesDto } from './dto/filter-packages.dto';
import { Packages } from './entity/packages.entity';
import { PackagesRepository } from './repository/packages.repository';

@Injectable()
export class PackagesService {
  constructor(
    @InjectRepository(PackagesRepository)
    private packagesRepository: PackagesRepository,
  ) {}

  async getAllPackages(filter: FilterPackagesDto): Promise<Packages[]> {
    return await this.packagesRepository.getAllPackages(filter);
  }

  async createPackages(dto: CreatePackageDto): Promise<Packages> {
    return this.packagesRepository.createPackages(dto);
  }
}
