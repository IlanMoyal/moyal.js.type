/*!
 * file: scripts/generate-ts.js
 *
 */

import utils from "./include/utils.js";
import path from "path";
import SettingsAccessor from "./include/settings-accessor.js";
import { execSync } from "child_process";

function generateTS() {
    const root = utils.getRootDirectory();
    let source = path.join(root, SettingsAccessor.tsconfig.compilerOptions.outDir, SettingsAccessor.projectSettings.sourceFile);
    source = utils.replaceEnding(source, ".js", ".d.ts");
    const target = path.join(root, SettingsAccessor.tsconfig.compilerOptions.outDir, SettingsAccessor.projectSettings.outputBaseFilename + ".d.ts");
    
    execSync("tsc --project tsconfig.json", {stdio: "inherit"}); // generates the typescript with source name
    utils.renameFile(source, target);
    console.log(`✅ Type script file generated ${target}`);
}

generateTS();