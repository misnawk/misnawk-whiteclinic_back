import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from '../entities/Movie.entity';
import { CreateMoviewDto } from '../dto/create-movie.dto';

@Injectable()
export class MoviesService {
  // private movies: Movie[] = [];

  // getAll(): Movie[] {
  //   return this.movies;
  // }

  // getOne(id: number): Movie {
  //   const movie = this.movies.find((movie) => movie.id === id);
  //   if (!movie) {
  //     throw new NotFoundException(`movie with ID ${id} not found`);
  //   }
  //   return movie;
  // }

  // deleteOne(id: number) {
  //   this.movies = this.movies.filter((movie) => movie.id !== id);
  // }

  // create(movieData: CreateMoviewDto) {
  //   this.movies.push({
  //     id: this.movies.length + 1,
  //     ...movieData,
  //   });
  // }

  // update(id: number, updateData) {
  //   const movie = this.getOne(id); //getOne함수 사용해서 매개변수로 받은 id에 해당하는 정보 가져오기
  //   this.deleteOne(id); //
  //   this.movies.push({ ...movie, ...updateData });
  //   //기존의 movie 데이터를 객체에 복사후 (movie)
  //   //업데이트 할요소들만 바꿔주었다.(...updateData)
  // }
}
