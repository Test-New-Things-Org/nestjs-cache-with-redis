import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  async getHello() {
    console.log('Fetching pokemons from external API...');
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = await res.json();
    // await this.cacheManager.set('test', { data: 'This is cached data' });
    // await this.cacheManager.set('name', 'Xevia');
    // // await this.cacheManager.del('cached_item');
    // const cachedItem = await this.cacheManager.get('cached_item');
    // const name = await this.cacheManager.get('name');
    // console.log(cachedItem);
    // console.log(name);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  }
}
