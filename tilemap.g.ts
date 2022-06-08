// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100007070707070706060607070d0d070707070c130d0d0d0d0d0d0d0d0d0d0d0d07070d0d0d0d0d0d0d0d0d0d0d0d0d0d070712130d0d030404040d0d0d0d0d0d07070112120d030d0d05121212061212070b0e0d100d030d0d05040d0d010d0f070b020d0d0d030d0d13130d0d0d0d0f070b010d100d030d0d13130d0d0d0d0f07071313130d13040d0d13111212121207071313131313050d0d0d100d0d0d0107071313131304050d0d0d0d0d0d0d0d07131313131303040d0d0d100d0d0d0d0707131313131303040403100d0d0d0d08071313010d0d0d131303130d0d0d0d08070c0d0d0d0d0d0d1303130d0d0d0c0807070707070a0a0a070707070d0d0709`, img`
2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 
2 . 2 . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 . . . . . . . . . . . . 2 
2 . 2 2 . . . . . 2 2 2 2 2 2 2 
2 . . 2 . . . . . . . . . . . 2 
2 . . . . . . . 2 2 . . . . . 2 
2 . . 2 . . . . 2 2 . . . . . 2 
2 2 2 2 . 2 . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . . 2 . . . . 2 
2 2 2 2 2 . . . . . . . . . . 2 
2 2 2 2 2 . . . . . 2 . . . . 2 
2 2 2 2 2 2 . . . . 2 . . . . 2 
2 2 2 . . . . 2 2 . 2 . . . . 2 
2 . . . . . . . 2 . 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 
`, [myTiles.transparency16,sprites.dungeon.chestClosed,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.stairNorth,sprites.dungeon.stairWest,sprites.dungeon.stairSouth,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.doorClosedNorth,sprites.dungeon.floorDark0,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleInsignia,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
