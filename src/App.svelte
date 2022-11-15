<script>
  import TransactionHeader from "./lib/TransactionHeader.svelte";
  
  import Sidebar from "./lib/Sidebar.svelte";
  import Header from "./lib/Header.svelte";
  import TransactionCardList from "./lib/TransactionCardList.svelte";
  import TransactionTableList from "./lib/TransactionTableList.svelte";

  let view = "card"

  const changeView = (e)=> {
    view = e.detail
  }
</script>

<div class="p-1 ">
  <!-- Header -->
  <Header />
  <div class="d-flex flex-column flex-sm-row ">
    <!-- Sidebar -->
    <Sidebar on:handleViewSelect = {changeView} {view} />
    <div class="main flex-grow-1 pt-3 ">
      <TransactionHeader />
      <div  class:show={view != "card"} >
        <TransactionCardList  /> 
      </div>
      <div class:show={view != "table"} style="width:85%; margin:auto;" >
        <TransactionTableList  /> 
      </div>
       
    </div>
  </div>
</div>

<style>
 .show{
  display: none;
 
 }
</style>
