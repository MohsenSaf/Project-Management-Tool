import { Module } from "@nestjs/common"
import { ProjectMemberService } from "./project-member.service"
import { ProjectMemberController } from "./project-member.controller"

@Module({
  providers: [ProjectMemberService],
  controllers: [ProjectMemberController],
  exports: [ProjectMemberService],
})
export class ProjectMemberModule {}
