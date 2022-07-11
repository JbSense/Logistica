import Sequelize from 'sequelize'
import database from '../services/Database.js'

const TipoVeiculo = database.define('tipo_veiculos', {
  id_tipo_veiculo: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
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

export default TipoVeiculo
