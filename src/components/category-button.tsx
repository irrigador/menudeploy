import {Text, Pressable, PressableProps} from 'react-native'
import { clsx } from "clsx"

type CategoryProps = PressableProps & {
    title: string
    isSelected?: boolean
}



export function CategoryButton ({title, isSelected, ...rest}: CategoryProps){
    return (
        <Pressable 
        className={clsx('bg-blue-100 px-4 justify-center rounded-md h-10', isSelected && "border-2 border-emerald-700")}
      {...rest}
        >

            
            <Text className='bg-blue-100 font-subtitle text-sm'>{title}</Text>
        </Pressable>
    )
}
