import mongoose from "mongoose";

const depoimentoSchema = new mongoose.Schema(
  // Define os campos da coleção de depoimentos - foto, nome e depoimento
  {
    id: { type: String },
    depoimento: {
      type: String,
      required: [true, "Campo depoimento não preenchido."]
    },
    foto: { 
      type: String,
      required: [true, "Campo foto não preenchido."]
    },
    nome: { 
      type: String, 
      required: [true, "Campo nome não preenchido."]
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

const depoimentos = mongoose.model("depoimentos", depoimentoSchema);

export default depoimentos;