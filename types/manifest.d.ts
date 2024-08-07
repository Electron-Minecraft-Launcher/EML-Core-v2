export interface MinecraftManifest {
  arguments?: {
    game: string[]
    jvm: any[]
  }
  assetIndex: {
    id: string
    sha1: string
    size: number
    totalSize: number
    url: string
  }
  assets: string
  complianceLevel: number
  downloads: {
    client: {
      sha1: string
      size: number
      url: string
    }
    client_mappings?: {
      sha1: string
      size: number
      url: string
    }
    server: {
      sha1: string
      size: number
      url: string
    }
    server_mappings?: {
      sha1: string
      size: number
      url: string
    }
  }
  id: string
  javaVersion?: {
    component: string
    majorVersion: number
  }
  libraries: [
    {
      downloads: {
        artifact: {
          path: string
          sha1: string
          size: number
          url: string
        }
        name: string
        rules?: any[]
      }
    }
  ]
  logging: {
    client: {
      argument: string
      file: {
        id: string
        sha1: string
        size: number
        url: string
      }
      type: string
    }
  }
  mainClass: string
  minecraftArguments?: string
  minimumLauncherVersion: number
  releaseTime: string
  time: string
  type: string
}
