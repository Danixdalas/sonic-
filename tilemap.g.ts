// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100009090909090908080809090f0f090909090e0f0f0f0f0f0f0f0f0f0f0f0f0f09090f0f0f0f0f0f0f0f0f0f0f0f0f0f0909020f0f0f050606060f0f0f0f0f0f09090302020f050f0f07010101080101090d100f020f050f0f07060f0f030f11090d040f0f0f050f0f010f0f0f0f0f11090d030f020f050f0f01010f0f0f0f1109090202020f05060f0f01010101010109090f0f0f0f0f070f0f0f010f0f0f0f09090f0f0f0f06070f0f0f0f0f0f0f0f09090f0f0f0f05060f0f0f010f0f0f0f090901010f0f0f05060605010f0f0f0f0a090f010f0f0f0f0f0f050f0f0f0f0f0a090e0f0f0f0f0f0f0f050f0f0f0f0e0a09090909090c0c0c090909090f0f090b`, img`
2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.chestClosed,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.stairNorth,sprites.dungeon.stairWest,sprites.dungeon.stairSouth,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.doorClosedNorth,sprites.dungeon.floorDark0,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
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
