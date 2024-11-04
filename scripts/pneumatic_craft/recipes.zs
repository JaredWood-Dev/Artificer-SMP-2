import mods.create.MechanicalCrafterManager;

//Recipe Removal
craftingTable.removeByName("pneumaticcraft:pneumatic_helmet");
craftingTable.removeByName("pneumaticcraft:pneumatic_chestplate");
craftingTable.removeByName("pneumaticcraft:pneumatic_leggings");
craftingTable.removeByName("pneumaticcraft:pneumatic_boots");
craftingTable.removeByName("pneumaticcraft:minigun");
craftingTable.removeByName("pneumaticcraft:vortex_cannon");
craftingTable.removeByName("pneumaticcraft:amadron_tablet");
craftingTable.removeByName("pneumaticcraft:reinforced_air_canister");

//Pneumatic Helmet
<recipetype:create:mechanical_crafting>.addRecipe("pneumatic_helmet", <item:pneumaticcraft:pneumatic_helmet>, [
[<item:minecraft:air>, <item:ad_astra:ostrum_ingot>, <item:pneumaticcraft:printed_circuit_board>, <item:ad_astra:ostrum_ingot>, <item:minecraft:air>], 
[<item:ad_astra:ostrum_ingot>, <item:pneumaticcraft:air_canister>, <item:pneumaticcraft:air_canister>, <item:pneumaticcraft:air_canister>, <item:ad_astra:ostrum_ingot>],
[<item:ad_astra:ostrum_ingot>, <item:pneumaticcraft:air_canister>, <item:pneumaticcraft:compressed_iron_helmet>, <item:pneumaticcraft:air_canister>, <item:ad_astra:ostrum_ingot>],
[<item:ad_astra:ostrum_ingot>, <item:pneumaticcraft:air_canister>, <item:minecraft:air>, <item:pneumaticcraft:air_canister>, <item:ad_astra:ostrum_ingot>],
[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>,<item:minecraft:air>, <item:minecraft:air>]
]);

//Pneumatic Chestplate
<recipetype:create:mechanical_crafting>.addRecipe("pneumatic_chestplate", <item:pneumaticcraft:pneumatic_chestplate>, [
[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
[<item:ad_astra:desh_ingot>, <item:pneumaticcraft:air_canister>, <item:pneumaticcraft:printed_circuit_board>, <item:pneumaticcraft:air_canister>, <item:ad_astra:desh_ingot>], 
[<item:ad_astra:desh_ingot>, <item:pneumaticcraft:air_canister>, <item:pneumaticcraft:compressed_iron_chestplate>, <item:pneumaticcraft:air_canister>, <item:ad_astra:desh_ingot>], 
[<item:ad_astra:desh_ingot>, <item:pneumaticcraft:air_canister>, <item:pneumaticcraft:air_canister>, <item:pneumaticcraft:air_canister>, <item:ad_astra:desh_ingot>], 
[<item:minecraft:air>, <item:ad_astra:desh_ingot>, <item:ad_astra:desh_ingot>, <item:ad_astra:desh_ingot>, <item:minecraft:air>]
]);

//Pneumatic Leggings
<recipetype:create:mechanical_crafting>.addRecipe("pneumatic_leggings", <item:pneumaticcraft:pneumatic_leggings>, [
    [<item:minecraft:air>, <item:ad_astra:desh_ingot>, <item:ad_astra:desh_ingot>, <item:ad_astra:desh_ingot>, <item:minecraft:air>],
    [<item:ad_astra:desh_ingot>, <item:pneumaticcraft:air_canister>, <item:pneumaticcraft:printed_circuit_board>, <item:pneumaticcraft:air_canister>, <item:ad_astra:desh_ingot>],
    [<item:ad_astra:desh_ingot>, <item:pneumaticcraft:air_canister>, <item:pneumaticcraft:compressed_iron_leggings>, <item:pneumaticcraft:air_canister>, <item:ad_astra:desh_ingot>],
    [<item:ad_astra:desh_ingot>, <item:pneumaticcraft:ingot_iron_compressed>, <item:pneumaticcraft:air_canister>, <item:pneumaticcraft:ingot_iron_compressed>, <item:ad_astra:desh_ingot>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

//Pneumatic Boots
<recipetype:create:mechanical_crafting>.addRecipe("pneumatic_boots", <item:pneumaticcraft:pneumatic_boots>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:ad_astra:calorite_ingot>, <item:pneumaticcraft:air_canister>, <item:minecraft:air>, <item:pneumaticcraft:air_canister>, <item:ad_astra:calorite_ingot>],
    [<item:ad_astra:calorite_ingot>, <item:pneumaticcraft:air_canister>, <item:pneumaticcraft:compressed_iron_boots>, <item:pneumaticcraft:air_canister>, <item:ad_astra:calorite_ingot>],
    [<item:ad_astra:calorite_ingot>, <item:ad_astra:calorite_block>, <item:minecraft:air>, <item:ad_astra:calorite_block>, <item:ad_astra:calorite_ingot>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

//MiniGun
<recipetype:create:mechanical_crafting>.addRecipe("minigun", <item:pneumaticcraft:minigun>, [
    [<item:pneumaticcraft:air_canister>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:gold_ingot>, <item:pneumaticcraft:cannon_barrel>, <item:ad_astra:desh_ingot>, <item:ad_astra:desh_ingot>, <item:ad_astra:desh_ingot>],
    [<item:minecraft:lever>, <item:ad_astra:desh_ingot>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

//Vortex Cannon
<recipetype:create:mechanical_crafting>.addRecipe("vortex_cannon", <item:pneumaticcraft:vortex_cannon>, [
    [<item:ad_astra:desh_ingot>, <item:minecraft:yellow_dye>, <item:ad_astra:desh_ingot>],
    [<item:pneumaticcraft:air_canister>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:ad_astra:desh_ingot>, <item:minecraft:lever>, <item:ad_astra:desh_ingot>]
]);

//Amadron Tablet
<recipetype:create:mechanical_crafting>.addRecipe("amadron_tablet", <item:pneumaticcraft:amadron_tablet>, [
    [<item:ad_astra:desh_ingot>, <item:pneumaticcraft:plastic>, <item:ad_astra:desh_ingot>],
    [<item:pneumaticcraft:plastic>, <item:pneumaticcraft:air_canister>, <item:pneumaticcraft:plastic>],
    [<item:ad_astra:desh_ingot>, <item:pneumaticcraft:gps_tool>, <item:ad_astra:desh_ingot>]
]);

//Reinforced Air Canister
<recipetype:create:mechanical_crafting>.addRecipe("reinforced_air_canister", <item:pneumaticcraft:reinforced_air_canister>, [
    [<item:minecraft:air>, <item:pneumaticcraft:advanced_pressure_tube>, <item:minecraft:air>],
    [<item:ad_astra:desh_ingot>, <item:pneumaticcraft:air_canister>, <item:ad_astra:desh_ingot>],
    [<item:ad_astra:desh_ingot>, <item:ad_astra:desh_ingot>, <item:ad_astra:desh_ingot>]
]);