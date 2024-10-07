import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly CatsService: CatsService) {}
  @Get()
  getCats(): string {
    return this.CatsService.getCats();
  }
}
