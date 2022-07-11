import TipoVeiculo from '../models/TipoVeiculo.js'

class TipoVeiculoController {
  async create (data) {
    await TipoVeiculo.create({
      nome: data.nome
    })
    return {
      message: 'Tipo veiculo cadastrado.'
    }
  }

  async getOne (data) {
    const result = await TipoVeiculo.findOne({ where: { id_tipo_veiculo: data.id_tipo_veiculo } })
    return {
      message: 'Tipo veiculo encontrado.',
      data: result
    }
  }

  async getAll () {
    const result = await TipoVeiculo.findAll()
    return {
      message: 'Tipo veiculos encontrados.',
      data: result
    }
  }

  async delete (data) {
    await TipoVeiculo.destroy({ where: { id_tipo_veiculo: data.id_tipo_veiculo } })
    return { message: 'Tipo veiculo deletado.' }
  }
}

export default new TipoVeiculoController()
