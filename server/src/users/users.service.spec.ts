import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';

describe('UsersService', () => {
  let usersService: UsersService;
  let prismaService: DeepMockProxy<PrismaService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: mockDeep<PrismaService>(),
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    prismaService = module.get(PrismaService);
  });

  it('findAll should return all users', async () => {
    prismaService.user.findMany.mockResolvedValue([
      {
        name: 'Saka',
        id: 1,
        email: 'saka@arsenal.com',
        updatedAt: new Date('2023-01-01'),
        createdAt: new Date('2023-01-01'),
        password: 'jglejger',
      },
      {
        name: 'Jesus',
        id: 2,
        email: 'jesus@arsenal.com',
        updatedAt: new Date('2023-02-01'),
        createdAt: new Date('2023-02-01'),
        password: 'ivcbouobus',
      },
    ]);
    const res = usersService.findAll();
    await expect(res).resolves.toEqual([
      {
        name: 'Saka',
        id: 1,
        email: 'saka@arsenal.com',
        updatedAt: new Date('2023-01-01'),
        createdAt: new Date('2023-01-01'),
        password: 'jglejger',
      },
      {
        name: 'Jesus',
        id: 2,
        email: 'jesus@arsenal.com',
        updatedAt: new Date('2023-02-01'),
        createdAt: new Date('2023-02-01'),
        password: 'ivcbouobus',
      },
    ]);
  });

  it('findOne should return single user', async () => {
    prismaService.user.findUnique.mockResolvedValue({
      name: 'Saka',
      id: 1,
      email: 'saka@arsenal.com',
      updatedAt: new Date('2023-01-01'),
      createdAt: new Date('2023-01-01'),
      password: 'jglejger',
    });
    const res = usersService.findOne(1);
    await expect(res).resolves.toEqual({
      name: 'Saka',
      id: 1,
      email: 'saka@arsenal.com',
      updatedAt: new Date('2023-01-01'),
      createdAt: new Date('2023-01-01'),
      password: 'jglejger',
    });
  });

  it('update password', async () => {
    prismaService.user.update.mockResolvedValue({
      name: 'Saka',
      id: 1,
      email: 'saka@arsenal.com',
      updatedAt: new Date('2023-01-01'),
      createdAt: new Date('2023-01-01'),
      password: 'jglejger',
    });
    const res = usersService.update(1, {
      password: 'alaala',
    });
    await expect(res).resolves.toEqual({
      name: 'Saka',
      id: 1,
      email: 'saka@arsenal.com',
      updatedAt: new Date('2023-01-01'),
      createdAt: new Date('2023-01-01'),
      password: 'jglejger',
    });
  });

  it('delete password', async () => {
    prismaService.user.delete.mockResolvedValue({
      name: 'Saka',
      id: 1,
      email: 'saka@arsenal.com',
      updatedAt: new Date('2023-01-01'),
      createdAt: new Date('2023-01-01'),
      password: 'jglejger',
    });
    const res = usersService.remove(1);
    await expect(res).resolves.toEqual({
      name: 'Saka',
      id: 1,
      email: 'saka@arsenal.com',
      updatedAt: new Date('2023-01-01'),
      createdAt: new Date('2023-01-01'),
      password: 'jglejger',
    });
  });
});
