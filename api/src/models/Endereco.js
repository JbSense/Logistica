import Sequelize from 'sequelize'
import database from '../services/Database.js'

const Endereco = database.define('enderecos', {
  id_endereco: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  id_cidade: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  logradouro: {
    type: Sequelize.STRING,
    allowNull: false
  },
  numero: {
    type: Sequelize.INTEGER,
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

export default Endereco
