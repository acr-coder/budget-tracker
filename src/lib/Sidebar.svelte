<script>
  import TransactionForm from "./TransactionForm.svelte";
  import { SearchStore, SelectedTypeStore, ViewStore } from "../stores";
  import { createEventDispatcher } from "svelte";
  
  let selectedType = "all"
  let search = ""
export let view;
  

  $:$SearchStore = search

  $:$SelectedTypeStore = selectedType
 const dispatch = createEventDispatcher()

 const handleView = (view) => {
  dispatch('handleViewSelect',view)
 }

</script>
<div class="sidebar d-flex flex-column mt-3 rounded  p-3  " style="background-color: #c5cbd8; " >
    <div class="d-flex flex-sm-column justify-content-around">
      <div class:selected={view === "card"} on:click={() =>handleView("card")} style="cursor: pointer;" class="mb-2">Card View</div>
      <div class:selected={view === "table"} on:click={() =>handleView("table")} style="cursor: pointer;" class="mb-2">Table View</div>
    </div>
    <div>
      <div class="mt-3">
        <input
          type="search"
          bind:value={search}
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="search for transaction..."
        />
      </div>
      <select  bind:value={selectedType} class="form-select mt-3" aria-label="Default select example">
        <option value="all" selected>All Transactions</option>        
        <option value="Income">Incomes</option>
        <option value="Expense">Expenses</option>
        <option value="Investment">Investments</option>
      </select>
    </div>
    

    <TransactionForm  />
  </div>

  <style>
    .selected{
      color: red;
    }
  </style>