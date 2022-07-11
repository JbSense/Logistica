import Sequelize from 'sequelize'
import database from '../services/Database.js'

const Cd = database.define('cds', {
  id_cd: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cnpj: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  id_endereco: {
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

export default Cd
