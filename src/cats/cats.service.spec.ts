import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';

describe('DogsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be All cats', () => {
    expect(service.getCats()).toBe('All cats');
  });
});
