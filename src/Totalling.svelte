<script lang="ts">
    import { counterList } from './stores';

    // タイトルを配列で取得
    $: titleList = $counterList.map((item) => {
        return item.title;
    });

    // カウンターの値の合計値を取得
    $: countSum = $counterList
        .map((item) => {
            return item.number;
        })
        .reduce(function (sum, element) {
            return sum + element;
        }, 0);
</script>

<div class="totalling">
    <p class="totalling_title_list">
        title list: {titleList.join(',')}
    </p>
    <p class="totalling_sum_count">sum of count:{countSum}</p>
</div>

<style lang="scss">
    .totalling {
        text-align: center;
        &_title_list {
            margin: 10px 0 5px 0;
        }
        &_sum_count {
            margin: 0;
        }
    }
</style>
