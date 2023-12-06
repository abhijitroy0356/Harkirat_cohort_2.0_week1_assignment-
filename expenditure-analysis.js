/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const totalSpent_ref = {};

  transactions.forEach(tran => {
    const { category, price } = tran;

    if (totalSpent_ref[category]) {
      totalSpent_ref[category] += price;
    } else {
      totalSpent_ref[category] = price;
    }
  });

  const result = Object.keys(totalSpent_ref).map(category => ({
    category,
    totalSpent: totalSpent_ref[category],
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
