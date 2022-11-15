<script>
  import TransactionCard from "./TransactionCard.svelte";
  import { SearchStore, SelectedTypeStore, TransactionStore, incomesStore, expensesStore,investmentsStore } from "../stores"
  import { fly, fade, slide, scale } from 'svelte/transition';
  import { flip } from 'svelte/animate'

  let transactionList = []
  
$:if($SelectedTypeStore === "all"){
  transactionList = $TransactionStore
}else if($SelectedTypeStore === "Income"){
  transactionList = $incomesStore
}else if($SelectedTypeStore === "Expense"){
  transactionList = $expensesStore
}else if($SelectedTypeStore === "Investment"){
  transactionList = $investmentsStore
}

$: visibleTransactions = $SearchStore ?
		transactionList.filter(transaction => {
			return transaction.transactionName.match(`${$SearchStore.toLocaleLowerCase()}.*`) || transaction.transactionDate.match(`${$SearchStore.toLocaleLowerCase()}.*`)
		}) : transactionList;
  
</script>

<div  class="d-flex flex-column flex-md-row flex-wrap justify-content-around">
  {#each visibleTransactions as transaction (transaction.id) }
    <div in:fade out:scale|local={{duration:1000}} animate:flip={{duration: 1000}} class="my-card">
      <TransactionCard {transaction} />
    </div>
    
  {/each}
  
</div>

<style>
  .my-card {
   width: 75%;
   margin: auto;
   margin-bottom: 5px;
   position: relative;
 }

 @media (min-width: 768px) {
   .my-card {
     width: 25%;
     margin: 15px;
   }
 }
</style>
