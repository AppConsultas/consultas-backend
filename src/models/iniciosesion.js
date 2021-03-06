import { DataTypes, Sequelize } from "Sequelize";
import { estado } from "../constants/index"

export const InicioSesionModel = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  usuario: {
    type: DataTypes.UUID,
    allowNull: false
  },
  nombreUsuario: {
    type: Sequelize.STRING(20),
    allowNull: false,
    field: "nombre_usuario"
  },
  contrasena: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  usuarioCreacion: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "usuario_creacion"
  },
  usuarioActualizacion: {
    type: DataTypes.UUID,
    field: "usuario_actualizacion"
  },
  fecha_creacion: {
    type: Sequelize.DATE,
    allowNull: false
  },
  fecha_actualizacion: {
    type: Sequelize.DATE
  },
  estado: {
    type: Sequelize.ENUM(estado.values),
    defaultValue: estado.ACTIVO
  },
};

export const InicioSesionConfig = {
  freezeTableName: true,
  tableName: "iniciosesion",
  timestamps: true,
  createdAt: "fecha_creacion",
  updatedAt: "fecha_actualizacion"
};
