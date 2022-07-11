import Cd from '../models/Cd.js'

class CdController {
  async create (data) {
    await Cd.create({
      nome: data.nome,
      cnpj: data.cnpj,
      id_endereco: data.id_endereco
    })
    return {
      message: 'Cd cadastrado.'
    }
  }

  async getOne (data) {
    const result = await Cd.findOne({ where: { id_cd: data.id_cd } })
    return {
      message: 'Cd encontrado.',
      data: result
    }
  }

  async getAll () {
    const result = await Cd.findAll()
    return {
      message: 'Cds encontrados.',
      data: result
    }
  }

  async delete (data) {
    await Cd.destroy({ where: { id_cd: data.id_cd } })
    return { message: 'Cd deletada.' }
  }
}

export default new CdController()
