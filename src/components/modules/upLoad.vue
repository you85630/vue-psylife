<template>
  <div class="up-load">
    <i class="fa fa-image"></i>
    <p>点击上传图片</p>
    <input type="file" id="input" @change="fileImg">
    <div class="img-box" v-if="imgData">
      <img :src="imgData" alt="">
      <div class="img-replace">
        <p>点击替换图片</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value', 'mold'],
  data () {
    return {
      imgData: this.value
    }
  },
  methods: {
    fileImg () {
      let oFile = document.querySelector('#input')
      imgInfo(oFile, data => {
        // 插入预览图片
        this.imgData = data
        this.$emit('input', this.imgData)
      })
      // 图片转换
      function imgInfo (val, data) {
        let reader = new FileReader()
        if (typeof FileReader !== 'undefined') {
          reader.onload = function () {
            data(reader.result)
          }
          reader.readAsDataURL(val.files[0])
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.up-load {
  position: relative;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  border: 1px solid #eee;
  background-color: #f5f5f5;
  text-align: center;
  &:hover {
    .img-replace {
      display: block;
    }
  }
  p {
    font-size: 14px;
  }
  i {
    margin-top: 20px;
    margin-bottom: 10px;
    color: #999;
    font-size: 40px;
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100px;
    height: 100px;
    opacity: 0;
    cursor: pointer;
  }
}
.img-box {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100px;
  height: 100px;
  background-color: #f5f5f5;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    box-sizing: border-box;
    width: auto;
    height: 100%;
    border: 1px solid #eee;
  }
  .txt-name{
    width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .img-replace {
    position: absolute;
    bottom: 0;
    left: 0;
    display: none;
    width: 100px;
    height: 100px;
    background-color: rgba($color: #000000, $alpha: 0.4);
    color: #fff;
    cursor: pointer;
    p {
      line-height: 100px;
    }
  }
}
</style>
