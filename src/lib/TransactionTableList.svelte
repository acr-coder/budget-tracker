<script>
  import { SearchStore, SelectedTypeStore, TransactionStore, incomesStore, expensesStore,investmentsStore } from "../stores"
  import { fly, fade, slide, scale } from 'svelte/transition';
  import { flip } from 'svelte/animate'

    const handleDelete = (id) => {
      TransactionStore.update((currentTransactions) => {
    return currentTransactions.filter(transaction => transaction.id != id)
  })
    }

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

<table class="table  table-hover table-bordered  " style="background-color: #c5cbd8; ">
    <thead>
      <tr>
        
        <th scope="col">Name</th>
        <th scope="col">Amount</th>
        <th scope="col">Type</th>
        <th scope="col">Date</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
        {#each visibleTransactions as transaction (transaction.id)}
           <tr in:fade out:scale|local={{duration:1000}} animate:flip={{duration: 1000}} >
        
        <td>{transaction.transactionName}</td>
        <td>{transaction.transactionAmount}</td>
        <td>{transaction.transactionType}</td>
        <td>{transaction.transactionDate}</td>
        <td class="text-center"  ><button on:click={() => handleDelete(transaction.id)} class="delete-btn" >X</button> </td>
        
      </tr> 
        {/each}
      
      
      
    </tbody>
  </table>

  <style>
    .delete-btn{
        border: none;
        background: none;
        color: rgb(117, 115, 115);
        
    }
    .delete-btn:hover{
        color: #fff;
    }
  </style>