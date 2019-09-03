<template lang="pug">
  .container
    
    header
      h1.site-title
        span.ff14 FINAL FANTASY XIV
        br
        span Game Card Generator β 1.0.5
      p.guideline 本サイトはファイナルファンタジーXIVのゲーム内で撮影したスクリーンショットをゲームカード風に加工する非公式画像ジェネレーターです。ご利用の際は「<a href="https://support.jp.square-enix.com/rule.php?id=5381&la=0&tag=authc" target="_blank">ファイナルファンタジーXIV 著作物利用許諾条件</a>」に同意した上、規約の範囲内にてご利用ください。
        | <br>
        | <br>
        | <br>
        | お知らせ<br>
        | アクセスありがとうございます。想像以上にみなさんが楽しんんでくれており、本当に本当に嬉しく思います。あらためてみなさまにご協力のお願いです。本サイトはあくまで二次創作を楽しむための非公式ツールです。本ジェネレーターで作成した画像が一人歩きし公式へご迷惑がかかることがないよう、修正・対応を続けております。つきまして、現在は以下の対応をとっておりますのでご確認ください。
        | <br>・本ジェネレーターはFF14のロゴマークを提供しない
        | <br>・非公式のものであることを表記する
        | <br>みなさんがデザインされたカード画像をTwitte等に掲載する際は改めて<a href="https://support.jp.square-enix.com/rule.php?id=5381&la=0&tag=authc" target="_blank">公式の利用許諾条件</a>をよくご確認した上でご利用ください。ご理解とご協力のほどよろしくお願いいたします。
        | <br>
        | <br>
        | 動作確認環境<br>
        | Mac OS / Safari, Chrome<br>
        | Windows10 / Edge, Chrome
    p.copy-right 記載されている会社名・製品名・システム名などは、各社の商標、または登録商標です。<br>Copyright (C) 2010 - 2019 SQUARE ENIX CO., LTD. All Rights Reserved.

    main
      .preview-wrapper
        .preview-container
          .svg-wrapper
            svgTemplate.svg(
              ref="svg"
              v-if="selectedTemplate==0"
              :image="uploadedImageData"
              :designer="designer"
              :offsetX="params[selectedTemplate].x"
              :offsetY="params[selectedTemplate].y"
              :scale="params[selectedTemplate].scale"
              :rotate="params[selectedTemplate].rotate")
            svgTemplate02.svg(
              ref="svg"
              v-if="selectedTemplate==1"
              :image="uploadedImageData"
              :designer="designer"
              :offsetX="params[selectedTemplate].x"
              :offsetY="params[selectedTemplate].y"
              :scale="params[selectedTemplate].scale"
              :rotate="params[selectedTemplate].rotate")
            svgTemplate03.svg(
              ref="svg"
              v-if="selectedTemplate==2"
              :image="uploadedImageData"
              :designer="designer"
              :offsetX="params[selectedTemplate].x"
              :offsetY="params[selectedTemplate].y"
              :scale="params[selectedTemplate].scale"
              :rotate="params[selectedTemplate].rotate")
            svgTemplate04.svg(
              ref="svg"
              v-if="selectedTemplate==3"
              :image="uploadedImageData"
              :designer="designer"
              :offsetX="params[selectedTemplate].x"
              :offsetY="params[selectedTemplate].y"
              :scale="params[selectedTemplate].scale"
              :rotate="params[selectedTemplate].rotate")
            svgTemplate05.svg(
              ref="svg"
              v-if="selectedTemplate==4"
              :image="uploadedImageData"
              :designer="designer"
              :offsetX="params[selectedTemplate].x"
              :offsetY="params[selectedTemplate].y"
              :scale="params[selectedTemplate].scale"
              :rotate="params[selectedTemplate].rotate")
            svgTemplate06.svg(
              ref="svg"
              v-if="selectedTemplate==5"
              :image="uploadedImageData"
              :designer="designer"
              :offsetX="params[selectedTemplate].x"
              :offsetY="params[selectedTemplate].y"
              :scale="params[selectedTemplate].scale"
              :rotate="params[selectedTemplate].rotate")
      
      .input-parameters
        //- h2.aside-title CUSTOMIZE
        .inner
          .step
            h2.step-title 1. Input Image
            .step-content
              .image-preview(v-if="uploadedImageData")
                img.image-data(:src="uploadedImageData")
                .image-name {{uploadFile.name}}
              label.fileinput
                input.fileinput-input(type="file" @change="handleInputFile")
                .fileinput-parts
                  img.icon(src="icons/_ionicons_svg_md-image.svg")
                  span Select Image
          
          .step
            h2.step-title 2. Select Template
            .step-content
              .input-templates
                .template-option(v-for="n,i in 4" :class="{select: i==selectedTemplate}" @click="selectedTemplate = i")
                  .l-square
                    .__content
                      img(:src="`images/template0${n}.svg`")
          .step
            h2.step-title 3. Layout Adjustment
            .step-content.layout-adjust
              
              .buttons.pos-buttons
                .buttons-row
                  .button-arrow.arrow-up(@click="posUp")
                    img(src="icons/_ionicons_svg_ios-arrow-up.svg")
                .buttons-row
                  .button-arrow.arrow-left(@click="posLeft")
                    img(src="icons/_ionicons_svg_ios-arrow-back.svg")
                  .button-arrow.arrow-right(@click="posRight")
                    img(src="icons/_ionicons_svg_ios-arrow-forward.svg")
                .buttons-row
                  .button-arrow.arrow-down(@click="posDown")
                    img(src="icons/_ionicons_svg_ios-arrow-down.svg")
              
              .buttons.double-buttons
                .button-arrow.arrow-zoomup(@click="zoomIn")
                  img(src="icons/_ionicons_svg_ios-add.svg")
                .button-arrow.arrow-zoomout(@click="zoomOut")
                  img(src="icons/_ionicons_svg_ios-remove.svg")
              
              
              //- .buttons.double-buttons
                .button-arrow.arrow-rotate-forward(@click="turnRight")
                  img(src="icons/_ionicons_svg_ios-return-right.svg")
                .button-arrow.arrow-rotate-backward(@click="turnLeft")
                  img(src="icons/_ionicons_svg_ios-return-right.svg")
             
               
              
          .step
            h2.step-title 4. Signature
            .step-content
              p Designed by 
              p: input(v-model="designer")
          
          .step
            h2.step-title 5. Save Image
            .step-content
              button.button-download(:disabled="uploadedImageData==null || !validSignature" @click="handleDrownload")
                img.icon(src="icons/_ionicons_svg_ios-download.svg")
                span Download
