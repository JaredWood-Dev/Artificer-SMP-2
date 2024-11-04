//Remove the inital recipe
craftingTable.removeByName("naturescompass:natures_compass");

//Add recipe
craftingTable.addShaped("natures_compass", <item:naturescompass:naturescompass>, [
    [<item:minecraft:oak_sapling>, <item:botania:manasteel_ingot>, <item:minecraft:oak_sapling>],
    [<item:botania:manasteel_ingot>, <item:minecraft:redstone>, <item:botania:manasteel_ingot>],
    [<item:minecraft:oak_sapling>, <item:botania:manasteel_ingot>, <item:minecraft:oak_sapling>]]);