import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  // 健康检查接口，不包含业务数据，避免编造参数
  @Get('health')
  health() {
    return { status: 'ok' }
  }
}