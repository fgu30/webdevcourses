<template>
  <div class="container">
    <header>猫眼电影</header>
    <main>
      <nav>
        <div>
          北京
          <i class="city-entry-arrow"></i>
        </div>
        <div>
          <ul>
            <li class="active">热映</li>
            <li>待映</li>
          </ul>
        </div>
        <div></div>
      </nav>
      <ul>
        <li>
          
        </li>
      </ul>
    </main>
    <footer>
      <ul>
        <li class="active">
          <svg width="24" height="24" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><g fill="#696969" fill-rule="evenodd"><path d="M24.994 47c-.71 0-1.422-.034-2.136-.102C12.445 45.913 4.14 37.645 3.11 27.24c-.657-6.63 1.65-13.115 6.332-17.796 4.68-4.68 11.162-6.992 17.796-6.333 10.36 1.027 18.624 9.29 19.65 19.65.592 5.984-1.192 11.796-5.022 16.365-.162.193-.158.463.007.63l3.425 3.424c.586.584.586 1.534 0 2.12-.586.586-1.535.586-2.12 0l-3.426-3.425c-1.274-1.273-1.353-3.284-.185-4.677 3.307-3.946 4.847-8.97 4.335-14.142-.886-8.942-8.018-16.074-16.96-16.96-5.732-.562-11.336 1.426-15.38 5.47-4.042 4.042-6.034 9.647-5.467 15.378.89 8.98 8.058 16.117 17.045 16.968 3.867.37 7.68-.417 11.03-2.267.725-.4 1.637-.138 2.037.588.4.725.137 1.638-.588 2.038-3.26 1.8-6.896 2.73-10.626 2.73"></path><path d="M28 16c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3M28 34c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3M34 28c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3M16 28c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3"></path></g></svg>
          <span>电影</span>
        </li>
        <li>
          <i class="yo-ico">&#xe8c0;</i>
          <span>影院</span>
        </li>
        <li>
          <svg width="24" height="24" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><g fill="#696969" fill-rule="evenodd"><path d="M19.916 35.913c-.014-.016-.02-.036-.033-.05-.314-.32-.737-.455-1.153-.432C13.586 33.066 10 27.9 10 21.908 10 13.687 16.728 7 25 7c8.27 0 15 6.687 15 14.907 0 8.22-6.73 14.906-15 14.906-1.787 0-3.493-.328-5.084-.9zm14.502 1.225C39.558 33.98 43 28.343 43 21.908 43 12.032 34.925 4 25 4S7 12.033 7 21.907c0 6.657 3.68 12.466 9.113 15.552l-6.086 5.97c-.59.58-.6 1.53-.02 2.12.294.3.682.45 1.07.45.38 0 .76-.143 1.052-.43l6.916-6.785c1.867.654 3.865 1.028 5.954 1.028 2.324 0 4.54-.455 6.58-1.256l7.15 7.014c.292.287.672.43 1.05.43.39 0 .78-.15 1.072-.45.58-.59.57-1.54-.02-2.12l-6.414-6.292z"></path><path d="M30.358 25.068c-.77-.31-1.642.064-1.95.832-.554 1.375-1.89 2.263-3.408 2.263-1.503 0-2.835-.877-3.395-2.234-.316-.766-1.19-1.13-1.96-.815-.765.316-1.13 1.193-.813 1.96 1.024 2.483 3.446 4.088 6.168 4.088 2.75 0 5.178-1.627 6.19-4.144.31-.77-.063-1.643-.832-1.952"></path></g></svg>
          <span>我的</span>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
