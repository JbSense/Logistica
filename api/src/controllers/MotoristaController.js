import Motorista from '../models/Motorista.js'

class MotoristaController {
  async create (data) {
    await Motorista.create({
      nome: data.nome,
      cpf: data.cpf
    })
    return {
      message: 'Motorista cadastrado.'
    }
  }

  async getOne (data) {
    const result = await Motorista.findOne({ where: { id_motorista: data.id_motorista } })
    return {
      message: 'Motorista encontrado.',
      data: result
    }
  }

  async getAll () {
    const result = await Motorista.findAll()
    return {
      message: 'Motoristas encontrados.',
      data: result
    }
  }

  async delete (data) {
    await Motorista.destroy({ where: { id_motorista: data.id_motorista } })
    return { message: 'Motorista deletado.' }
  }
}

export default new MotoristaController()
