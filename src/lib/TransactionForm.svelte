<script>
  import { TransactionStore } from "../stores";
  let tName = "";
  let tType = "";
  let tDate = "";
  let tAmount;
  let message = "";

  const handleSubmit = () => {
    if (tName.trim().length > 3 && tName.trim().length < 20 ) {
        
      const newTransaction = {
        id: Date.now(),
        transactionName: tName.toLocaleLowerCase(),
        transactionType: tType,
        transactionDate: tDate,
        transactionAmount : tAmount
      };

      TransactionStore.update((currentTransaction) => {
        return [newTransaction, ...currentTransaction];
      });
      tName = ''
      tType = 'Income'
      tDate = ''
      tAmount = ''
      message = "İşlem başarılı"
    }else if(tName.trim().length < 4 || tName.trim().length > 20){
        message = "Transaction name must be between 3 and 20 characters."
    }

  };
</script>

<form
  on:submit|preventDefault={handleSubmit}
  class=" mt-3 p-1"
>
  <div class="mt-2 mb-2 text-center text-danger fw-bolder fs-4" >
    Add New Transaction
  </div>
  <div class="mb-2">
    <input
      type="text"
      required
      autocomplete="off"
      bind:value={tName}
      on:input={() => message = ''}
      class="form-control"
      id="tName"
      placeholder="Transaction Name..."
    />
  </div>
  <div class="mb-2">
    <input
      type="number"
      required
      bind:value={tAmount}
      class="form-control"
      id="tAmount"
      placeholder="Transaction Amount..."
    />
  </div>
  <select
    required
    class="form-select mb-2"
    bind:value={tType}
    aria-label="Default select example"
  >
    
    <option  value="Income" selected>Income</option>
    <option value="Expense">Expense</option>
    <option value="Investment">Investment</option>
  </select>
  <div class="mb-2">
    <input
      required
      type="date"
      bind:value={tDate}
      class="form-control m"
      id="tDate"
    />
  </div>
  <div class="form-text text-wrap text-danger">{message && message}</div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

<style>
</style>
