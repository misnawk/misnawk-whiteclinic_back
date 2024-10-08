import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { MoviesService } from '../service/movies.service';
import { Movie } from '../entities/Movie.entity';
import { CreateMoviewDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  // @Get()
  // getAll(): Movie[] {
  //   return this.moviesService.getAll();
  // // }
  // @Get(':id')
  // getOne(@Param('id', ParseIntPipe) movieId: number): Movie {
  //   return this.moviesService.getOne(movieId);
  // }

  // @Post()
  // create(@Body() movieData: CreateMoviewDto) {
  //   console.log(movieData);
  //   return this.moviesService.create(movieData);
  // }

  // @Delete('id')
  // remove(@Param('id') movieId: number) {
  //   return this.moviesService.deleteOne(movieId);
  // }

  // @Patch('id')
  // patch(@Param('id') movieId: string, @Body() updateData: UpdateMovieDto) {
  //   return {
  //     updatedMovie: movieId,
  //     ...updateData,
  //   };
  // }
}

//@Patch()는 일부분만 수정
//@put()은 전부 수정
