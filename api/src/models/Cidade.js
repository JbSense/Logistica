import Sequelize from 'sequelize'
import database from '../services/Database.js'

const Cidade = database.define('cidade', {
  id_cidade: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  id_estado: {
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

export default Cidade
