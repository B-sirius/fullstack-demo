import { Test, TestingModule } from '@nestjs/testing';
import { VotesService } from './votes.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { mockDeep, MockProxy } from 'jest-mock-extended';

describe('VotesService', () => {
  let votesService: VotesService;
  let prismaService: MockProxy<PrismaService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VotesService,
        {
          provide: PrismaService,
          useValue: mockDeep<PrismaService>(),
        },
      ],
    }).compile();

    votesService = module.get<VotesService>(VotesService);
    prismaService = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(votesService).toBeDefined();
  });
});
