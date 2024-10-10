import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { DogsController } from './dogs/dogs.controller';
import { DogsService } from './dogs/dogs.service';
import { DogsModule } from './dogs/dogs.module';
import { CatsService } from './cats/cats.service';
import { PlantsModule } from './plants/plants.module';
import { PlantsController } from './plants/plants.controller';

@Module({
  imports: [CatsModule, DogsModule, PlantsModule],
  controllers: [
    AppController,
    CatsController,
    DogsController,
    PlantsController,
  ],
  providers: [AppService, DogsService, CatsService],
})
export class AppModule {}
