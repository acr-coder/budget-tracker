<script>
    import { Progress } from "sveltestrap";
    import {TransactionStore,countOfIncome, countOfExpense, countOfInvestment,amountOfInvestment, amountOfExpense,amountOfIncome } from  "../stores"

  
    $:budget = $amountOfIncome - $amountOfExpense - $amountOfInvestment
    $:totalCount = $countOfExpense + $countOfIncome + $countOfInvestment 

</script>


    <div class="  d-flex flex-column flex-md-row justify-content-around  ">
      <div class="t-card d-flex flex-column shadow p-3 mb-5  rounded  " style="background-color: #c5cbd8; max-width:75%">
        <div class="card-text fs-3 fw-bolder" style="color:#3b5998 ;" >Income: <span class="text-danger" >{$amountOfIncome}</span> </div>
        <div class="card-text fs-3 fw-bolder" style="color:#3b5998 ;">Transactions:<span class="text-danger" >{totalCount}</span></div>

        <div class="card-text fs-3 fw-bolder" style="color:#3b5998 ;" >Budget: <span class="text-danger" >{budget}</span> </div>

      </div>
      
      <div class="t-card d-flex flex-column shadow p-2 mb-5 rounded " style="background-color: #c5cbd8; max-width:75%">
        <div  class="card-text fs-2 fw-bolder" style="color:#3b5998 ;" >Investments</div>
        <div class="d-flex flex-column ms-1 ">
          <div class="d-flex align-items-center ">
            <div
              class="bg-primary rounded-circle "
              style="width: 10px; height:10px"
            />
            <div class="ms-2 card-text">{$countOfInvestment} transactions</div>
          </div>
          <div class="d-flex align-items-center ">
            <div
              class="bg-warning rounded-circle "
              style="width: 10px; height:10px"
            />
            <div class="ms-2 card-text">$ {$amountOfInvestment}</div>
          </div>
        </div>
        <Progress value={$amountOfIncome ?  $amountOfInvestment / $amountOfIncome * 100 : 0} color="danger" class="mt-1 mb-1"  />
        <span style="font-size: 12px;" >Investments / Incomes : <span class="fw-bolder">{$amountOfIncome ?  Math.floor($amountOfInvestment / $amountOfIncome * 100) : 0}%</span> </span>
      </div>
      <div class="t-card d-flex flex-column shadow p-2 mb-5  rounded  " style="background-color: #c5cbd8; max-width:75%">
        <div  class="card-text fs-2  fw-bolder" style="color:#3b5998 ;" >Expenses</div>
        <div class="d-flex flex-column ms-1 ">
          <div class="d-flex align-items-center ">
            <div
              class="bg-primary rounded-circle "
              style="width: 10px; height:10px"
            />
            <div class="ms-2 card-text">{$countOfExpense} transactions</div>
          </div>
          <div class="d-flex align-items-center ">
            <div
              class="bg-warning rounded-circle "
              style="width: 10px; height:10px"
            />
            <div class="ms-2 card-text">$ {$amountOfExpense}</div>
          </div>
        </div>
        <Progress value={ $amountOfIncome ? $amountOfExpense / $amountOfIncome * 100 : 0} color="danger" class="mt-1 mb-1" />
        <span style="font-size: 12px;" >Expenses / Incomes : <span class="fw-bolder">{ $amountOfIncome ? Math.floor($amountOfExpense / $amountOfIncome * 100) : 0}%</span></span>
      </div>

    </div>
  

  <style>
    .t-card{
        min-width: 25%;
    }
    @media (max-width: 768px) {
      .t-card{
        min-width: 75%;
        margin: auto;
      }  
  
}
    @media (min-width: 801px) {
  .card-text{
    font-size: 15px;
  }
}
  </style>