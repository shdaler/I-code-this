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

//

function binarySearch(array, target, left = 0, right = array.length - 1) {
  // Если левая граница пересекает правую, элемент не найден
  if (left > right) {
    return -1;
  }

  // Находим середину массива
  const mid = Math.floor((left + right) / 2);

  // Проверяем, равен ли элемент в середине искомому
  if (array[mid] === target) {
    return mid; // Возвращаем индекс найденного элемента
  }

  // Если искомое значение меньше, ищем в левой части
  if (target < array[mid]) {
    return binarySearch(array, target, left, mid - 1);
  }

  // Если искомое значение больше, ищем в правой части
  return binarySearch(array, target, mid + 1, right);
}

// Пример использования
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;

const result = binarySearch(sortedArray, target);
console.log(result); // Вывод: 3 (индекс числа 7 в массиве)