@import '../../../assets/stylus/border.styl'
.container
  height 100%
  display flex
  flex-direction column

  header 
    height .44rem
    background #cc4c43
    text-align center
    line-height .44rem
    font-size .16rem
    font-weight bold
    color #fff

  main
    flex 1
    nav
      display flex
      border_1px(0 0 1px 0)
      > div:first-child
        width .7rem
        display flex
        justify-content center
        align-items center
        color #999
        .city-entry-arrow
          width 0
          height 0
          border .04rem solid #b0b0b0
          border-left-color transparent
          border-right-color transparent
          border-bottom-color transparent
          display inline-block
          margin-left .04rem
          margin-top .05rem

      > div:nth-child(2)
        flex 1
        ul
          width 100%
          display flex
          padding-left 15%
          padding-right 25%
          li
            position relative
            flex 1
            line-height .44rem
            text-align center
            font-size .16rem
            color #666
            &.active
              color #cc4c43
            &.active::after
              width .4rem
              height 100%
              position absolute
              left 50%
              transform translate(-50%, 0)
              bottom 0
              content ''
              border-bottom solid .02rem #cc4c43

      > div:last-child
          width .44rem
          height .44rem
          border_1px(0 0 0 1px)
          background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABC1JREFUWAntWEtrU1EQPpO+ArYm1Y1I3VRXgu5EoSpVQaxCxUVxYTeCv8CtoFVxW0F/gBsLiguxoBaxWHyLS0EEdWWobrRprZC+cpzv3NyTOfeR3DS3duOF5M6ZMzPflzmvOVHq/9NcBqhRdz001D43UziktR5k35382ao1bUUcIj3NL3w+EtH4xu6eZ3Tv3iL6VvskJjh/vH/Lcql0UZM6o7TamAiQ1BxpNdaazV7pfDT1I5FPwKguQT0w0FFcLF5QSp9nYhsC/smapP5wfkfz7flr9PjxQjInz6omQZO1hdJ9rdW+RoLG2RKpt60d2VONZDOW4PyRA7uX9NJDBuuJACzwhHuQ0ZmHPNe+dm1qxbxTv38t83zU28tUPqG0Phnn25ah451P33yIiBtSRRJE5pZKpfchAKJp0vpSbvO2Wzz5V0LRhIIXU8vsz29nNdFlJmsWkegutGWze5JkMkQQc252cWYqYljH850twzT+6rcAqivqwb6u4vzKbTbEqrcPhjvX3t1fb05mrEdFwIIIkSN1I3/w2KlGySEkfOCrVOamxAKGt/ikNiw7GTRDu1D6Elit44bcyEg57J5co0dGMsXnE/fZo5pJXt1tHdkdtYbaySD2OYcczzkzrE2Sw88gjoFYvLjMgjI/jbctg2ka0V+WIE4IswkLOyyI1QyrCOGIiIWYUglMYEudlC1BHF+BE6KA1SqN05ArMQs2Fp9KBtsqXMESrJyt1V7e5+ptJVXj5JKJybGlRwhbdFqCrMPBbx9swraRshAR28GWcJKgs5nihJCGacoRsR1siWUJ+iWT3+kfX347zXcwdhBbYlmCUrkOso7DtAQrxaa1w8FvGykLwdiM/T0OwhJkg+oGyg1UJXFOzeojYjvYMr4k+FF2mJJJKlKUI2I72BLKEsQdQnagnkPJ5OhSaJiYXq1oo4WwbQ+XGL6MC47iO4Tf5ncP6jnRTkWsxKwWwYxpsGOiW4K4feGCI+1QbKKek7pmZMQyBawIAkxgC5UjWoLQ4vbFWeQLTuXhShjFJkolX7Xatym3ULjK6pqxDGaNoA6wV5fRaMB+sPhi4nozJL1a8IlbCxoQGq1VC8LEKVih+Icl/2cu+Xc1XPLDAVdD5loticCcK+Hin/Kn4uF955KsbtjAFj7wNRGcL+qdW5wFTs0nlEHfeg2vnT4EF9e0QoqGc5Ov71hlQIglCLs1uLh/5lnVyyeJ3V9Bkne7M/nJV3cD3EzTWSRBA0xgXA35p151VnfQsF4bOwPHwJwDGY+U5+SRLY8Vj/SdjgpTM4PSwWQzpT+PPDLlsSSZTEzQJ8uTP5W/35KSbJigTzSNdxxJamnpyz15+Q4YNedgGiRqxfAWRnhO6pWy3ZbWlSDIR5EkpV/4P2xdh9gngffs0f17kTmQy02+mZB9/+VmMvAXE7/38O8tTYkAAAAASUVORK5CYII=') no-repeat;
          background-size .2rem
          padding .1rem .15rem .1rem .1rem
          background-position .1rem

  footer
    height .5rem
    ul
      height 100%
      display flex
      border_1px(1px 0 0 0)
      li
        flex 1
        display flex
        flex-direction column
        justify-content center
        align-items center
        color #666
        i
          font-size .24rem
          line-height .24rem
        span
          font-size .12rem
          transform scale(0.9)
        &.active
          color #cc4c43
          svg 
            g
              fill #cc4c43
      
</style>