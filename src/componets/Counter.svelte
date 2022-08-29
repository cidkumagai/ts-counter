<script lang="ts">
  import { counterList } from '../stores';
  import type { CounterItem } from '../types/types';

  // タイトル変更用関数
  const ChangeTitle = (id: number, title: string) => {
    counterList.update(($counterList) => {
      return $counterList.map((item) => {
        if (item.id === id) {
          item.title = title;
        }
        return item;
      });
    });
  };

  // インクリメント用関数
  const Increment = (id: number) => {
    const getIndex = (element: CounterItem) => element.id === id;
    $counterList[$counterList.findIndex(getIndex)].number++;
  };

  // デクリメント用関数
  const Decrement = (id: number) => {
    const getIndex = (element: CounterItem) => element.id === id;
    if ($counterList[$counterList.findIndex(getIndex)].number > 0) {
      $counterList[$counterList.findIndex(getIndex)].number--;
    }
  };

  // リセット用関数
  const Reset = (id: number) => {
    const getIndex = (element: CounterItem) => element.id === id;
    $counterList[$counterList.findIndex(getIndex)].number = 0;
  };

  // 削除用関数
  const Delete = (id: number) => {
    counterList.update(($counterList) => {
      return $counterList.filter((item) => item.id !== id);
    });
  };
</script>

{#each $counterList as counterItem}
  <div class="counter">
    <input
      class="counter_title"
      type="text"
      bind:value={counterItem.title}
      on:change={() => ChangeTitle(counterItem.id, counterItem.title)}
    />
    <p class="counter_number">{counterItem.number}</p>
    <div class="counter_buttons">
      <button
        class="counter_buttons_item add"
        on:click={() => Increment(counterItem.id)}>+</button
      ><button
        class="counter_buttons_item minus"
        on:click={() => Decrement(counterItem.id)}>-</button
      ><button
        class="counter_buttons_item reset"
        on:click={() => Reset(counterItem.id)}>0</button
      >
    </div>
    <p class="counter_delete" on:click={() => Delete(counterItem.id)}>x</p>
  </div>
{/each}

<style lang="scss">
  .counter {
    width: 370px;
    margin: 5px auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    border: 1px solid #f7fafc;
    border-radius: 5px;
    background-color: #f7fafc;
    box-shadow: 5px 5px 5px #e9e9e9;
    &_title {
      width: 120px;
      height: 25px;
      padding-left: 0.25rem;
      padding-right: 0.25rem;
      margin: auto 0;
      color: #718096;
      border: none;
    }
    &_number {
      margin: 0 20px 0 20px;
      font-size: 20px;
      font-weight: 600;
      width: 30px;
    }
    &_buttons {
      margin: auto 0;
      &_item {
        margin: 0;
        color: white;
        padding: 0.3em 0.5em;
        cursor: pointer;
        &:hover {
          border: 5px solid black;
        }
        &:focus {
          border: 5px solid black;
        }
      }
      .add {
        border: 1px solid #f56565;
        background-color: #f56565;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      .minus {
        background-color: #4299e1;
        border: 1px solid #4299e1;
      }
      .reset {
        background-color: #ebc84a;
        border: 1px solid #ebc84a;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
    &_delete {
      color: #a0aebf;
      cursor: pointer;
      padding: 0 10px 0 0;
      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
