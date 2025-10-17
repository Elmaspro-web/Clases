
let array = [1,2,3,6,2,3,4];
let cont = [];
for (const numero of array)
{
    cont[numero] = (cont[numero] || 0) + 1;
    console.log(cont[numero])
}