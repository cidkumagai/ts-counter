<script lang="ts">
  import { counterList } from '../stores';

  const addCounter = () => {
    counterList.update(() => {
      return [
        ...$counterList,
        { id: $counterList.length, title: 'new', number: 0 },
      ];
    });
  };
</script>

<button on:click={() => addCounter()}>new counter</button>

<style>
  button {
    width: 370px;
    height: 25px;
    background-color: #67d290;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: #67d290 solid 1px;
    border-radius: 5px;
    margin: 0 auto;
  }
</style>
