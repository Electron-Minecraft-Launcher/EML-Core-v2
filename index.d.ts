import MicrosoftAuth from './lib/auth/microsoft'
import AzAuth from './lib/auth/azuriom'
import CrackAuth from './lib/auth/crack'
import Bootstraps from './lib/bootstraps/bootstraps'
import Maintenance from './lib/maintenance/maintenance'
import News from './lib/news/news'
import Background from './lib/background/background'
import ServerStatus from './lib/serverstatus/serverstatus'
import Java from './lib/java/java'
import Launcher from './lib/launcher/launcher'

/**
 * ## EML Core
 *
 * Be careful: **this Node.js library requires [Electron](https://www.npmjs.com/package/electron)!**
 * You need Electron for the Microsoft login.
 *
 * Create your Electron Minecraft Launcher easily.
 * 
 * To get all the capacities of this Node.js library, you must set up your
 * [EML AdminTool](https://github.com/Electron-Minecraft-Launcher/EML-AdminTool-v2) website!
 *
 * [GitHub](https://github.com/Electron-Minecraft-Launcher/EML-Core) —
 * [NPM](https://www.npmjs.com/package/eml-core) —
 * [Doc](https://github.com/Electron-Minecraft-Launcher/EML-Core/wiki) —
 * [EML Website](https://electron-minecraft-launcher.ml)
 *
 * ---
 *
 * @version 2.0.0-alpha.0
 * @license MIT — See the `LICENSE` file for more information
 * @copyright Copyright (c) 2024, GoldFrite
 */

declare module EMLCore {
  export { MicrosoftAuth, AzAuth, CrackAuth, Bootstraps, Maintenance, News, Background, ServerStatus, Java, Launcher }
}

export { default as MicrosoftAuth } from './lib/auth/microsoft'
export { default as AzAuth } from './lib/auth/azuriom'
export { default as CrackAuth } from './lib/auth/crack'
export { default as Bootstrap } from './lib/bootstraps/bootstraps'
export { default as Maintenance } from './lib/maintenance/maintenance'
export { default as News } from './lib/news/news'
export { default as Background } from './lib/background/background'
export { default as ServerStatus } from './lib/server-status/server-status'
export { default as Java } from './lib/java/java'
export { default as Launcher } from './lib/launcher/launcher'
export default EMLCore