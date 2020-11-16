import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterTable"
})
export class TableFilter implements PipeTransform {
  transform(items: any, searchKey: string): unknown {
    if (!items || !searchKey) {
      return items;
    }
    return items.filter(
      transaction =>
        transaction.merchant
          .toLocaleLowerCase()
          .includes(searchKey.toLocaleLowerCase()) ||
        transaction.transactionType
          .toLocaleLowerCase()
          .includes(searchKey.toLocaleLowerCase()) ||
        transaction.formattedDate
          .toLocaleLowerCase()
          .includes(searchKey.toLocaleLowerCase())
    );
  }
}
