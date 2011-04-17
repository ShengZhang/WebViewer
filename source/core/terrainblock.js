/*******************************************************************************
#      ____               __          __  _      _____ _       _               #
#     / __ \              \ \        / / | |    / ____| |     | |              #
#    | |  | |_ __   ___ _ __ \  /\  / /__| |__ | |  __| | ___ | |__   ___      #
#    | |  | | '_ \ / _ \ '_ \ \/  \/ / _ \ '_ \| | |_ | |/ _ \| '_ \ / _ \     #
#    | |__| | |_) |  __/ | | \  /\  /  __/ |_) | |__| | | (_) | |_) |  __/     #
#     \____/| .__/ \___|_| |_|\/  \/ \___|_.__/ \_____|_|\___/|_.__/ \___|     #
#           | |                                                                #
#           |_|                 _____ _____  _  __                             #
#                              / ____|  __ \| |/ /                             #
#                             | (___ | |  | | ' /                              #
#                              \___ \| |  | |  <                               #
#                              ____) | |__| | . \                              #
#                             |_____/|_____/|_|\_\                             #
#                                                                              #
#                              (c) 2010-2011 by                                #
#           University of Applied Sciences Northwestern Switzerland            #
#                     Institute of Geomatics Engineering                       #
#                           martin.christen@fhnw.ch                            #
********************************************************************************
*     Licensed under MIT License. Read the file LICENSE for more information   *
*******************************************************************************/

//------------------------------------------------------------------------------
/**
 * @constructor
 * @description Terrainblock
 * @author Martin Christen, martin.christen@fhnw.ch
 */
function TerrainBlock(engine, quadcode, quadtree)
{
   this.engine = engine;
   this.quadcode = quadcode;
   this.quadtree = quadtree;
}
//------------------------------------------------------------------------------
/**
 * @description Request Data
 * @intern
 */
TerrainBlock.prototype._AsyncRequestData = function()
{
   
}
//------------------------------------------------------------------------------
/**
 * @description Destroy Terrainblock and free all memory, especially GPU mem.
 */
TerrainBlock.prototype.Destroy = function()
{
   console.log("DESTROY TERRAIN BLOCK!");
}

//------------------------------------------------------------------------------
/**
 * @description returns true if terrain block is available (can be rendered).
 * TerrainBlock is an asynchronous object and some data may not be available yet.
 */
TerrainBlock.prototype.IsAvailable = function()
{
   return false;
}
//------------------------------------------------------------------------------
/**
* @description Calculate visible pixel size
*/
TerrainBlock.prototype.GetPixelSize = function(mModelViewProjection, nWidth, nHeight)
{
   
}
//------------------------------------------------------------------------------
/**
* @description Calculate size of a block (cell size)
*/
TerrainBlock.prototype.GetBlockSize = function()
{
   
}
//------------------------------------------------------------------------------
/**
* @description Calc exact distance to another point
* @param {vec3} vWhere The position to measure to
* @param {vec3} outHitpoint shortest position to terrain
*/
TerrainBlock.prototype.CalcDistanceTo = function(vWhere, outHitpoint)
{
   
}

//------------------------------------------------------------------------------
/**
 * @description Render a terrain block. Requires model and view matrix for
 * some voodoo with floating point precision.
 */
TerrainBlock.prototype.Render = function(oModelMatrix, oViewMatrix, qCache)
{
}

//------------------------------------------------------------------------------

