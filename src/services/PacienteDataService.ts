import { API } from 'src/common/api'
import { IPaciente } from 'src/interfaces/Paciente'
import { IResponse } from 'src/interfaces/Response'

class PacienteDataService {
  async getNutriologas (): Promise<IResponse<IPaciente[]>> {
    let response = await API.get('show/clientes', {})
    return response.data
  }

  async saveNutricionista (data: IPaciente): Promise<IResponse<IPaciente>> {
    let response = await API.post('create/user', {
      data: data
    })
    return response.data
  }
}

export const pacienteDataServices = new PacienteDataService()
