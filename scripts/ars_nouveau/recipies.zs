//Changing the Default Spellbook Recipie
//craftingTable.addShaped("spell_book", <item:ars_nouveau:novice_spell_book>, [
//    [<item:forbidden_arcanus:obsidian_ingot>, <item:forbidden_arcanus:obsidian_ingot>, <item:forbidden_arcanus:obsidian_ingot>],
//    [<item:botania:mana_diamond>, <item:minecraft:book>, <item:bloodmagic:weakbloodorb>],
//    [<item:forbidden_arcanus:obsidian_ingot>, <item:forbidden_arcanus:obsidian_ingot>, <item:forbidden_arcanus:obsidian_ingot>]]);

//Remove Default Recipe
craftingTable.removeByName("ars_nouveau:novice_spell_book");
craftingTable.removeByName("ars_nouveau:apprentice_spell_book_upgrade");
craftingTable.removeByName("ars_nouveau:archmage_spell_book_upgrade");
craftingTable.removeByName("ars_nouveau:imbuement_chamber");
craftingTable.removeByName("ars_nouveau:arcane_core");
craftingTable.removeByName("ars_nouveau:enchanting_apparatus");
craftingTable.removeByName("ars_nouveau:scribes_table");
craftingTable.removeByName("ars_nouveau:agronomic_sourcelink");
craftingTable.removeByName("ars_nouveau:volcanic_sourcelink");
craftingTable.removeByName("ars_nouveau:alchemical_sourcelink");
craftingTable.removeByName("ars_nouveau:vitalic_sourcelink");
craftingTable.removeByName("ars_nouveau:mycelial_sourcelink");
craftingTable.removeByName("ars_nouveau:annotated_codex");

//New Codex Recipe
craftingTable.addShapeless("annotated_codex", <item:ars_nouveau:annotated_codex>, [<item:ars_nouveau:blank_parchment>, <item:minecraft:leather>, <item:minecraft:nether_star>]);
