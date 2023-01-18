import { NestFactory } from '@nestjs/core';
import { BookModule } from './module/book.module';
declare const module:any;
async function bootstrap() {
  const app = await NestFactory.create(BookModule, {cors:true});
   app.listen(3000)
  .then(()=>{
    console.log('server connected')
  })
  .catch((error)=>{
    console.log(error)
  })
}
bootstrap();
