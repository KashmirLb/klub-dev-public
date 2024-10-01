export const loopArray = (array: any[], index: number) => {
    if(index <= array.length - 1){
        return array[index]
    }
    if(index > 30){
        return array[0]
    }
    else{

        let newIndex = index

        while(newIndex > array.length - 1){
            newIndex = newIndex - array.length            
        }

        return array[newIndex]
    }
}