<template>
  <div>
    <img src="https://images.gamebanana.com/img/ss/mods/220-90_635467e7a1ec6.jpg" />
  </div>
</template>

<script setup lang="ts">
  import { fetch } from '@tauri-apps/api/http'

  interface ModDataBody {
    _aMetadata: {
      _nRecordCount: number
    }
    _aRecords: {
      _sName: string
      _nViewCount?: number
      _nLikeCount?: number
      _nPostCount?: number
      _aPreviewMedia: {
        _aImages: { _sBaseUrl: string; _sFile220: string }[]
      }
    }[]
  }

  interface ModData {
    name: string
    auth: string
    images: string[]
  }

  onActivated(async () => {
    const response = await fetch<ModDataBody>(
      'https://gamebanana.com/apiv10/Mod/Index?_nPage=1&_nPerpage=20&_aFilters%5BGeneric_Game%5D=8552',
      {
        method: 'GET',
        timeout: 30
      }
    )
    const { status, data } = response
    if (status === 200) {
      console.log(data)
      const a = data._aRecords[0]._aPreviewMedia._aImages[0]._sBaseUrl
      console.log(a)
    }
  })
</script>
