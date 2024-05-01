import { Test, TestingModule } from '@nestjs/testing';
import { LikesService } from './likes.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { mockDeep, MockProxy } from 'jest-mock-extended';

describe('LikesService', () => {
  let likesService: LikesService;
  let prismaService: MockProxy<PrismaService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LikesService,
        {
          provide: PrismaService,
          useValue: mockDeep<PrismaService>(),
        },
      ],
    }).compile();

    likesService = module.get<LikesService>(LikesService);
    prismaService = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(likesService).toBeDefined();
    expect(prismaService).toBeDefined();
  });
});
