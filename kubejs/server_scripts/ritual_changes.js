// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.lowPriorityData(event => {
    //Novice Spell Book
    event.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/novice_spell_book', {
        "additional_requirements": {
            "forge_tier": 1
        },
        "essences": {
            "aureal": 1000,
            "blood": 100,
            "experience": 0,
            "souls": 1
        },
        "inputs": [
            {
                "amount": 4,
                "ingredient": {
                    "item": "forbidden_arcanus:obsidian_ingot"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "botania:mana_diamond"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "bloodmagic:weakbloodorb"
                }
            }
        ],
        "main_ingredient": {
            "item": "minecraft:book"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "ars_nouveau:novice_spell_book"
            }
        }
    });
    
    //Apprentice Spell Book
    event.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/middle_spell_book', {
        "additional_requirements": {
            "forge_tier": 3
        },
        "essences": {
            "aureal": 5000,
            "blood": 2000,
            "experience": 0,
            "souls": 1
        },
        "inputs": [
            {
                "amount": 2,
                "ingredient": {
                    "item": "minecraft:diamond"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "minecraft:blaze_rod"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "minecraft:obsidian"
                }
            }
        ],
        "main_ingredient": {
            "item": "ars_nouveau:novice_spell_book"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "ars_nouveau:apprentice_spell_book"
            }
        }
    });

    //Archmage Spell Book
    event.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/archmage_spell_book', {
        "additional_requirements": {
            "forge_tier": 4
        },
        "essences": {
            "aureal": 8000,
            "blood": 5000,
            "experience": 0,
            "souls": 1
        },
        "inputs": [
            {
                "amount": 1,
                "ingredient": {
                    "item": "minecraft:nether_star"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "minecraft:totem_of_undying"
                }
            },
            {
                "amount": 3,
                "ingredient": {
                    "item": "minecraft:ender_pearl"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "minecraft:dragon_breath"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "ars_nouveau:wilden_tribute"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "minecraft:sculk_catalyst"
                }
            }
        ],
        "main_ingredient": {
            "item": "ars_nouveau:apprentice_spell_book"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "ars_nouveau:archmage_spell_book"
            }
        }
    });

    //Imbuement Chamber
    event.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/imbuement_chamber', {
        "additional_requirements": {
            "forge_tier": 1
        },
        "essences": {
            "aureal": 500,
            "blood": 1000,
            "experience": 0,
            "souls": 1
        },
        "inputs": [
            {
                "amount": 2,
                "ingredient": {
                    "item": "minecraft:gold_ingot"
                }
            },
            {
                "amount": 6,
                "ingredient": {
                    "item": "ars_nouveau:archwood_planks"
                }
            },
        ],
        "main_ingredient": {
            "item": "minecraft:gold_block"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "ars_nouveau:imbuement_chamber"
            }
        }
    });

    //Arcane Core
    event.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/arcane_core', {
        "additional_requirements": {
            "forge_tier": 1
        },
        "essences": {
            "aureal": 500,
            "blood": 2000,
            "experience": 0,
            "souls": 1
        },
        "inputs": [
            {
                "amount": 2,
                "ingredient": {
                    "item": "minecraft:gold_ingot"
                }
            },
            {
                "amount": 6,
                "ingredient": {
                    "item": "ars_nouveau:sourcestone"
                }
            },
        ],
        "main_ingredient": {
            "item": "ars_nouveau:source_gem_block"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "ars_nouveau:arcane_core"
            }
        }
    });

    //Enchanting Apparatus
    event.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/enchanting_apparatus', {
        "additional_requirements": {
            "forge_tier": 1
        },
        "essences": {
            "aureal": 1000,
            "blood": 2000,
            "experience": 0,
            "souls": 1
        },
        "inputs": [
            {
                "amount": 2,
                "ingredient": {
                    "item": "minecraft:gold_ingot"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "item": "ars_nouveau:sourcestone"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "ars_nouveau:source_gem"
                }
            }
        ],
        "main_ingredient": {
            "item": "minecraft:enchanting_table"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "ars_nouveau:enchanting_apparatus"
            }
        }
    });

    //Scribes Table
    event.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/scribes_table', {
        "additional_requirements": {
            "forge_tier": 1
        },
        "essences": {
            "aureal": 1000,
            "blood": 2000,
            "experience": 0,
            "souls": 1
        },
        "inputs": [
            {
                "amount": 2,
                "ingredient": {
                    "item": "minecraft:gold_ingot"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "item": "ars_nouveau:archwood_planks"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "ars_nouveau:source_gem"
                }
            }
        ],
        "main_ingredient": {
            "item": "minecraft:enchanting_table"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "ars_nouveau:scribes_table"
            }
        }
    });

    //The Source Links
    //Argromic
    event.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/agronomic_source_link', {
        "additional_requirements": {
            "forge_tier": 1
        },
        "essences": {
            "aureal": 500,
            "blood": 100,
            "experience": 0,
            "souls": 1
        },
        "inputs": [
            {
                "amount": 2,
                "ingredient": {
                    "item": "minecraft:gold_ingot"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "ars_nouveau:source_gem"
                }
            }
        ],
        "main_ingredient": {
            "item": "minecraft:wheat"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "ars_nouveau:agronomic_sourcelink"
            }
        }
    });

    //Volcanic
    event.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/volcanic_source_link', {
        "additional_requirements": {
            "forge_tier": 1
        },
        "essences": {
            "aureal": 500,
            "blood": 100,
            "experience": 0,
            "souls": 1
        },
        "inputs": [
            {
                "amount": 2,
                "ingredient": {
                    "item": "minecraft:gold_ingot"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "ars_nouveau:source_gem"
                }
            }
        ],
        "main_ingredient": {
            "item": "minecraft:lava_bucket"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "ars_nouveau:volcanic_sourcelink"
            }
        }
    });

    //Alchemical
    event.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/alchemical_source_link', {
        "additional_requirements": {
            "forge_tier": 1
        },
        "essences": {
            "aureal": 500,
            "blood": 100,
            "experience": 0,
            "souls": 1
        },
        "inputs": [
            {
                "amount": 2,
                "ingredient": {
                    "item": "minecraft:gold_ingot"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "ars_nouveau:source_gem"
                }
            }
        ],
        "main_ingredient": {
            "item": "minecraft:brewing_stand"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "ars_nouveau:alchemical_sourcelink"
            }
        }
    });

    //Vitalic
    event.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/vitalic_source_link', {
        "additional_requirements": {
            "forge_tier": 1
        },
        "essences": {
            "aureal": 500,
            "blood": 100,
            "experience": 0,
            "souls": 1
        },
        "inputs": [
            {
                "amount": 2,
                "ingredient": {
                    "item": "minecraft:gold_ingot"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "ars_nouveau:source_gem"
                }
            }
        ],
        "main_ingredient": {
            "item": "minecraft:glistering_melon_slice"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "ars_nouveau:vitalic_sourcelink"
            }
        }
    });

    //Mycelial
    event.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/mycelial_source_link', {
        "additional_requirements": {
            "forge_tier": 1
        },
        "essences": {
            "aureal": 500,
            "blood": 100,
            "experience": 0,
            "souls": 1
        },
        "inputs": [
            {
                "amount": 2,
                "ingredient": {
                    "item": "minecraft:gold_ingot"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "ars_nouveau:source_gem"
                }
            }
        ],
        "main_ingredient": {
            "item": "minecraft:mushroom_stew"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "ars_nouveau:mycelial_sourcelink"
            }
        }
    });

    //New Recipes for Artifacts/Relics
    //Roller Skates
    
    event.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/roller_skates', {
        "additional_requirements": {
            "forge_tier": 3
        },
        "essences": {
            "aureal": 2000,
            "blood": 100,
            "experience": 0,
            "souls": 1
        },
        "inputs": [
            {
                "amount": 2,
                "ingredient": {
                    "item": "minecraft:gold_ingot"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "minecraft:iron_ingot"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "pneumaticcraft:lubricant_bucket"
                }
            }
        ],
        "main_ingredient": {
            "item": "minecraft:leather_boots"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "relics:roller_skates"
            }
        }
    });
    

    
    //Shadow Glaive
    event.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/shadow_glaive', {
        "additional_requirements": {
            "forge_tier": 3
        },
        "essences": {
            "aureal": 2000,
            "blood": 100,
            "experience": 0,
            "souls": 1
        },
        "inputs": [
            {
                "amount": 2,
                "ingredient": {
                    "item": "minecraft:purpur_block"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "item": "minecraft:dragon_breath"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "forbidden_arcanus:dark_matter"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "minecraft:nether_star"
                }
            }
        ],
        "main_ingredient": {
            "item": "minecraft:ender_eye"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "relics:shadow_glaive"
            }
        }
    });
    

    
    //Running Shoes
    event.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/running_shoes', {
        "additional_requirements": {
            "forge_tier": 3
        },
        "essences": {
            "aureal": 2000,
            "blood": 100,
            "experience": 0,
            "souls": 1
        },
        "inputs": [
            {
                "amount": 2,
                "ingredient": {
                    "item": "minecraft:nether_star"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "item": "minecraft:dragon_breath"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "minecraft:red_dye"
                }
            }
        ],
        "main_ingredient": {
            "item": "minecraft:leather_boots"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "artifacts:running_shoes"
            }
        }
    });
    

    
    //Pocket Piston
    event.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/pocket_piston', {
        "additional_requirements": {
            "forge_tier": 3
        },
        "essences": {
            "aureal": 2000,
            "blood": 100,
            "experience": 0,
            "souls": 1
        },
        "inputs": [
            {
                "amount": 2,
                "ingredient": {
                    "item": "minecraft:diamond"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "item": "minecraft:slime_ball"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "minecraft:redstone_block"
                }
            }
        ],
        "main_ingredient": {
            "item": "minecraft:piston"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "artifacts:pocket_piston"
            }
        }
    });
    
});

