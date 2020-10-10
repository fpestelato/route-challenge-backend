import { InternalServerErrorException } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import TestUtil from '../common/test/test.util';
import { DeliveriesController } from './deliveries.controller';
import { DeliveriesService } from './deliveries.service';
import { Delivery } from './schemas/delivery.schema';

describe('DeliveryController', () => {
    let deliveriesController: DeliveriesController;
    let deliveriesService: DeliveriesService;
    const validDelivery = TestUtil.getValidDelivery();

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            controllers: [DeliveriesController],
            providers: [
                DeliveriesService,
                {
                    provide: getModelToken(Delivery.name),
                    useClass: Delivery
                }
            ]
        }).compile();

        deliveriesService = module.get<DeliveriesService>(DeliveriesService);
        deliveriesController = module.get<DeliveriesController>(DeliveriesController);
    });

    describe('When findAll', () => {
        it('should return all deliveries', async () => {
            const validDelivery = TestUtil.getValidDelivery();
            const result: Delivery[] = [validDelivery, validDelivery];
            jest.spyOn(deliveriesService, 'findAll').mockResolvedValue(result);

            expect(await deliveriesController.findAll()).toHaveLength(2);
        });
    });

    describe('When create', () => {
        it('should create a delivery', async () => {
            jest.spyOn(deliveriesService, 'create').mockResolvedValue(validDelivery);
            const result: Delivery = await deliveriesController.create(validDelivery);

            expect(result.name).toBe(validDelivery.name);
        });

        it('should not create a delivery', async () => {
            jest.spyOn(deliveriesService, 'create').mockResolvedValue(null);
            await deliveriesController.create(null).catch(e => {
                expect(e).toBeInstanceOf(InternalServerErrorException);
                expect(e).toMatchObject({ message: 'Problem to create a delivery' });
            });
        });

        it('should not create a delivery when there is no name', async () => {
            const invalidDelivery = { ...validDelivery, name: '' };
            
            jest.spyOn(deliveriesService, 'create').mockResolvedValue(invalidDelivery);
            await deliveriesController.create(invalidDelivery).catch(e => {
                expect(e).toBeInstanceOf(InternalServerErrorException);
                expect(e).toMatchObject({ message: 'Problem to create a delivery' });
            });
        });

        it('should not create a delivery when there is no weight', async () => {
            const invalidDelivery = { ...validDelivery, weight: null };

            jest.spyOn(deliveriesService, 'create').mockResolvedValue(invalidDelivery);
            await deliveriesController.create(invalidDelivery).catch(e => {
                expect(e).toBeInstanceOf(InternalServerErrorException);
                expect(e).toMatchObject({ message: 'Problem to create a delivery' });
            });
        });
        
        it('should not create a delivery when there is no public area', async () => {
            const invalidDelivery = { ...validDelivery, publicArea: '' };

            jest.spyOn(deliveriesService, 'create').mockResolvedValue(invalidDelivery);
            await deliveriesController.create(invalidDelivery).catch(e => {
                expect(e).toBeInstanceOf(InternalServerErrorException);
                expect(e).toMatchObject({ message: 'Problem to create a delivery' });
            });
        });

        it('should not create a delivery when there is no number', async () => {
            const invalidDelivery = { ...validDelivery, number: null };

            jest.spyOn(deliveriesService, 'create').mockResolvedValue(invalidDelivery);
            await deliveriesController.create(invalidDelivery).catch(e => {
                expect(e).toBeInstanceOf(InternalServerErrorException);
                expect(e).toMatchObject({ message: 'Problem to create a delivery' });
            });
        });

        it('should not create a delivery when there is no district', async () => {
            const invalidDelivery = { ...validDelivery, district: '' };

            jest.spyOn(deliveriesService, 'create').mockResolvedValue(invalidDelivery);
            await deliveriesController.create(invalidDelivery).catch(e => {
                expect(e).toBeInstanceOf(InternalServerErrorException);
                expect(e).toMatchObject({ message: 'Problem to create a delivery' });
            });
        });

        it('should not create a delivery when there is no city', async () => {
            const invalidDelivery = { ...validDelivery, city: '' };

            jest.spyOn(deliveriesService, 'create').mockResolvedValue(invalidDelivery);
            await deliveriesController.create(invalidDelivery).catch(e => {
                expect(e).toBeInstanceOf(InternalServerErrorException);
                expect(e).toMatchObject({ message: 'Problem to create a delivery' });
            });
        });

        it('should not create a delivery when there is no state', async () => {
            const invalidDelivery = { ...validDelivery, state: '' };

            jest.spyOn(deliveriesService, 'create').mockResolvedValue(invalidDelivery);
            await deliveriesController.create(invalidDelivery).catch(e => {
                expect(e).toBeInstanceOf(InternalServerErrorException);
                expect(e).toMatchObject({ message: 'Problem to create a delivery' });
            });
        });
        
        it('should not create a delivery when there is no country', async () => {
            const invalidDelivery = { ...validDelivery, country: '' };

            jest.spyOn(deliveriesService, 'create').mockResolvedValue(invalidDelivery);
            await deliveriesController.create(invalidDelivery).catch(e => {
                expect(e).toBeInstanceOf(InternalServerErrorException);
                expect(e).toMatchObject({ message: 'Problem to create a delivery' });
            });
        });

        it('should not create a delivery when there is no latitude', async () => {
            const invalidDelivery = { ...validDelivery, latitude: null };

            jest.spyOn(deliveriesService, 'create').mockResolvedValue(invalidDelivery);
            await deliveriesController.create(invalidDelivery).catch(e => {
                expect(e).toBeInstanceOf(InternalServerErrorException);
                expect(e).toMatchObject({ message: 'Problem to create a delivery' });
            });
        });

        it('should not create a delivery when there is no longitude', async () => {
            const invalidDelivery = { ...validDelivery, longitude: null };

            jest.spyOn(deliveriesService, 'create').mockResolvedValue(invalidDelivery);
            await deliveriesController.create(invalidDelivery).catch(e => {
                expect(e).toBeInstanceOf(InternalServerErrorException);
                expect(e).toMatchObject({ message: 'Problem to create a delivery' });
            });
        });
    });

    describe('When delete', () => {
        it('should delete all deliveries', async () => {
            jest.spyOn(deliveriesService, 'delete').mockResolvedValue();
            await deliveriesController.delete()
            expect(deliveriesService.delete).toHaveBeenCalled();
        });
    });
});
