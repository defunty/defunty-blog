<template>
  <div id="post">
    <h1 class="post-title">{{ title }}</h1>
    <div class="date-wrapper">
      <div class="created-date">{{ createdDate }}&nbsp;Up</div>
    </div>
    <div class="post-body" v-html="body"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    createdDate: String,
    body: String
  }
}
</script>

<style lang="scss" scoped>
.date-wrapper {
  display: flex;
  flex-wrap: wrap;
  *:first-of-type {
    margin-right : 20px;
  }
  * {
    color: $color-iceberg-blue;
  }
}
.post-title{
  border-left: 6px groove $color-iceberg-orange;
  border-bottom: 5px ridge $color-iceberg-orange;
  color: $color-iceberg-orange;
  display: block;
  font-weight: bold;
  padding-left: 10px;
  width: 100%;
}

</style>
