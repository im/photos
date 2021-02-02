<template>
    <div
        class="home"
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled"
    >
        <el-row :gutter="12">
            <el-col
                v-for="img in imgList"
                :key="img.id"
                :xs="6"
                :sm="6"
                :md="6"
                :lg="6"
                :xl="1"
            >
                <el-image
                    class="img"
                    :src="thumbnail(img.download_url)"
                    lazy
                    @click="copy(img)"
                >
                    <div slot="placeholder" class="image-slot">
                        ...
                    </div></el-image
                ></el-col
            >
        </el-row>
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
    private limit: any = 50
    private thumbnail(url: any) {
        const id = url.split('/')[4]
        const u = url.split('/id/')[0]
        return u + '/id/' + id + '/400/200'
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
.home
    width 100vw
    height 100vh
    overflow-y auto
    .el-row
        min-height 200vh
.img
    width 100%
    min-height 100px
    cursor pointer
    transition 0.3s
    &:hover
        transform scale(0.9)
</style>
