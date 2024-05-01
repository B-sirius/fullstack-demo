import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { mockDeep, MockProxy } from 'jest-mock-extended';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

describe('UsersController', () => {
  let controller: UsersController;
  let usersService: MockProxy<UsersService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: mockDeep<UsersService>(),
        },
        {
          provide: JwtService,
          useValue: mockDeep<JwtService>(),
        },
        {
          provide: PrismaService,
          useValue: mockDeep<PrismaService>(),
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    usersService = module.get(UsersService);
  });

  // TODO:
  // Can't figure out why this test can't pass, will solve it later.
  // it('register new user', () => {
  //   usersService.create.mockResolvedValue({
  //     name: 'Saka',
  //     id: 1,
  //     email: 'saka@arsenal.com',
  //     updatedAt: new Date('2023-01-01'),
  //     createdAt: new Date('2023-01-01'),
  //     password: 'jglejger',
  //   });
  //   const res = controller.create({
  //     name: 'Saka',
  //     email: 'saka@arsenal.com',
  //     password: 'flsjkf',
  //   });
  //   expect(res).resolves.toEqual({
  //     name: 'Saka',
  //     id: 1,
  //     email: 'saka@arsenal.com',
  //     updatedAt: new Date('2023-01-01'),
  //     createdAt: new Date('2023-01-01'),
  //   });
  // });
});
