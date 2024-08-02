/**
 * @license MIT
 * @copyright Copyright (c) 2024, GoldFrite
 */

import { ClientError, ErrorType } from '../../types/errors'
import { DownloaderEvents } from '../../types/events'
import EventEmitter from '../utils/events'
import os from 'os'
import manifests from '../utils/manifests'
import { File } from '../../types/file'
import path from 'path'
import Downloader from '../utils/downloader'
import utils from '../utils/utils'

export default class Java extends EventEmitter<DownloaderEvents> {
  private minecraftVersion: string
  private serverId: string

  /**
   * @param minecraftVersion The version of Minecraft you want to install Java for.
   * @param serverId Your Minecraft server ID (eg. `'minecraft'`). This will be used to 
   * create the server folder (eg. `.minecraft`).
   */
  constructor(minecraftVersion: string, serverId: string) {
    super()
    this.minecraftVersion = minecraftVersion
    this.serverId = serverId
  }

  /**
   * Download Java for the Minecraft version.
   */
  async download() {
    const files = await this.getFiles()

    const downloader = new Downloader(utils.getServerFolder(this.serverId))
    downloader.forwardEvents(this)

    await downloader.download(files)
  }

  /**
   * Get and map the files of the Java version to download.
   * 
   * **You should not use this method directly. Use `this.download()` instead.**
   * @returns The files of the Java version.
   */
  async getFiles() {
    const jreVersion = ((await manifests.getMinecraftManifest(this.minecraftVersion)).javaVersion?.component || 'jre-legacy') as
      | 'java-runtime-alpha'
      | 'java-runtime-beta'
      | 'java-runtime-delta'
      | 'java-runtime-gamma'
      | 'java-runtime-gamma-snapshot'
      | 'jre-legacy'

    const jreManifest = await manifests.getJavaManifest(jreVersion)

    let files: File[] = []

    Object.entries(jreManifest.files).forEach((file: [string, any]) => {
      if (file[1].type === 'directory') {
        files.push({
          name: file[0].split('/').pop() as string,
          path: path.join('runtime', 'jre', file[0].split('/').slice(0, -1).join('/'), '/'),
          url: '',
          type: 'FOLDER'
        })
      } else if (file[1].downloads) {
        files.push({
          name: file[0].split('/').pop() as string,
          path: path.join('runtime', 'jre', file[0].split('/').slice(0, -1).join('/'), '/'),
          url: file[1].downloads.raw.url,
          size: file[1].downloads.raw.size,
          sha1: file[1].downloads.raw.sha1,
          type: 'JAVA'
        })
      }
    })

    return files
  }
}
