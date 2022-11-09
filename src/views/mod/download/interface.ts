export interface ModDataBody {
  _aMetadata: {
    _nRecordCount: number
  }
  _aRecords: {
    _idRow: number
    _sName: string
    _sProfileUrl: string
    _nViewCount?: number
    _nLikeCount?: number
    _sInitialVisibility: string
    _aPreviewMedia: {
      _aImages: { _sBaseUrl: string; _sFile220: string }[]
    }
    _aSubmitter: { _sName: string; _sProfileUrl: string }
  }[]
}

export interface ModData {
  id: number
  name: string
  url: string
  author: string
  authorUrl: string
  images: string[]
  viewCount: number | string
  likeCount: number | string
  nsfw: boolean
}

export interface ProfilePage {
  _aCategory: { _idRow: number }
  _aFiles: {
    _idRow: number
    _nFilesize: number
    _sDownloadUrl: string
    _sFile: string
    _sMd5Checksum: string
  }[]
}

export interface InstallOption {
  id: number
  name: string
  url: string
  isInstall: boolean
  images: string[]
  submitter: {
    name: string
    url: string
  }
}
