import { API } from 'src/common/api'
import { IResponse, IResponseAuth } from 'src/interfaces/Response'
import { IUser } from 'src/interfaces/User'

class AuthDataService {
  async login (email: string, password: string): Promise<IResponseAuth<IUser>> {
    let response = await API.post('login', {
      data: {
        email,
        password
      }
    })

    return response
  }

  async logout (): Promise<IResponse<null>> {
    let response = await API.get('logout', {})
    return response
  }
}

export const authDataServices = new AuthDataService()
