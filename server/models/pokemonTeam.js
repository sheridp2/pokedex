import mongoose from "mongoose";

const pokemonTeamSchema = mongoose.Schema({
  name: String,
  creator: String,
  team: [String],
});

const PokemonTeam = mongoose.model("PokemonTeam", pokemonTeamSchema);

export default PokemonTeam;
