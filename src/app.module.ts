import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { DogsController } from './dogs/dogs.controller';
import { DogsService } from './dogs/dogs.service';
import { DogsModule } from './dogs/dogs.module';
import { CatsService } from './cats/cats.service';
import { PlantsModule } from './plants/plants.module';
import { PlantsService } from './plants/plants.service';
import { PlantsController } from './plants/plants.controller';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [CatsModule, DogsModule, PlantsModule],
  controllers: [
    AppController,
    CatsController,
    DogsController,
    PlantsController,
  ],
  providers: [AppService, DogsService, CatsService, PlantsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}