</template>
<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  import axios from "axios"

  export default {
    data(){
      return {
        x: 0,
        y: 0,
        scale: 1,
        uploadFile: null,
        uploadedImageData: null,
        selectedTemplate: 0,
        designer:"",
        params: [
          { x: 0, y:0, scale: 1, rotate: 0 },
          { x: 0, y:0, scale: 1, rotate: 0 },
          { x: 0, y:0, scale: 1, rotate: 0 },
          { x: 0, y:0, scale: 1, rotate: 0 },
          { x: 0, y:0, scale: 1, rotate: 0 },
          { x: 0, y:0, scale: 1, rotate: 0 },
        ]
      }
    },
    computed: {
      validSignature(){
        return this.designer!=null && this.designer.replace(/[ |　]/g, "").length>0
      }
    },
    async mounted(){
    },
    methods: {
      handleInputFile(e){
        e.preventDefault();
        let files = e.target.files
        this.uploadFile = files[0]
        if(this.uploadFile) this.previewImage(this.uploadFile)
      },
      previewImage(file){
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (e) => {
          const imageData = e.target.result
          this.uploadedImageData = imageData
        }
      },
      handleDrownload(){
        const svg = this.$refs.svg.$el
        this.downloadPNG(svg)
      },
      downloadPNG(svg){
        const svgData = new XMLSerializer().serializeToString(svg)
        const canvas = document.createElement("canvas")
        canvas.width = svg.width.baseVal.value
        canvas.height = svg.height.baseVal.value
        canvg(canvas, svgData, {
          renderCallback(){
            if(canvas.msToBlob){
              var blob = canvas.msToBlob()
              window.navigator.msSaveBlob(blob, "my_gamecard.png")
            }else{
              var a = document.createElement("a")
              a.href = canvas.toDataURL("image/png")
              a.setAttribute("download", "my_gamecard.png")
              // a.dispatchEvent(new CustomEvent("click"))
              a.click()
            }
            
          }
        })
      },
      downloadSVG(svg){
        const svgData = new XMLSerializer().serializeToString(svg)
        const svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"})
        const svgUrl = URL.createObjectURL(svgBlob)
        const a = document.createElement("a")
        a.href = svgUrl
        a.setAttribute("download", "image.svg")
        a.dispatchEvent(new CustomEvent("click"))
      },
      inputScale(e){
        const prevScale = this.params[this.selectedTemplate].scale
        const distScale = Number(e.target.value) - prevScale
        this.params[this.selectedTemplate].scale = Number(e.target.value)
      },
      zoomIn(){
        if(this.uploadedImageData && this.params[this.selectedTemplate].scale < 2){
          this.params[this.selectedTemplate].scale += 0.1
        }
      },
      zoomOut(){
        if(this.uploadedImageData && this.params[this.selectedTemplate].scale > 0.1){
          this.params[this.selectedTemplate].scale -= 0.1
        }
      },
      posUp(){
        if(this.uploadedImageData){
          this.params[this.selectedTemplate].y -= 10
        }
      },
      posDown(){
        if(this.uploadedImageData){
          this.params[this.selectedTemplate].y += 10
        }
      },
      posLeft(){
        if(this.uploadedImageData){
          this.params[this.selectedTemplate].x -= 10
        }
      },
      posRight(){
        if(this.uploadedImageData){
          this.params[this.selectedTemplate].x += 10
        }
      },
      turnRight(){
        if(this.uploadedImageData){
          this.params[this.selectedTemplate].rotate += 15
        }
      },
      turnLeft(){
        if(this.uploadedImageData){
          this.params[this.selectedTemplate].rotate -= 15
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .container
    position relative
    display flex
    flex-direction column
    width 100%
    height 100vh
    // background-color #222
  header
    position fixed 
    top 20px
    left 20px
    z-index 5000
  .site-title
    font-size 20px
    font-weight bold
    line-height 1.2em
    margin-bottom 10px
    color #000
  .guideline
    width 240px
    font-size 10px
    line-height 1.6em
    text-align justify
    a
      text-decoration underline
  .copy-right
    position fixed
    line-height 1.4em
    bottom 20px
    left 20px
    z-index 5000
    font-size 10px
    margin-top 10px
  main
    position relative
    width 100%
    height 50%
    flex-grow 1
    display flex
  .preview-wrapper
    position relative
    width 30%
    height 100%
    flex-grow 1
    display flex
    align-items flex-start
    .l-square
      width 100%
      &:after
        padding-bottom 141%
  .preview-container
    width 100%
    height 100%
    padding 100px
    display flex
    align-items center
    justify-content center
    background-color #CFCDCF
    overflow scroll
    noScrollbar()
  .svg-wrapper
    position relative
    width 100%
    .svg
      width 100%
      height 100%
      max-height 80vh
      & >>> #bg
        background-color #fff
        box-shadow 0 0 20px #000
  
  .input-parameters
    background-color #fff
    width 290px
    height 100%
    flex-shrink 0
    overflow-y scroll
  .aside-title
    text-align center
    padding-top 10px
    padding-bottom 10px
    font-size 16px

  .fileinput
    position relative
    .fileinput-input
      display none 
    .fileinput-parts
      animate()
      border 2px solid black
      color #000000
      height 40px
      display flex
      align-items center
      justify-content center
      text-align center
      font-size 16px
      cursor pointer
      .icon
        width 24px
        margin-right 5px
      &:hover
        background-color #e8e8e8

  .button-download
    animate()
    outline none
    width 100%
    height 40px
    background-color #000000
    color white
    border 2px solid #000000
    font-size 16px
    text-align center
    display flex
    align-items center
    justify-content center
    .icon
      position relative
      top -1px
      width 24px
      margin-right 5px
    &:not(:disabled)
      cursor pointer
      &:hover
        background-color #555555
        color white
        border 2px solid #555555
      &:active
        background-color #888888
        color white
        border 2px solid #888888
    &:disabled
      opacity .2
    
  .step
    &:not(:last-child)
      margin-bottom 20px
  .step-title
    font-size 12px
    font-weight 400
    letter-spacing 1px
    padding 5px 10px
    margin-bottom 20px
    background-color #333
    color #f8f8f8
  .step-content
    padding 0 20px
    padding-bottom 20px

  .image-preview
    margin-bottom 10px
    img
      width 100%
    .image-name
      font-size 10px
      width 100%

  .input-templates
    display flex
    flex-wrap wrap
  .template-option
    width calc(33% - 2px)
    margin-right 2px
    margin-bottom 2px
    .__content
      animate()
      border 2px solid transparent
      padding 10px
    &:hover .__content
      border-color #000
    &.select .__content
      background-color #e3e3e3
      border-color #e3e3e3
    

  .buttons-row
    display flex
    justify-content center
  .button-arrow
    position relative
    animate()
    noSelect()
    height 45px
    width 45px
    border-radius 50%
    background-color #ddd
    display flex
    align-items center
    justify-content center
    cursor pointer
    img
      position relative
      width 30px
    &.arrow-left
      img
        left -2px
    &.arrow-right img
      left 2px
    &.arrow-down img
      top 2px
    &.arrow-rotate-forward img
      position relative
      transform rotate(-180deg)
    &:hover
      background-color #ddd
    &:active
      background-color #aaa


  .layout-adjust
    display flex
    justify-content center
  .pos-buttons
    margin-right 10px
    .arrow-up
      top 10px
    .arrow-left
      margin-right 15px
    .arrow-right
      margin-left 15px
    .arrow-down
      top -10px

  .double-buttons
    display flex
    flex-direction column
    justify-content center
    &:not(:last-child)
      margin-right 10px
    .button-arrow
      &:first-child
        border-radius 10px 10px 0 0
        margin-bottom 2px
      &:last-child
        border-radius 0 0 10px 10px
</style>