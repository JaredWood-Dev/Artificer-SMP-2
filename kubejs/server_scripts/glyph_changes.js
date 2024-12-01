ServerEvents.recipes(event => 
    {
        //Bounce
        event.remove({ id: "ars_nouveau:glyph_bounce", type: "ars_nouveau:glyph" });
        event.remove({ id: "ars_nouveau:glyph_bounce", type: "ars_nouveau:glyph" });
        event.custom(
            {
                "type": "ars_nouveau:glyph",
                "count": 1,
                "exp": 27,
                "inputItems": [
                    {
                        "item": {
                            "item": "ars_nouveau:abjuration_essence"
                        }
                    },
                    {
                        "item": {
                            "item": "aether:blue_aercloud"
                        }
                    },
                    {
                        "item": {
                            "item": "minecraft:slime_ball"
                        }
                    },
                    {
                        "item": {
                            "item": "minecraft:slime_ball"
                        }
                    }
                ],
                "output": "ars_nouveau:glyph_bounce"
            }
        ).id("ars_nouveau:glyph_bounce");
        
        //AOE
        event.remove({ id: "ars_nouveau:glyph_aoe", type: "ars_nouveau:glyph" });
        event.remove({ id: "ars_nouveau:glyph_aoe", type: "ars_nouveau:glyph" });
        event.custom(
                {
                    "type": "ars_nouveau:glyph",
                    "count": 1,
                    "exp": 55,
                    "inputItems": [
                        {
                            "item": {
                                "item": "minecraft:firework_star"
                            }
                        },
                        {
                            "item": {
                                "item": "forbidden_arcanus:mundabitur_dust"
                            }
                        },
                        {
                            "item": {
                                "item": "minecraft:gunpowder"
                            }
                        }
                    ],
                    "output": "ars_nouveau:glyph_aoe"
                }
            ).id("ars_nouveau:glyph_aoe");
        
        //Amplify
        event.remove({ id: "ars_nouveau:glyph_amplify", type: "ars_nouveau:glyph" });
        event.remove({ id: "ars_nouveau:glyph_amplify", type: "ars_nouveau:glyph" });
        event.custom(
                {
                    "type": "ars_nouveau:glyph",
                    "count": 1,
                    "exp": 27,
                    "inputItems": [
                        {
                            "item": {
                                "item": "aether:zanite_pickaxe"
                            }
                        },
                        {
                            "item": {
                                "item": "twilightforest:ironwood_pickaxe"
                            }
                        },
                        {
                            "item": {
                                "item": "botania:manasteel_pick"
                            }
                        }
                    ],
                    "output": "ars_nouveau:glyph_amplify"
                }
            ).id("ars_nouveau:glyph_amplify");

        //Extract
        event.remove({ id: "ars_nouveau:glyph_extract", type: "ars_nouveau:glyph" });
        event.remove({ id: "ars_nouveau:glyph_extract", type: "ars_nouveau:glyph" });
        event.custom(
                {
                    "type": "ars_nouveau:glyph",
                    "count": 1,
                    "exp": 55,
                    "inputItems": [
                        {
                            "item": {
                                "item": "minecraft:emerald"
                            }
                        },
                        {
                            "item": {
                                "item": "forbidden_arcanus:ferrognetic_mixture"
                            }
                        }
                    ],
                    "output": "ars_nouveau:glyph_extract"
                }
            ).id("ars_nouveau:glyph_extract");

        //Luck
        event.remove({ id: "ars_nouveau:glyph_fortune", type: "ars_nouveau:glyph" });
        event.remove({ id: "ars_nouveau:glyph_fortune", type: "ars_nouveau:glyph" });
        event.custom(
                {
                    "type": "ars_nouveau:glyph",
                    "count": 1,
                    "exp": 55,
                    "inputItems": [
                        {
                            "item": {
                                "item": "minecraft:rabbit_foot"
                            }
                        },
                        {
                            "item": {
                                "item": "create_enchantment_industry:hyper_experience_bottle"
                            }
                        }
                    ],
                    "output": "ars_nouveau:glyph_fortune"
                }
            ).id("ars_nouveau:glyph_fortune");

        //Blink
        event.remove({ id: "ars_nouveau:glyph_blink", type: "ars_nouveau:glyph" });
        event.remove({ id: "ars_nouveau:glyph_blink", type: "ars_nouveau:glyph" });
        event.custom(
                {
                    "type": "ars_nouveau:glyph",
                    "count": 1,
                    "exp": 160,
                    "inputItems": [
                        {
                            "item": {
                                "item": "ars_nouveau:manipulation_essence"
                            }
                        },
                        {
                            "item": {
                                "item": "minecraft:ender_pearl"
                            }
                        },
                        {
                            "item": {
                                "item": "minecraft:ender_pearl"
                            }
                        },
                        {
                            "item": {
                                "item": "botania:mana_pearl"
                            }
                        },
                        {
                            "item": {
                                "item": "botania:mana_pearl"
                            }
                        }
                    ],
                    "output": "ars_nouveau:glyph_blink"
                }
            ).id("ars_nouveau:glyph_blink");

        //Cut
        event.remove({ id: "ars_nouveau:glyph_cut", type: "ars_nouveau:glyph" });
        event.remove({ id: "ars_nouveau:glyph_cut", type: "ars_nouveau:glyph" });
        event.custom(
            {
                "type": "ars_nouveau:glyph",
                "count": 1,
                "exp": 27,
                "inputItems": [
                    {
                        "item": {
                            "item": "ars_nouveau:manipulation_essence"
                        }
                    },
                    {
                        "item": {
                            "item": "botania:manasteel_shears"
                        }
                    },
                    {
                        "item": {
                            "item": "aether:zanite_sword"
                        }
                    }
                ],
                "output": "ars_nouveau:glyph_cut"
            }
        ).id("ars_nouveau:glyph_cut");

        //Dispel
        event.remove({ id: "ars_nouveau:glyph_dispel", type: "ars_nouveau:glyph" });
        event.remove({ id: "ars_nouveau:glyph_dispel", type: "ars_nouveau:glyph" });
        event.custom(
            {
                "type": "ars_nouveau:glyph",
                "count": 1,
                "exp": 27,
                "inputItems": [
                    {
                        "item": {
                            "item": "ars_nouveau:abjuration_essence"
                        }
                    },
                    {
                        "item": {
                            "item": "minecraft:milk_bucket"
                        }
                    },
                    {
                        "item": {
                            "item": "minecraft:milk_bucket"
                        }
                    },
                    {
                        "item": {
                            "item": "forbidden_arcanus:purifying_soap"
                        }
                    }
                ],
                "output": "ars_nouveau:glyph_dispel"
            }
        ).id("ars_nouveau:glyph_dispel");

        //Fell
        event.remove({ id: "ars_nouveau:glyph_fell", type: "ars_nouveau:glyph" });
        event.remove({ id: "ars_nouveau:glyph_fell", type: "ars_nouveau:glyph" });
        event.custom(
            {
                "type": "ars_nouveau:glyph",
                "count": 1,
                "exp": 27,
                "inputItems": [
                    {
                        "item": {
                            "item": "ars_nouveau:earth_essence"
                        }
                    },
                    {
                        "item": {
                            "item": "iceandfire:silver_axe"
                        }
                    },
                    {
                        "item": {
                            "item": "aether:zanite_axe"
                        }
                    },
                    {
                        "item": {
                            "item": "twilightforest:steeleaf_axe"
                        }
                    }
                ],
                "output": "ars_nouveau:glyph_fell"
            }
        ).id("ars_nouveau:glyph_fell");

        //Glide
        event.remove({ id: "ars_nouveau:glyph_glide", type: "ars_nouveau:glyph" });
        event.remove({ id: "ars_nouveau:glyph_glide", type: "ars_nouveau:glyph" });
        event.custom(
                {
                    "type": "ars_nouveau:glyph",
                    "count": 1,
                    "exp": 160,
                    "inputItems": [
                        {
                            "item": {
                                "item": "ars_nouveau:air_essence"
                            }
                        },
                        {
                            "item": {
                                "item": "minecraft:elytra"
                            }
                        },
                        {
                            "item": {
                                "item": "minecraft:diamond"
                            }
                        },
                        {
                            "item": {
                                "item": "botania:rune_air"
                            }
                        },
                        {
                            "item": {
                                "item": "minecraft:diamond"
                            }
                        }
                    ],
                    "output": "ars_nouveau:glyph_glide"
                }
            ).id("ars_nouveau:glyph_glide");

        //Grow
        event.remove({ id: "ars_nouveau:glyph_grow", type: "ars_nouveau:glyph" });
        event.remove({ id: "ars_nouveau:glyph_grow", type: "ars_nouveau:glyph" });
        event.custom(
                {
                    "type": "ars_nouveau:glyph",
                    "count": 1,
                    "exp": 55,
                    "inputItems": [
                        {
                            "item": {
                                "item": "ars_nouveau:magebloom_crop"
                            }
                        },
                        {
                            "item": {
                                "item": "botania:overgrowth_seed"
                            }
                        },
                        {
                            "item": {
                                "item": "occultism:datura_seeds"
                            }
                        },
                        {
                            "item": {
                                "item": "botania:fertilizer"
                            }
                        },
                        {
                            "item": {
                                "item": "botania:fertilizer"
                            }
                        },
                        {
                            "item": {
                                "item": "botania:fertilizer"
                            }
                        },
                        {
                            "item": {
                                "item": "minecraft:bone_block"
                            }
                        },
                        {
                            "item": {
                                "item": "minecraft:bone_block"
                            }
                        }
                    ],
                    "output": "ars_nouveau:glyph_grow"
                }
            ).id("ars_nouveau:glyph_grow");

        //Harvest
        event.remove({ id: "ars_nouveau:glyph_harvest", type: "ars_nouveau:glyph" });
        event.remove({ id: "ars_nouveau:glyph_harvest", type: "ars_nouveau:glyph" });
        event.custom(
            {
                "type": "ars_nouveau:glyph",
                "count": 1,
                "exp": 27,
                "inputItems": [
                    {
                        "item": {
                            "item": "ars_nouveau:manipulation_essence"
                        }
                    },
                    {
                        "item": {
                            "item": "botania:manasteel_hoe"
                        }
                    },
                    {
                        "item": {
                            "item": "aether:zanite_hoe"
                        }
                    }
                ],
                "output": "ars_nouveau:glyph_harvest"
            }
        ).id("ars_nouveau:glyph_harvest");

        //Heal
        event.remove({ id: "ars_nouveau:glyph_heal", type: "ars_nouveau:glyph" });
        event.remove({ id: "ars_nouveau:glyph_heal", type: "ars_nouveau:glyph" });
        event.custom(
            {
                "type": "ars_nouveau:glyph",
                "count": 1,
                "exp": 55,
                "inputItems": [
                    {
                        "item": {
                            "item": "ars_nouveau:abjuration_essence"
                        }
                    },
                    {
                        "item": {
                            "item": "minecraft:golden_apple"
                        }
                    },
                    {
                        "item": {
                            "item": "minecraft:glistering_melon_slice"
                        }
                    },
                    {
                        "item": {
                            "item": "botania:blood_pendant"
                        }
                    },
                    {
                        "item": {
                            "item": "minecraft:glistering_melon_slice"
                        }
                    },
                    {
                        "item": {
                            "item": "minecraft:glistering_melon_slice"
                        }
                    }
                ],
                "output": "ars_nouveau:glyph_heal"
            }
        ).id("ars_nouveau:glyph_heal");

        //Launch
        event.remove({ id: "ars_nouveau:glyph_launch", type: "ars_nouveau:glyph" });
        event.remove({ id: "ars_nouveau:glyph_launch", type: "ars_nouveau:glyph" });
        event.custom(
            {
                "type": "ars_nouveau:glyph",
                "count": 1,
                "exp": 27,
                "inputItems": [
                    {
                        "item": {
                            "item": "ars_nouveau:air_essence"
                        }
                    },
                    {
                        "item": {
                            "item": "aether:golden_aercloud"
                        }
                    },
                    {
                        "item": {
                            "item": "aether:golden_aercloud"
                        }
                    },
                    {
                        "item": {
                            "item": "aether:blue_aercloud"
                        }
                    },
                    {
                        "item": {
                            "item": "aether:golden_amber"
                        }
                    }
                ],
                "output": "ars_nouveau:glyph_launch"
            }
        ).id("ars_nouveau:glyph_launch");

        //Leap
        event.remove({ id: "ars_nouveau:glyph_leap", type: "ars_nouveau:glyph" });
        event.remove({ id: "ars_nouveau:glyph_leap", type: "ars_nouveau:glyph" });
        event.custom(
            {
                "type": "ars_nouveau:glyph",
                "count": 1,
                "exp": 27,
                "inputItems": [
                    {
                        "item": {
                            "item": "ars_nouveau:air_essence"
                        }
                    },
                    {
                        "item": {
                            "item": "ars_nouveau:wilden_wing"
                        }
                    },
                    {
                        "item": {
                            "item": "ars_nouveau:wilden_wing"
                        }
                    },
                    {
                        "item": {
                            "item": "aether:blue_aercloud"
                        }
                    },
                    {
                        "item": {
                            "item": "aether:golden_amber"
                        }
                    }
                ],
                "output": "ars_nouveau:glyph_leap"
            }
        ).id("ars_nouveau:glyph_leap");

        //Smelt
        event.remove({ id: "ars_nouveau:glyph_smelt", type: "ars_nouveau:glyph" });
        event.remove({ id: "ars_nouveau:glyph_smelt", type: "ars_nouveau:glyph" });
        event.custom(
            {
                "type": "ars_nouveau:glyph",
                "count": 1,
                "exp": 55,
                "inputItems": [
                    {
                        "item": {
                            "item": "ars_nouveau:fire_essence"
                        }
                    },
                    {
                        "item": {
                            "item": "minecraft:blaze_rod"
                        }
                    },
                    {
                        "item": {
                            "item": "create:blaze_burner"
                        }
                    },
                    {
                        "item": {
                            "item": "create:brass_ingot"
                        }
                    },
                    {
                        "item": {
                            "item": "minecraft:blast_furnace"
                        }
                    },
                    {
                        "item": {
                            "item": "botania:blaze_block"
                        }
                    }
                ],
                "output": "ars_nouveau:glyph_smelt"
            }
        ).id("ars_nouveau:glyph_smelt");

        //Gliding Thread
        event.remove({id: "ars_nouveau:thread_gliding", type: "ars_nouveau:enchanting_apparatus"});
        event.remove({id: "ars_nouveau:thread_gliding", type: "ars_nouveau:enchanting_apparatus"});
        event.custom({
            type: "ars_nouveau:enchanting_apparatus",
            keepNbtOfReagent: false,
            output: { item: "ars_nouveau:thread_gliding" },
            pedestalItems: [
              { item: "minecraft:elytra" },
              { item: "botania:rune_air" },
              { item: "ars_nouveau:air_essence" },
              { item: "ars_nouveau:air_essence" },
            ],
            reagent: [
              { item: "ars_nouveau:blank_thread" },
            ],
            sourceCost: 0
          })
    }
)