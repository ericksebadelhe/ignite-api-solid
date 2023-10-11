import { CheckIn } from '@prisma/client'
import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface GetUseMetricsUseCaseRequest {
  userId: string
}

interface GetUseMetricsUseCaseResponse {
  checkInsCount: number
}

export class GetUseMetricsUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
  }: GetUseMetricsUseCaseRequest): Promise<GetUseMetricsUseCaseResponse> {
    const checkInsCount = await this.checkInsRepository.countByUserid(userId)

    return { checkInsCount }
  }
}
