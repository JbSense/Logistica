import Cidade from '../models/Cidade.js'

class CidadeController {
  async create (data) {
    await Cidade.create({
      nome: data.nome,
      id_estado: data.id_estado
    })
    return {
      message: 'Cidade cadastrada.'
    }
  }

  async getOne (data) {
    const result = await Cidade.findOne({ where: { id_estado: data.id_estado } })
    return {
      message: 'Cidade encontrada.',
      data: result
    }
  }

  async getAll () {
    const result = await Cidade.findAll()
    return {
      message: 'Cidades encontradas.',
      data: result
    }
  }

  async delete (data) {
    await Cidade.destroy({ where: { id_cidade: data.id_cidade } })
    return { message: 'Cidade deletada.' }
  }
}

export default new CidadeController()
