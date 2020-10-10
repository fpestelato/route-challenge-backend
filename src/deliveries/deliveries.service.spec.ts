import { InternalServerErrorException } from '@nestjs/common';
import { getModelToken, InjectModel } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { DocumentQuery, Model } from 'mongoose';
import TestUtil from './../common/test/test.util';
import { DeliveriesService } from './deliveries.service';
import { Delivery, DeliveryDocument } from './schemas/delivery.schema'

describe('DeliveriesService', () => {
  let service: DeliveriesService;
  let model: Model<DeliveryDocument>;

  const validDelivery = TestUtil.getValidDelivery();
  const validDeliveryArray = [validDelivery, validDelivery, validDelivery];
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeliveriesService,
        {
          provide: getModelToken(Delivery.name),
          useValue: {
            constructor: jest.fn().mockResolvedValue(validDelivery),
            find: jest.fn(),
            create: jest.fn(),
            deleteMany: jest.fn(),
            exec: jest.fn(),
          },
        }
      ],
    }).compile();

    service = module.get<DeliveriesService>(DeliveriesService);
    model = module.get<Model<DeliveryDocument>>(getModelToken(Delivery.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('When find all deliveries', () => {
    it('should return all deliveries', async () => {    
      jest.spyOn(model, 'find').mockReturnValue({
        exec: jest.fn().mockResolvedValue(validDeliveryArray),
      } as any);

      const deliveries = await service.findAll();
      
      expect(deliveries).toHaveLength(3);
    });
  });

  describe('When findAll', () => {
    it('should return all deliveries', async () => {    
      jest.spyOn(model, 'find').mockReturnValue({
        exec: jest.fn().mockResolvedValue(validDeliveryArray),
      } as any);

      const deliveries = await service.findAll();
      
      expect(deliveries).toHaveLength(3);
    });
  });

  describe('When create', () => {
    it('should create a delivery', async () => {
      jest.spyOn(model, 'create').mockResolvedValueOnce(validDelivery as any);
      const delivery = await service.create(validDelivery);
      expect(delivery.name).toEqual('Valid Name');
    });

    it('should create a delivery', async () => {
      jest.spyOn(model, 'create').mockResolvedValueOnce(validDelivery as any);
      const delivery = await service.create(validDelivery);
      expect(delivery.name).toEqual('Valid Name');
    });

    it('should not create a delivery when there is no name', async () => {
      const invalidDelivery = { ...validDelivery, name: '' };
      jest.spyOn(model, 'create').mockResolvedValueOnce(null);
      await service.create(invalidDelivery).catch(e => {
        expect(e).toBeInstanceOf(InternalServerErrorException);
        expect(e).toMatchObject({ message: 'Problem to create a delivery' });
      });
    });
  });

  describe('When delete', () => {
    it('should delete all deliveries', async () => {
      jest.spyOn(model, 'deleteMany').mockResolvedValueOnce({});
      expect(await service.delete()).toBeUndefined();
    })
  });
});
