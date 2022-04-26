<template>
  <ParentLayout>
    <template #page-bottom>
      <div style="text-align: center;">
      <hr>
      GNU - GPLv3.0+ Licensed | Made by InanisDevTeam | 2022 <br />
      </div>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  name: 'Layout',

  components: {
    ParentLayout
  }
}
</script>