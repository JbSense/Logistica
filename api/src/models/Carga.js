import Sequelize from 'sequelize'
import database from '../services/Database.js'

const Carga = database.define('cargas', {
  id_carga: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  peso: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  origem__id_cd: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  destino__id_endereco: {
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

export default Carga
