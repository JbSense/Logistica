import Endereco from '../models/Endereco.js'

class EnderecoController {
  async create (data) {
    await Endereco.create({
      id_cidade: data.id_cidade,
      logradouro: data.logradouro,
      numero: data.numero
    })
    return {
      message: 'Endereço cadastrado.'
    }
  }

  async getOne (data) {
    const result = await Endereco.findOne({ where: { id_endereco: data.id_endereco } })
    return {
      message: 'Endereço encontrado.',
      data: result
    }
  }

  async getAll () {
    const result = await Endereco.findAll()
    return {
      message: 'Endereços encontrados.',
      data: result
    }
  }

  async delete (data) {
    await Endereco.destroy({ where: { id_endereco: data.id_endereco } })
    return { message: 'Endereço deletada.' }
  }
}

export default new EnderecoController()
