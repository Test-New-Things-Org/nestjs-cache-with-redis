import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';

@UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @CacheKey('pokemons')
  // @CacheTTL(10 * 1000) // Cache for 10 seconds
  getHello() {
    return this.appService.getHello();
  }
}
