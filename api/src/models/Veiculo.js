import Sequelize from 'sequelize'
import database from '../services/Database.js'

const Veiculo = database.define('veiculos', {
  id_veiculo: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  id_tipo_veiculo: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  id_motorista: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  placa: {
    type: Sequelize.STRING,
    allowNull: false
  },
  created_at: {
    type: Sequelize.DATE
  },
  updated_at: {
    type: Sequelize.DATE
  }
}, {
  underscored: true
})

export default Veiculo
