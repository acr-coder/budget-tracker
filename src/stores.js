import { derived, writable } from "svelte/store";
import { persistStore } from "./persistStore";

const initial = [
    {   id:1,
        transactionName:"maaş",
         transactionType:"Income",
         transactionAmount:5000,
         transactionDate:"01-01-2022"
        },
    {   id:2,
        transactionName:"kira",
         transactionType:"Expense",
         transactionAmount:2000,
         transactionDate:"05-01-2022"
        },
    {   id:3,
        transactionName:"altın",
         transactionType:"Investment",
         transactionAmount:1000,
         transactionDate:"09-01-2022"
        },
]

export const TransactionStore = persistStore('transactionData', initial)

export const countOfIncome = derived(
    TransactionStore,
   
    // @ts-ignore
    $TransactionStore => $TransactionStore.filter((item) => item.transactionType === "Income").length
)
export const countOfExpense = derived(
    TransactionStore,
   
    // @ts-ignore
    $TransactionStore => $TransactionStore.filter((item) => item.transactionType === "Expense").length
)
export const countOfInvestment = derived(
    TransactionStore,
   
    // @ts-ignore
    $TransactionStore => $TransactionStore.filter((item) => item.transactionType === "Investment").length
)

export const amountOfIncome = derived(
    TransactionStore,
    // @ts-ignore
    $TransactionStore => $TransactionStore.filter((item) => item.transactionType === "Income").reduce((a, item) => a + item.transactionAmount, 0)
)
export const amountOfExpense = derived(
    TransactionStore,
    // @ts-ignore
    $TransactionStore => $TransactionStore.filter((item) => item.transactionType === "Expense").reduce((a, item) => a + item.transactionAmount, 0)
)
export const amountOfInvestment = derived(
    TransactionStore,
    // @ts-ignore
    $TransactionStore => $TransactionStore.filter((item) => item.transactionType === "Investment").reduce((a, item) => a + item.transactionAmount, 0)
)

export const incomesStore = derived(
    TransactionStore,
    // @ts-ignore
    $TransactionStore => $TransactionStore.filter((item) => item.transactionType === "Income")
)
export const expensesStore = derived(
    TransactionStore,
    // @ts-ignore
    $TransactionStore => $TransactionStore.filter((item) => item.transactionType === "Expense")
)
export const investmentsStore = derived(
    TransactionStore,
    // @ts-ignore
    $TransactionStore => $TransactionStore.filter((item) => item.transactionType === "Investment")
)

const initialLanguage = "EN"

export const LanguageStore = persistStore('lang',initialLanguage)

const initialView = 'card'

export const ViewStore = persistStore('view',initialView)

const initialSelectedType = "all"

export const SelectedTypeStore = persistStore('type',initialSelectedType)

const initialSearch = ""

export const SearchStore = persistStore('search', initialSearch)
