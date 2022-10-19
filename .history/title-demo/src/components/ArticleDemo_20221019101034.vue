<template>
    <div class="article-demo">
        <div class="article-nav">
            <span>全部</span>
            <span>精华</span>
            <span>分享</span>
            <span>问答</span>
            <span>招聘</span>
            <span>客户端测试</span>
        </div>
        <div class="article-list">
            <div class="article" v-for="article in showArticle" :key="article.id">
                <img src="" alt="">
                <div>
                    <span>{{article.reply_count}}</span>
                    <span>{{article.visit_count}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    async() {
        const res = await axios.get('http://localhost:3008/books')
        this.article = res.data
    }
}
</script>

<style>
.article {
    display: flex;
    align-items: center;
}

.article img {
    width: 50px;
}

.active {
    background-color: rgb(96, 240, 39);
    color: #fff;
}
</style>