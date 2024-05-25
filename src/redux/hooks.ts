import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { AppDispatch, AppState } from './store'

//  Permite acceder a los reducers del Store
export const useAppDispatch = () => useDispatch<AppDispatch>()

// Permite acceder a los estados almacenados en el Store
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector