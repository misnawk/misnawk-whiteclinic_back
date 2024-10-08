import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Engineer } from '../entity/Engineer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EngineerService {
  constructor(
    //이 클래스가 Nest의 의존성 주입 시스템에 의해 관리됨을 나타낸다.
    @InjectRepository(Engineer)
    private EngineerRepository: Repository<Engineer>, //리포지토리 매개변수로 Engineer엔티티를 주입받는다.
  ) {}

  //getAllengineerNames() 함수는 문자열 타입을 리턴한다.
  async getAllEngineerInfo(): Promise<Engineer[]> {
    const engineers = await this.EngineerRepository.find();

    console.log('engineerData :', engineers);

    return engineers;
  }
}
