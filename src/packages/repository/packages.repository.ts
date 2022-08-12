/* eslint-disable prettier/prettier */
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreatePackageDto } from '../dto/create-packages.dto';
import { FilterPackagesDto } from '../dto/filter-packages.dto';
import { Packages } from '../entity/packages.entity';

@EntityRepository(Packages)
export class PackagesRepository extends Repository<Packages> {
    async getAllPackages(filter: FilterPackagesDto): Promise<Packages[]> {
        const { packagesName, destination, min_price, max_price} = filter;
    
        const query = this.createQueryBuilder('package');
    
        if(packagesName) {
            query.andWhere('lower(package.packagesName) LIKE :packagesNames', { 
                packagesName: `%${packagesName.toLowerCase()}`,
            });
        }
    
        if(destination) {
            query.andWhere('lower(package.destination) LIKE :destination', {
                destination: `%${destination.toLowerCase()}`,
            });
        }
    
        if(min_price) {
            query.andWhere('package.price >= :min_year', { min_price });
        }
    
        if(max_price) {
            query.andWhere('package.price <= :max_year', { max_price });
        }
    
        return await query.getMany();
    }

    async createPackages(dto: CreatePackageDto): Promise<Packages>{
        const {id_package, packageName, destination, price} = dto;

        const packages = this.create();
        packages.id_package = id_package;
        packages.packageName = packageName;
        packages.destination = destination;
        packages.price = price;

        try {
            return await packages.save();
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new ConflictException('ID Packages already exists');
            } else {
            throw new InternalServerErrorException(error);
            }
        }
    }
}
