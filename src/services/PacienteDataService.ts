import { API } from 'src/common/api'
import { IPaciente } from 'src/interfaces/Paciente'
import { IResponse } from 'src/interfaces/Response'

class PacienteDataService {
  async getAll (): Promise<IResponse<IPaciente[]>> {
    let response = await API.get('show/clientes', {})
    return response.data
  }

  async getById (id: string): Promise<IResponse<{user:IPaciente}>> {
    let response = await API.get(`show/user/${id}`, {})
    return response.data
  }

  async savePaciente (data: IPaciente): Promise<IResponse<IPaciente>> {
    let response = await API.post('create/user', {
      data: data
    })
    return response.data
  }

  async updatePaciente (
    id: number,
    data: IPaciente
  ): Promise<IResponse<IPaciente>> {
    let response = await API.post(`update/user/${id}`, {
      data: data
    })
    return response.data
  }
}

export const pacienteDataServices = new PacienteDataService()
