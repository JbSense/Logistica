import Estado from '../models/Estado.js'

class EstadoController {
  async create (data) {
    await Estado.create({
      nome: data.nome,
      sigla: data.sigla
    })
    return {
      message: 'Estado cadastrado.'
    }
  }

  async getOne (data) {
    const result = await Estado.findOne({ where: { id_estado: data.id_estado } })
    return {
      message: 'Estado encontrado.',
      data: result
    }
  }

  async getAll () {
    const result = await Estado.findAll()
    return {
      message: 'Estados encontrados.',
      data: result
    }
  }

  async delete (data) {
    await Estado.destroy({ where: { id_estado: data.id_estado } })
    return { message: 'Estado deletado.' }
  }
}

export default new EstadoController()
