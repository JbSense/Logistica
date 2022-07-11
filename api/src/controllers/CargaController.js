import Carga from '../models/Carga.js'

class CargaController {
  async create (data) {
    await Carga.create({
      peso: data.peso,
      origem__id_cd: data.origem__id_cd,
      destino__id_endereco: data.destino__id_endereco
    })
    return {
      message: 'Carga cadastrado.'
    }
  }

  async getOne (data) {
    const result = await Carga.findOne({ where: { id_carga: data.id_carga } })
    return {
      message: 'Carga encontrado.',
      data: result
    }
  }

  async getAll () {
    const result = await Carga.findAll()
    return {
      message: 'Cargas encontrados.',
      data: result
    }
  }

  async delete (data) {
    await Carga.destroy({ where: { id_carga: data.id_carga } })
    return { message: 'Carga deletado.' }
  }
}

export default new CargaController()
