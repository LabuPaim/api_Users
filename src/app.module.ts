import { Module } from "@nestjs/common";
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://admin:admin@api-users.3wtxchw.mongodb.net/?retryWrites=true&w=majority'),
        UsersModule],
    controllers: [],
    providers: [],
})

export class AppModule {}