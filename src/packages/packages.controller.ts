import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreatePackageDto } from './dto/create-packages.dto';
import { FilterPackagesDto } from './dto/filter-packages.dto';
import { Packages } from './entity/packages.entity';
import { PackagesService } from './packages.service';

@Controller('packages')
export class PackagesController {
  constructor(private packagesService: PackagesService) {}

  @Get()
  async getAllPackages(@Query() filter: FilterPackagesDto) {
    return await this.packagesService.getAllPackages(filter);
  }

  @Post()
  async createPackages(
    @Body() createPackageDto: CreatePackageDto,
  ): Promise<Packages> {
    return await this.packagesService.createPackages(createPackageDto);
  }
}
