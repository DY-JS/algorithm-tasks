// Сколько раз мать увидит, как мяч проходит перед ее окном (в том числе когда он падает и подпрыгивает?

// Для достоверности эксперимента должны быть соблюдены три условия:
// Плавающий параметр "h" в метрах должен быть больше 0
// Плавающий параметр "bounce" должен быть больше 0 и меньше 1
// Плавающий параметр "окно" должен быть меньше h.
// Если все три условия выше выполнены, вернуть положительное целое число, иначе вернуть -1.

// Примечание:
// Мяч можно увидеть только в том случае, если высота отскакивающего мяча строго больше параметра окна.

// Примеры:
// - h = 3, bounce = 0,66, window = 1,5, результат 3

// - h = 3, bounce = 1, window = 1.5, результат -1

// (Условие 2) не выполнено).

function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  let ballHeight = h;
  let count = 0;

  while (ballHeight > window) {
    count++;
    ballHeight *= bounce;
    if (ballHeight > window) {
      count++;
    }
  }

  return count;
}
