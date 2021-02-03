<template>
    <div
        class="home"
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled"
    >
        <div class="item-img" v-for="img in imgList" :key="img.id">
            <el-button
                type="primary"
                icon="el-icon-document-copy"
                @click="copy(img)"
                circle
            ></el-button>
            <a :href="getLink(img)" title="点击打开原图" target="_blank">
                <el-image :src="thumbnail(img.download_url)" lazy>
                    <div
                        slot="placeholder"
                        v-loading="true"
                        element-loading-text="..."
                        element-loading-spinner="el-icon-loading"
                        element-loading-background="#f3f3f3"
                        class="image-slot"
                    ></div>
                    <div>1111</div>
                </el-image>
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component({
    components: {}
})
export default class Home extends Vue {
    get disabled() {
        return this.loading
    }
    get count() {
        return this.imgList.length
    }
    get previewSrcList() {
        return this.imgList.map((v: any) => {
            const id = v.download_url.split('/')[4]
            const u = v.download_url.split('/id/')[0]
            return `${u}/id/${id}/${v.width}/${v.height}`
        })
    }
    private getLink(img: any) {
        const id = img.download_url.split('/')[4]
        const u = img.download_url.split('/id/')[0]
        return `${u}/id/${id}/${img.width}/${img.height}`
    }
    private copy(img: any) {
        const input = document.createElement('input')
        input.setAttribute('readonly', 'readonly')
        input.setAttribute('value', img.download_url)
        document.body.appendChild(input)
        input.select()
        const res = document.execCommand('copy')
        document.body.removeChild(input)
        this.$message({
            message: '复制成功',
            type: 'success'
        })
    }
    private loading = false
    private imgList: any = []
    private page: any = 1
    private limit: any = 30
    private thumbnail(url: any) {
        const id = url.split('/')[4]
        const u = url.split('/id/')[0]
        return u + '/id/' + id + '/300/150'
    }
    private async getList() {
        this.loading = true
        const res = await axios.get('https://picsum.photos/v2/list', {
            params: {
                page: this.page,
                limit: this.limit
            }
        })
        this.imgList = this.imgList.concat(res.data || [])
        this.loading = false
    }

    private mounted() {
        this.imgList = []
        this.getList()
    }

    private load() {
        this.page = this.page + 1
        this.getList()
    }
}
</script>
<style lang="stylus">
$h = 150px
*
    margin 0
    padding 0
    box-sizing: border-box;

.home
    width 100vw
    height 100vh
    overflow auto
    display flex
    align-items center
    flex-wrap: wrap;
    padding 6px
.item-img
    width calc(20% - 12px)
    margin 6px
    height $h
    overflow hidden
    cursor pointer
    border-radius 4px
    transition 0.3s
    position relative
    background #f3f3f3
    &:hover
        .e-button
            display block
    .el-image
        width 100%
        height $h
    a
        display block
    .image-slot
        width 100%
        position absolute
        height $h
        z-index 999
        background #f3f3f3
    .el-button
        display block
        position absolute
        right 0
        bottom 0
        z-index 1
        border-top-left-radius 4px!important
        border-bottom-right-radius 0px!important
        border-top-right-radius 0px!important
        border-bottom-left-radius 0px!important
        padding 4px!important


    img
        transition 0.3s
        overflow hidden
        &:hover
            transform scale(1.1)
@media only screen and (max-width: 900px)
    .item-img
        width calc(33.333333% - 12px)
@media only screen and (max-width: 675px)
    .item-img
        width calc(50% - 12px)
</style>
