import { Controller, Get, Post, HttpCode, Param } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action return all cats';
  }

  // @Get('ab_cd')
  // findBy(): string {
  //   return 'This action return ab_cd';
  // }

  // @Get('ab_cd')
  // @Redirect('https://twitter.com/shigeek_', 301)
  // findBy(): string {
  //   return 'This action return ab_cd';
  // }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Post()
  @HttpCode(204)
  create() {
    return 'This action adds a new cat';
  }
}
