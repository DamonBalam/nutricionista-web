import { IActividadFisica } from './ActividadFisica'
import { IObjetivo } from './Objetivo'

export interface ISuscripcion {
  id?: number | null
  empieza: string | null
  termina: string | null
}
export interface IPaciente {
  id?: number | null
  nombre: string
  apellido_paterno: string
  apellido_materno: string
  sexo: string
  email: string
  telefono: number | null
  fecha_nacimiento: string
  alergias: string[]
  condiciones_medicas: string[]
  actividad_fisica_id: number | null
  actividad_fisica?: IActividadFisica
  objetivo_id: number | null
  objetivo?: IObjetivo
  cita?: { fecha: string }
  consultorio_id: number | null
  nutricionista_id: number | null
  suscripcion?: ISuscripcion | null
}

export class Paciente implements IPaciente {
  id?: number | null
  nombre: string
  apellido_paterno: string
  apellido_materno: string
  sexo: string
  email: string
  telefono: number | null
  fecha_nacimiento: string
  alergias: string[]
  condiciones_medicas: string[]
  actividad_fisica_id: number | null
  objetivo_id: number | null
  consultorio_id: number | null
  nutricionista_id: number | null
  suscripcion?: ISuscripcion | null

  constructor (data: Paciente) {
    ;(this.id = data.id || null),
      (this.nombre = data.nombre || ''),
      (this.apellido_paterno = data.apellido_paterno || ''),
      (this.apellido_materno = data.apellido_materno || ''),
      (this.sexo = data.sexo || ''),
      (this.email = data.email || ''),
      (this.telefono = data.telefono || null),
      (this.fecha_nacimiento = data.fecha_nacimiento || ''),
      (this.alergias = data.alergias || []),
      (this.condiciones_medicas = data.condiciones_medicas || []),
      (this.actividad_fisica_id = data.actividad_fisica_id || null),
      (this.objetivo_id = data.objetivo_id || null),
      (this.consultorio_id = data.consultorio_id || null),
      (this.nutricionista_id = data.nutricionista_id || null),
      (this.suscripcion = data.suscripcion || null)
  }
}
