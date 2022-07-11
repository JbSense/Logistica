/* eslint-disable no-eval */
import Response from './Response.js'

// Import controllers
import CargaController from '../controllers/CargaController.js'
import CdController from '../controllers/CdController.js'
import CidadeController from '../controllers/CidadeController.js'
import EnderecoController from '../controllers/EnderecoController.js'
import EstadoController from '../controllers/EstadoController.js'
import MotoristaController from '../controllers/MotoristaController.js'
import TipoVeiculoController from '../controllers/TipoVeiculoController.js'
import VeiculoController from '../controllers/VeiculoController.js'

class Controller {
  constructor (controller, method, params) {
    this.controller = controller
    this.method = method
    this.params = JSON.stringify(params)
    this.controllers = {
      CargaController,
      CdController,
      CidadeController,
      EnderecoController,
      EstadoController,
      MotoristaController,
      TipoVeiculoController,
      VeiculoController
    }
  }

  async makeCall (call) {
    try {
      const callResponse = await eval(call)
      const response = new Response(200, callResponse.message)

      if (typeof callResponse.data !== 'undefined') response.setData(callResponse.data)

      return response.buildResponse()
    } catch (error) {
      return new Response(400, error.message).buildResponse()
    }
  }

  async callMethod () {
    if (this.params !== '{}') {
      const call = `this.controllers[this.controller].${this.method}(${this.params})`
      return this.makeCall(call)
    } else {
      const call = `this.controllers[this.controller].${this.method}()`
      return this.makeCall(call)
    }
  }
}

export default Controller
