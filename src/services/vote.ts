import { API_URL, authService } from './auth'

export interface VoteResult {
  id: number
  name: string
  slug: string
  votes: number
  percentage: number
}

export interface ResultsResponse {
  total_votes: number
  results: VoteResult[]
}

export interface VoteResponse {
  success: boolean
  message: string
  vote?: {
    candidate: string
    voted_at: string
  }
}

export const voteService = {
  async getResults(): Promise<ResultsResponse> {
    const response = await fetch(`${API_URL}/results/`)

    if (!response.ok) {
      throw new Error('Failed to fetch results')
    }

    return response.json()
  },

  async vote(candidateSlug: string): Promise<VoteResponse> {
    const token = authService.getToken()

    if (!token) {
      throw new Error('User not authenticated')
    }

    const response = await fetch(`${API_URL}/vote/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({ candidate_slug: candidateSlug }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      const errorMessage = errorData.detail || 'Vote failed'
      const error = new Error(errorMessage)
      ;(error as any).status = response.status
      throw error
    }

    return response.json()
  },
}
