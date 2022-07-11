import Veiculo from '../models/Veiculo.js'

class VeiculoController {
  async create (data) {
    await Veiculo.create({
      id_tipo_veiculo: data.id_tipo_veiculo,
      id_motorista: data.id_motorista,
      placa: data.placa
    })
    return {
      message: 'Veiculo cadastrado.'
    }
  }

  async getOne (data) {
    const result = await Veiculo.findOne({ where: { id__veiculo: data.id__veiculo } })
    return {
      message: 'Veiculo encontrado.',
      data: result
    }
  }

  async getAll () {
    const result = await Veiculo.findAll()
    return {
      message: 'Veiculos encontrados.',
      data: result
    }
  }

  async delete (data) {
    await Veiculo.destroy({ where: { id__veiculo: data.id__veiculo } })
    return { message: 'Veiculo deletado.' }
  }
}

export default new VeiculoController()
