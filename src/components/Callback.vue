<template>
</template>
<script>

import { setIdToken, setAccessToken } from '@/auth'

export default {
  name: 'callback',
  mounted () {
    this.$nextTick(() => {
      setAccessToken()
      setIdToken()
      window.location.href = '/'
    })
  }
}
</script>
