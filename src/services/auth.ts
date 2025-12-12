export const API_URL = '/api'

export interface LoginResponse {
  token: string
  user: {
    id: number
    username: string
    email: string
  }
}

export interface UserProfile {
  username: string
  email: string
  dni?: string
}

export const authService = {
  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await fetch(`${API_URL}/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      throw new Error('Login failed')
    }

    return response.json()
  },

  async register(
    username: string,
    email: string,
    password: string,
    dni: string,
  ): Promise<UserProfile> {
    const response = await fetch(`${API_URL}/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password, dni }),
    })

    if (!response.ok) {
      throw new Error('Registration failed')
    }

    return response.json()
  },

  async getProfile(token: string): Promise<UserProfile> {
    const response = await fetch(`${API_URL}/profile/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })

    if (!response.ok) {
      const error = new Error('Failed to fetch profile')
      ;(error as any).status = response.status
      throw error
    }

    return response.json()
  },

  setToken(token: string) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('auth_token', token)
    }
    document.cookie = `auth_token=${token}; path=/; max-age=86400; SameSite=Strict`
  },

  getToken(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('auth_token')
    }
    return null
  },

  logout() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('auth_token')
    }
    document.cookie = 'auth_token=; path=/; max-age=0'
  },
}
