<template>
  <n-grid cols="s:5 m:6 l:7 xl:8 2xl:9" responsive="screen" class="px-4">
    <n-gi v-for="(item, index) in modDataList" :key="index" class="h-auto p-1 flex-col">
      <n-image lazy preview-disabled object-fit="contain" :src="item.images[0]" class="rd-1 cursor-pointer" @click="open(item.url)" />
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
  import { fetch } from '@tauri-apps/api/http'
  import { open } from '@tauri-apps/api/shell'

  interface ModDataBody {
    _aMetadata: {
      _nRecordCount: number
    }
    _aRecords: {
      _sName: string
      _sProfileUrl: string
      _nViewCount?: number
      _nLikeCount?: number
      _aPreviewMedia: {
        _aImages: { _sBaseUrl: string; _sFile220: string }[]
      }
      _aSubmitter: { _sName: string; _sProfileUrl: string }
    }[]
  }

  interface ModData {
    name: string
    url: string
    author: string
    authorUrl: string
    images: string[]
    viewCount: number
    likeCount: number
  }

  const modDataList = ref<ModData[]>([])

  async function getModDataBody() {
    const response = await fetch<ModDataBody>(
      'https://gamebanana.com/apiv10/Mod/Index?_nPage=1&_nPerpage=20&_aFilters%5BGeneric_Game%5D=8552',
      {
        method: 'GET',
        timeout: 30
      }
    )
    const { status, data } = response
    if (status === 200) {
      modDataList.value = data._aRecords.map(({ _sName, _sProfileUrl, _aSubmitter, _nViewCount, _nLikeCount, _aPreviewMedia }) => ({
        name: _sName,
        url: _sProfileUrl,
        author: _aSubmitter._sName,
        authorUrl: _aSubmitter._sProfileUrl,
        viewCount: _nViewCount ?? 0,
        likeCount: _nLikeCount ?? 0,
        images: _aPreviewMedia._aImages.map(({ _sBaseUrl, _sFile220 }) => _sBaseUrl + '/' + _sFile220)
      }))
    }
  }

  onActivated(async () => {
    getModDataBody()
  })
</script>
