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
#post {
  margin-bottom: 4.0em;
  &:last-of-type {
    margin-bottom: 0;
  }
}
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

<!-- v-htmlでscopeするためにglobal scopedとする-->
<style lang="scss">
.post-body {
  h1 {
    display: block;
    font-size: 1.4em;
    margin-top: 2.0em;
    &:first-of-type {
      margin-top: 1.0em;
    }
  }
  pre {
    border-top: solid 1.5px $color-iceberg-green;
    border-bottom: solid 1.5px $color-iceberg-green;
    color: #fff;
    background-color: #000;
    padding: 12px;
  }
}
</style>