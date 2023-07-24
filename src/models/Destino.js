import mongoose from "mongoose";

const destinoSchema = new mongoose.Schema(
  // Define os campos da coleção de destinos - foto, nome e preço
  {
    id: {type: String},
    foto: {
      type: String,
      required: [true, "Campo foto não preenchido."]
    },
    nome:{
      type: String,
      required: [true, "Campo nome não preenchido."]
    },
    preco: {
      type: Number,
      required: [true, "Campo preço não preenchido."],
      validate: {
        validator: (valor) => {
          return valor >= 0;
        },
        message: "O preço não pode ser menor do que zero. Valor fornecido: {VALUE}"
      }
    }
  },
  // Define as opções do Schema
  {
    // Gera por padrão uma versão para cada atualização do documento
    versionKey: false,
    // Cria automaticamente as propriedades createdAt e updatedAt
    timestamps: true
  }
);

const destinos = mongoose.model("destinos", destinoSchema);

export default destinos;