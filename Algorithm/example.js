function linearSearch(arr, target) {
  // Проходим по всему массиву
  for (let i = 0; i < arr.length; i++) {
    // Проверяем, совпадает ли текущий элемент с целевым
    if (arr[i] === target) {
      return i; // Возвращаем индекс, на котором найден целевой элемент
    }
  }
  return -1; // Возвращаем -1, если целевой элемент не найден в массиве
}

// Пример использования
const numbers = [10, 20, 30, 40, 50];
const target = 30;

const result = linearSearch(numbers, target);

if (result !== -1) {
  console.log(`Найдено значение ${target} на индексе ${result}`);
} else {
  console.log(`${target} не найдено в массиве`);
}
