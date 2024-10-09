import { Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly CatsService: CatsService) {}

  @Post()
  create(): string {
    return 'this action adds a new cat';
  }

  @Get()
  getCats(): string {
    return this.CatsService.getCats();
  }
}
