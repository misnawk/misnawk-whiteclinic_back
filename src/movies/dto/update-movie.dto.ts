import { IsNumber, IsString } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';
import { CreateMoviewDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMoviewDto) {
    
}
