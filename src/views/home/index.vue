<template>
    <div style="background: #ffffff;border-radius: 10px;">
        <a-page-header :title="welcomeSentence">
            <template #subTitle>
                <span style="color: rgb(102, 102, 102); margin-left: 20px;">{{ deptName }}</span>
            </template>
            <template #extra>
                {{ dayInfo }}
            </template>
            <a-row flex justify-between>
                <div style="width: calc(100% - 420px)">
                    <span class="last-login-info">{{ lastLoginInfo }}</span>
                    <span class="sentence">{{ heartSentence }}</span>
                </div>
                <div class="weather">
                    <iframe width="100%" scrolling="no" height="60" frameborder="0" allowtransparency="true"
                            src="//i.tianqi.com/index.php?c=code&id=12&icon=1&num=5&site=12"></iframe>
                </div>
            </a-row>
        </a-page-header>
    </div>
</template>

<script setup lang="ts">
    import { Solar, Lunar } from 'lunar-javascript'
    import _ from 'lodash'

    const username = "管理员"
    const deptName = "所属部门：研发部"

    // 欢迎语
    const welcomeSentence = computed(() => {
        let sentence: string;
        let now = new Date().getHours();
        if (now > 0 && now <= 6) {
            sentence = '午夜好，'
        } else if (now > 6 && now <= 11) {
            sentence = '早上好，'
        } else if (now > 11 && now <= 14) {
            sentence = '中午好，'
        } else if (now > 14 && now <= 18) {
            sentence = '下午好，'
        } else {
            sentence = '晚上好，'
        }
        return sentence + username
    })

    //上次登录信息
    const lastLoginInfo = computed(() => {
        return "上次登录：2024-09-30 18:00:00；中国|上海|闵行|移动；";
    })

    //日期、节日、节气
    const dayInfo = computed(() => {
        //阳历
        let solar = Solar.fromDate(new Date());
        let day = solar.toString();
        let week = solar.getWeekInChinese();
        //阴历
        let lunar = Lunar.fromDate(new Date());
        let lunarMonth = lunar.getMonthInChinese();
        let lunarDay = lunar.getDayInChinese();
        //节气
        let jieqi = lunar.getPrevJieQi().getName();
        let next = lunar.getNextJieQi();
        let nextJieqi = next.getName() + ' ' + next.getSolar().toYmd();

        return `${day} 星期${week}，农历${lunarMonth}${lunarDay}（当前${jieqi}，${nextJieqi} ）`;
    });

    // 毒鸡汤
    const heartSentenceArray = [
        '每个人的一生好比一根蜡烛，看似不经意间散发的光和热，都可能照亮和温暖他人。这是生活赋予我们的智慧，也让我们在寻常的日子成为一个温暖善良的人。',
        '立规矩的目的，不是禁锢、限制，而是教育；孩子犯了错，父母不能帮孩子逃避，而应该让孩子学会承担责任。让孩子有面对错误的诚实和勇气，这才是立规矩的意义所在。',
        '人这一辈子，格局大了、善良有了，成功自然也就近了。格局越大，人生越宽。你的人生会是什么样，与你在为人处世时的表现有很大关系。世间美好都是环环相扣的，善良的人总不会被亏待。',
        '平日里的千锤百炼，才能托举出光彩时刻；逆境中的亮剑、失败后的奋起，才能让梦想成真。哪有什么一战成名，其实都是百炼成钢。“天才”都是汗水浇灌出来的，天赋或许可以决定起点，但唯有坚持和努力才能达到终点。',
        '家，不在于奢华，而在于温馨；家，不在于大小，而在于珍惜。在家里，有父母的呵护，有爱人的陪伴，有子女的欢笑。一家人整整齐齐、和和睦睦，就是人生最大的幸福！',
        '每一个不向命运低头、努力生活的人，都值得被尊重。',
        '青年的肩上，从不只有清风明月，更有责任担当。岁月因青春慨然以赴而更加美好，世间因少年挺身向前而更加瑰丽。请相信，不会有人永远年轻，但永远有人年轻。',
        '人生路上，总有人走得比你快，但不必介意，也不必着急。一味羡慕别人的成绩，只会给自己平添压力、徒增烦恼。不盲从别人的脚步，坚定目标，才能找到自己的节奏，进而逢山开路、遇水搭桥。',
        '如果你真的在乎一个人，首先要学会的就是感恩对方的好。这样，对方才会在和你的相处中找到价值感，相处起来也会更加舒适愉悦。',
        '一个人只有心里装得下别人，有换位思考的品质，有为他人谋幸福的信念，才能真正做到慷慨施予。同样，也只有赠人玫瑰而无所求时，你才会手有余香、真有所得。',
    ]

    const heartSentence = computed(() => {
        return heartSentenceArray[_.random(0, heartSentenceArray.length - 1)]
    })
</script>

<style scoped lang="less">
.last-login-info {
    font-size: 13px;
    color: #333333;
    overflow-wrap: break-word;
    padding: 0;
    margin: 1px 0 0;
}
.sentence {
    display: block;
    font-size: 12px;
    color: #acacac;
    overflow-wrap: break-word;
    padding: 5px 0 0;
    margin: 6px 0 0;
}
.weather {
    width: 400px;
}
</style>