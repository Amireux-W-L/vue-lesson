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
        <div class="article-list" v-if="articles.length">
            <div class="article" v-for="article in showArticles" :key="article.id">
                <img src="" alt="">
                <div>
                    <span>{{article.reply_count}}</span>
                    <span>{{article.visit_count}}</span>
                </div>
                <span :class="{active: article.top || article.good }">{{ article | transformTxt }}</span>
                <h3>{{article.title}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            articles: [],
            type: 'good'
        }
    },
    computed: {
        showArticles() {
            const { article, type } = this;
            return articles.filter( article => type === 'all' ? true :  type === 'good' ? article.good : type === 'share' ? article.type === 'share' :  type === 'job' ? article.type === 'job' : type === 'ask' ? article.type ==='ask' : article.type === 'dev' )
    }
        }
    }
    async created() {
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