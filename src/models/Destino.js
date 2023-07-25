import mongoose from "mongoose";

const destinoSchema = new mongoose.Schema(
  // Define os campos da coleção de destinos - foto, nome e preço
  {
    id: {type: String},
    foto1: {
      type: String,
      required: [true, "A primeira foto é obrigatória."]
    },
    foto2: {
      type: String,
      required: [true, "A segunda foto é obrigatória"]
    },
    nome:{
      type: String,
      required: [true, "Campo nome não preenchido."]
    },
    meta: {
      type: String,
      required: [true, "Campo meta não preenchido."],
      validate: {
        validator: (valor) => {
          return valor.length > 0 && valor.length <= 160;
        },
        message: "O campo meta precisa ter entre 1 e 160 caracteres. Tamanho fornecido: {VALUE.length}"
      }
    },
    textoDescritivo: {
      type: String,
      required: false
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