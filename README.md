## 环境搭建

- npm init
- tsc --init
- npm install -D ts-node typescript

### 运行

测试用例写在 src/index.ts 中
yarn dev

## 算法与数据结构

- ### 线性查找法 LinearSearch

- ### 排序基础

  - 选择排序法 SelectionSort

    > 原理：每一次从待排序的数据元素中选出最小（或最大）的一个元素存放在序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到全部待排序的数据元素排完。

    - 选择排序法的复杂度分析：O(n^2)

    ```
    1 + 2 + 3 + ... + n = (1+n) * n / 2 = 1/2 * n^2 + 1/2 * n  => O(n^2)
    ```

  - 插入排序法

    > 原理：将一个记录插入到已经排好序的有序表中，从而一个新的、记录数增 1 的有序表。在其实现过程使用双层循环，外层循环对除了第一个元素之外的所有元素，内层循环对当前元素前面有序表进行待插入位置查找，并进行移动。

    - 插入排序法的复杂度分析：O(n^2)

    - 重要特性： 对于有序数组，插入排序的复杂度事 O(n)的
