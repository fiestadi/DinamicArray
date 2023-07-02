//***********Task*********************
// Создайте структуру DynamicArray
// Реализуйте два пути создания:
// DynamicArray() - по умолчанию size = 10
// DynamicArray(capacity) - size = capacity

// Реализуйте методы:
// add(data) - добавляет в конец
// remove() - удаляет последний
// removeAt(index) - удаляет по индексу
// growSize() - увеличивает размер
// set(index, data) - изменяет элемент
// clean() - удаляет все элементы
// contains(data) - проверяет существует ли элемент
// isEmpty() - вернет false, если в структуре есть элемент



 
 // primer
 class DynamicArray {
   constructor(capacity = 10) {
     this.size = 0;
     this.capacity = capacity;
     this.array = new Array(capacity);
   }
 
   getSize() {
     return this.size;// metod dlia poluchenia razmera
   }
 
   getCapacity() {
     return this.capacity;//metod dlia poluchenia vmestimosti
   }
 
   add(data) {
     if (this.size === this.capacity) {
       this.growSize();
     }
     this.array[this.size] = data;
     this.size++;
   }
 
   remove() {
     if (this.size === 0) {
       throw new Error("Array is already empty");
     }
     this.size--;
     const data = this.array[this.size];
     this.array[this.size] = undefined;
     return data;
   }
 
   removeAt(index) {
     if (index < 0 || index >= this.size) {
       throw new Error("Invalid index");
     }
     const data = this.array[index];
     for (let i = index; i < this.size - 1; i++) {
       this.array[i] = this.array[i + 1];
     }
     this.size--;
     this.array[this.size] = undefined;
     return data;
   }
 
   growSize() {
     const newCapacity = this.capacity * 2;
     const newArray = new Array(newCapacity);
     for (let i = 0; i < this.size; i++) {
       newArray[i] = this.array[i];
     }
     this.array = newArray;
     this.capacity = newCapacity;
   }
 
   set(index, data) {
     if (index < 0 || index >= this.size) {
       throw new Error("Invalid index");
     }
     this.array[index] = data;
   }
 
   clean() {
     this.size = 0;
     this.array = new Array(this.capacity);
   }
 
   contains(data) {
     for (let i = 0; i < this.size; i++) {
       if (this.array[i] === data) {
         return true;
       }
     }
     return false;
   }
 
   isEmpty() {
     return this.size === 0;
   }
 }

 const arr = new DynamicArray(5);
 console.log(arr.getSize()); //  0
 console.log(arr.getCapacity()); // 5
 console.log(arr.isEmpty()); // true
 
 arr.add(10);
 arr.add(20);
 arr.add(30);
 console.log(arr.getSize()); //  3
 console.log(arr.isEmpty()); //  false
 
 console.log(arr.remove()); //  30
 console.log(arr.getSize()); // 2
 
 arr.set(0, 100);
 console.log(arr.array); //  [100, 20, undefined, undefined, undefined]
 
 arr.removeAt(1);
 console.log(arr.array); //[100, undefined, undefined, undefined, undefined]
 
 console.log(arr.contains(100)); //  true
 console.log(arr.contains(20)); //  false
 
 arr.clean();
 console.log(arr.getSize()); // Выводит: 0
 console.log(arr.getCapacity()); // Выводит: 5
 console.log(arr.isEmpty()); // Выводит: true
 console.log(arr.array); 