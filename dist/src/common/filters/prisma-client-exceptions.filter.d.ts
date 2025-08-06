import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Prisma } from '@prisma/client';
export declare class PrismaClientExceptionFilter implements ExceptionFilter<Prisma.PrismaClientKnownRequestError> {
    catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost): void;
}
